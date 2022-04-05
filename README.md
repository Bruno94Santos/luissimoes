# Aplicação Luis Simões

## Estrutura dos ficheiros

<strong>db0.php</strong> - ficheiro de ligação à DATA API da Tabela 00<br/>
<strong>db1.php</strong> - ficheiro de ligação à DATA API da Tabela 01 com JOIN da Tabela 02<br/>
<strong>DT0.js</strong> - ficheiro de configuração da Data Tables<br/>
<strong>index.html</strong> - View principal<br/>
<strong>index2.html</strong> - Segunda view

## REST API com as Base de dados

### Acesso à Tabela 01 e 02 - Retorna os valores com o ARTICULO preenchido URL
https://api-cartrack-bruno.herokuapp.com/readAllTab1.php?ARTICULO=

### Acesso à Tabela 00 - Retorna todos os valores
https://api-cartrack-bruno.herokuapp.com/readAllTab0.php


