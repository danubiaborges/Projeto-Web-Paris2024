<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agenda Olímpiadas 2024</title>
</head>

<body>
<h1 align="center">Agenda Olimpíadas 2024</h1>

<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/pt/d/d1/2024_Summer_Olympics_logo.svg" height="150" width="150">
</p>

<p>Este projeto é uma aplicação web desenvolvida para o Trabalho Final da disciplina de Programação Web na Universidade Federal de Itajubá (UNIFEI). Nele, visamos consolidar e praticar os conceitos aprendidos durante as aulas.</p>

<h3>🎯 Objetivo da Aplicação</h3>

<p>Com a aproximação das Olimpíadas, muitos fãs de esportes desejam organizar seu cronograma para não perder nenhuma competição de seu interesse. A grande quantidade de eventos e a sobreposição de horários dificultam o acompanhamento manual. Sem uma ferramenta que centralize essas informações e permita a criação de um cronograma personalizado, os usuários podem facilmente perder competições importantes. Este projeto oferece uma solução prática, ajudando os usuários a gerenciar suas preferências esportivas de maneira eficiente e garantindo que eles possam assistir a todos os eventos desejados sem conflitos de horário.</p>
<p>O objetivo do projeto é criar uma aplicação que inclui uma tela de login e cadastro de usuários. Após a validação do login, os usuários poderão acessar um sistema de agendamento de modalidades olímpicas, com informações obtidas diretamente da API oficial do evento.</p>
<p>O sistema de agendamento permitirá a seleção de modalidades e, ao gerar o agendamento, retornará informações como data de início e término de cada modalidade selecionada. Além disso, um arquivo JSON contendo as modalidades escolhidas será salvo para cada usuário.</p>

<h3>📋 Requisitos Técnicos</h3>

    ✔️ Aplicação deve executar no navegador.
    ✔️ Tela de login e cadastro de usuário com validações.
    ✔️ Rotas privadas.
    ✔️ Uso de framework frontend.
    ✔️ Uso de framework backend.
    ✔️ Comunicação front-back via verbos HTTP.
    ✔️ Implementação de CRUD.
    ✔️ Verificação se e-mail de cadastro é único.
    ✔️ Funcionalidades de cadastro, atualização, remoção e leitura de recursos.
    ✔️ Versionamento e README.
    ✔️ Uso de API externa.

<h3>👨🏻‍🚀 API Utilizada</h3>
<ul>
    <li>API Oficial das Olimpíadas:
        <p><code>https://data.paris2024.org/api/explore/v2.1/catalog/datasets/paris-2024-sites-de-competition/records?limit=100</code></p>
    </li>
</ul>

<h3>💻 Tecnologias Utilizadas</h3>

<ul>
    <li>Postman</li>
    <li>Python</li>
    <li>React</li>
    <li>NodeJS</li>
    <li>Github</li>
</ul>

<h3>📊 Funcionalidades da Aplicação</h3>

<ul>
    <li><strong>Tela de Login e Cadastro de Usuário</strong>
        <ul>
            <li>Permite que novos usuários se cadastrem com nome, email, senha e confirmação de senha.</li>
            <li>Realiza validações como campos obrigatórios, verificação de formato de email válido e correspondência de senha e confirmação de senha.</li>
            <li>Garante que o email utilizado no cadastro seja único e não esteja já cadastrado no sistema.</li>
            <li>Permite que usuários registrados façam login utilizando email e senha.</li>
        </ul>
    </li>
    <li><strong>Sistema de Agendamento de Modalidades Olímpicas</strong>
        <ul>
            <li>Obtem e exibe informações das modalidades olímpicas diretamente da API oficial do evento.</li>
            <li>Permite que os usuários selecionem suas modalidades favoritas para acompanhar.</li>
            <li>Gera um cronograma personalizado para cada usuário com as datas de início e fim das modalidades selecionadas.</li>
            <li>Salva as modalidades selecionadas por cada usuário em um arquivo JSON.</li>
        </ul>
    </li>
    <li><strong>Gerenciamento de Modalidades</strong>
        <ul>
            <li>Permite que os usuários adicionem novas modalidades ao seu cronograma.</li>
            <li>Permite que os usuários atualizem informações das modalidades já selecionadas.</li>
            <li>Permite que os usuários removam modalidades do seu cronograma.</li>
            <li>Exibe uma lista com todas as modalidades selecionadas pelo usuário.</li>
        </ul>
    </li>
    <li><strong>Rotas Privadas</strong>
        <ul>
            <li>Protegee rotas sensíveis e garante que apenas usuários autenticados possam acessá-las.</li>
            <li>Utiliza tokens de validação (JSON Web Tokens) para autenticar e autorizar usuários.</li>
        </ul>
    </li>
    <li><strong>Integração com API Externa</strong>
        <ul>
            <li>Busca informações das modalidades olímpicas utilizando a API oficial do evento.</li>
        </ul>
    </li>
</ul>

<h3>🖥️ Interface</h3>

<p>Em construção...</p>

<h3>🚀 Execute o Projeto</h3>

<p>Para obter uma cópia do projeto e rodar/testar, clone o repositório em uma pasta na sua máquina:</p>
<pre><code>git clone https://github.com/seu-repositorio.git</code></pre>

<h3>✒️ Autores</h3>

<ul>
    <li><a href="https://github.com/danubiaborges", target="_blank">Danúbia Borges</a></li>
    <li><a href="https://github.com/lavinyrodr", target="_blank">Laviny Laurindo</a></li>
    <li><a href="https://github.com/vkendis", target="_blank">Vinícius Kendi</a></li>
    <li><a href="https://github.com/viniciusnreno", target="_blank">Vinícius Renó</a></li>
</ul>

<h3>👨‍🏫 Orientador</h3>

<ul>
    <li><a href="https://github.com/phillima">Phyllipe de Souza Lima</a></li>
</ul>

<p>Feito com ❤️ pela equipe</p>
</body>
</html>