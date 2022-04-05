# Aplicação Luis Simões

## Estrutura dos ficheiros

<strong>db0.php</strong> - ficheiro de ligação à DATA API da Tabela 00<br/>
db1.php - ficheiro de ligação à DATA API da Tabela 01 com JOIN da Tabela 02<br/>
DT0.js - ficheiro de configuração da Data Tables<br/>
index.html - View principal<br/>
index2.html - Segunda view

## REST API com as Base de dados

### Acesso à Tabela 01 e 02 - Retorna os valores com o ARTICULO preenchido URL
https://api-cartrack-bruno.herokuapp.com/readAllTab1.php?ARTICULO=

### Acesso à Tabela 00 - Retorna todos os valores
https://api-cartrack-bruno.herokuapp.com/readAllTab0.php


