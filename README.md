## Apresentação 
Este é um sistema de ecommerce criado por Jânio Fernandes, bacharel em Sistemas de Informação pela Universidade Federal do Rio Grande do Norte.

Os requisitos do sistema (ou o que define esse sistema) podem ser encontrados no link [doc de requisitos](https://github.com/jan1o/Ecommerce-backend/blob/master/Documentos/Doc_Requisitos.md). As tecnologias escolhidas para o desenvolvimento do ecommerce foram:

* javascript, html5, css3 - programação web;
* Nextjs - framework da Vercel baseada em Reactjs;
* Node - para o backend;
* express - para criação da api no backend;
* mongodb/mongoose - banco de dados e ODM orientado a documentos;
* aws s3 - para storage de imagens;
* jwt - json web token para sessão de usuário;
* Gerencianet - API de pagamentos online.

### Documentação
Você pode encontrar uma simples documentação do sistema acessando [Link para documentos](https://github.com/jan1o/Ecommerce-backend/tree/master/Documentos), ou se prefere acessar documento a documento acesse os seguinte links:

* [Documento de Requisitos](https://github.com/jan1o/Ecommerce-backend/blob/master/Documentos/Doc_Requisitos.md)
* [Documento de Commits](https://github.com/jan1o/Ecommerce-backend/blob/master/Documentos/Doc_Commits.md)
* [Documento de Versão](https://github.com/jan1o/Ecommerce-backend/blob/master/Documentos/Doc_Versao.md)
* [Documento de Banco de Dados](https://github.com/jan1o/Ecommerce-backend/master/Documentos/Doc_BD.md)

## .env
Lembre-se de incializar um arquivo .env para variáveis de ambiente. Este arquivo não deve ser versionado no git, mas a seguir você encontra as variáveis que deve preencher com seus próprios dados para que o sistema funcione perfeitamente:

``` 
  PORT: 5000
  DB_USER= ****
  DB_PASS= ****
  JWT_SECRET= ****
  
```

*As variáveis estão incompletas e serão atualizadas de acordo com o desenvolvimento do sistema*
