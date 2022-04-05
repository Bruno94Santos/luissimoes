# Aplicação Luis Simões

## Estrutura dos ficheiros

db0.php - ficheiro de ligação à DATA API da Tabela 00
db1.php - ficheiro de ligação à DATA API da Tabela 01 com JOIN da Tabela 02
DT0.js - ficheiro de configuração da Data Tables
index.html - View principal
index2.html - Segunda view

## REST API com as Base de dados

### Acesso à Tabela 01 e 02 - Retorna os valores com o ARTICULO preenchido URL
https://api-cartrack-bruno.herokuapp.com/readAllTab1.php?ARTICULO=

### Acesso à Tabela 00 - Retorna todos os valores
https://api-cartrack-bruno.herokuapp.com/readAllTab0.php


