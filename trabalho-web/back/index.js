const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;

// Define o caminho absoluto para os arquivos JSON
const usersFilePath = path.join(__dirname, 'usuarios.json');

app.use(cors());
app.use(bodyParser.json());

// Rota de login
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const data = await fs.readFile(usersFilePath, 'utf8');
    const users = JSON.parse(data);
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      res.status(200).send({ message: "Login bem-sucedido!" });
    } else {
      res.status(401).send({ message: "Email ou senha inválidos." });
    }
  } catch (error) {
    res.status(500).send({ message: "Erro ao ler o arquivo de usuários." });
  }
});

// Rota de cadastro
app.post('/auth/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const data = await fs.readFile(usersFilePath, 'utf8');
    let users = JSON.parse(data);

    // Verifica se o e-mail já existe
    const emailExists = users.some(u => u.email === email);

    if (emailExists) {
      res.status(409).send({ message: "Email já cadastrado." });
    } else {
      // Adiciona novo usuário com array sports vazio
      users.push({ email, password, sports: [] });
      await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
      res.status(201).send({ message: "Usuário cadastrado com sucesso!" });
    }
  } catch (error) {
    res.status(500).send({ message: "Erro ao processar o cadastro." });
  }
});

// Rota de salvar agendamento
app.post('/saveSchedule', async (req, res) => {
  const { email, sports } = req.body;

  if (!email || !sports) {
    return res.status(400).send({ message: "Dados incompletos." });
  }

  try {
    let data = await fs.readFile(usersFilePath, 'utf8');
    let users = JSON.parse(data || '[]');  

    const index = users.findIndex(u => u.email === email);
    if (index !== -1) {
      users[index].sports = sports;
    } else {
      res.status(404).send({ message: "Usuário não encontrado." });
      return;
    }

    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
    res.status(201).send({ message: "Agendamento salvo com sucesso!" });
  } catch (error) {
    console.error('Erro ao acessar ou modificar o arquivo:', error);
    res.status(500).send({ message: "Erro ao processar o agendamento.", error: error.message });
  }
});

// Rota para carregar agendamento
app.get('/loadSchedule', async (req, res) => {
  const { email } = req.query;

  try {
    const data = await fs.readFile(usersFilePath, 'utf8');
    const users = JSON.parse(data || '[]');
    const userSchedule = users.find(u => u.email === email);

    if (userSchedule) {
      res.status(200).send(userSchedule);
    } else {
      res.status(404).send({ message: "Nenhum agendamento encontrado para este usuário." });
    }
  } catch (error) {
    console.error('Erro ao acessar o arquivo:', error);
    res.status(500).send({ message: "Erro ao carregar agendamento." });
  }
});

// Rota para desfazer agendamento
app.post('/undoSchedule', async (req, res) => {
  const { email } = req.body;

  try {
    let data = await fs.readFile(usersFilePath, 'utf8');
    let users = JSON.parse(data || '[]');
    const index = users.findIndex(u => u.email === email);

    if (index !== -1) {
      users[index].sports = [];
      console.log(`Agendamento para o usuário ${email} foi removido.`);
    } else {
      res.status(404).send({ message: "Usuário não encontrado." });
      return;
    }

    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
    res.status(200).send({ message: "Agendamento removido com sucesso!" });
  } catch (error) {
    console.error('Erro ao acessar ou modificar o arquivo:', error);
    res.status(500).send({ message: "Erro ao desfazer agendamento." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
