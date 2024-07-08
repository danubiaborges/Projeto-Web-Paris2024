const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs').promises;

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Rota de login
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const data = await fs.readFile('usuarios.json', 'utf8');
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
    const data = await fs.readFile('usuarios.json', 'utf8');
    let users = JSON.parse(data);

    // Verifica se o e-mail já existe
    const emailExists = users.some(u => u.email === email);

    if (emailExists) {
      res.status(409).send({ message: "Email já cadastrado." });
    } else {
      // Adiciona novo usuário
      users.push({ email, password });
      await fs.writeFile('usuarios.json', JSON.stringify(users, null, 2));
      res.status(201).send({ message: "Usuário cadastrado com sucesso!" });
    }
  } catch (error) {
    res.status(500).send({ message: "Erro ao processar o cadastro." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
