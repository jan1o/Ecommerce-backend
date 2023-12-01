# Documento de Banco de Dados
Este documento tem por função orientá-lo sobre a construção do Banco de Dados utilizado nesse projeto. O MongoDB foi escolhido por ser simples, rápido, poderoso e maleavel, mas ele se difere um pouco dos bancos de dados como PostgreSQL ou MySQL por ser um NOSQL. Na verdade o MOngoDB é um bd orientado a documentos onde não existe uma padronização rígida como nos outros citados anteriormente. Na verdade na própria documentação do MongoDB são encorajadas práticas que desafiam as formas normais e até mesmo o conceito de bd relacional para que o desempenho seja priorizado. Dá para dizer que uma das filosofias do MongoDB é algo como "não importa como foi feito, mas sim se é eficiente". 
Devido a esse paradigma nossa documentação será um pouco diferente. Aqui você verá modelos simples de como estruturar o seu bd no MongoDB Atlas (plataforma online e gratuíta para testes). Por padrão o MongoDb cria um atributo de _id nos registros, então estou omitindo esse atributo.

## Tabelas
* user(name, birth, telephone, image, email, password, favorites[]);
* product(name, description, previousPrice, price, shipping, total, likes[], images[], categories[], specifications[{spec, desc}]);
* order(user, data{name, secondName, state, city, neighborhood, address, complement}, products[], total, status, request_cancel);
* cart(user, products[{product, amount}], total);
* category(name);
* admin(user);
