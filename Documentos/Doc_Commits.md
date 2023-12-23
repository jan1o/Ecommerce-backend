# Documento de Commits
Este documento tem a finalidade de acompanhar e explicar o mais detalhadamente possível cada commit realizado. 

## Estrutura de commits
Cada commit (com exceção dos commits de criação) devem ter uma estrutura de texto específica seguindo a seguinte regra:

`Commit - Número / Texto / Versão`

Onde:

**Commit** - *Texto padrão de inicialização*;

**Número** - *Número sequencial deste commit*;

**Texto** - *Texto (preferencialmente palavras simples) que descreva o commit*;

**Versão** - *Versão do sistema a que esse commit mais se aproxima*.

Exemplo: 

`Commit - 015 / concerto falha do form x / 0.3.12`

## Histórico de commits:
Abaixo devem ser listados todos os commits realizados (com exceção dos commits de criação) seguindo o modelo da tabela:

| Commit | Versão | Descrição |
|:----------|:----------:|:----------|
| 000 | 0.0.0 | Commit fictício para exemplificação | 
| 001 | 0.2.0 | Rotas, controllers e middlewares de usuários criados. |
| 002 | 0.2.1 | Rotas, controllers e middlewares de produtos criados, mas ainda não funcionais; melhorias feitas nas funcionalidades relacionadas ao usuário. |
| 003 | 0.3.1 | Rotas, controllers e middlewares de produtos funcionais; model de Admin criado. |
| 004 | 0.4.2 | Funcionanlidade de pedidos funcionais; correções realizadas nos models com chave estrangeira. |
| 005 | 0.5.2 | Funcionalidades de carrinho de compras funcionais. |
| 006 | 0.6.3 | Funcionalidades de categoria implementadas e funcionais. |
| 007 | 0.7.3 | Middlewares melhorados e novas funcionalidades em produto e usuário adicionadas. |
| 008 | 0.7.3 | Middleware de produto tratando as categories. |
| 009 | 0.7.4 | Concertos nas funcionalidades de produto. |
| 010 | 0.7.5 | Concertos nas funcionalidades de carrinho. |
| 011 | 0.7.6 | Melhorias no model e controller de usuário. |
| 012 | 0.7.7 | Melhorias model de categorias. |
| 013 | 0.7.8 | Melhorias no model de produto. |
| 014 | 0.7.8 | Quantidade de produtos de get best e newest redefinido para 4. |
| 015 | 0.7.8 | Validate user token adicionado. |
| 016 | 0.7.8 | Pequeno ajuste no UserController. |
| 017 | 0.7.8 | Ajuste no model de Order para melhor adequação ao sistema. |
| 018 | 0.7.9 | Ajuste no controller de produto na parte de likes. |
| 019 | 0.7.10 | Ajuste no controller de cart. | 