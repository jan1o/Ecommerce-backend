# Documento de Requisitos
Documento construído a partir do do Modelo BSI - Doc 001 - Documento de Visão que pode ser encontrado no link: [Doc de visão BSI](https://docs.google.com/document/d/1DPBcyGHgflmz5RDsZQ2X8KVBPoEF5PdAz9BBNFyLa6A/edit?usp=sharing).

## Perfis dos Usuários
O sistema poderá ser utilizado por diversos usuários. Temos os seguintes perfis/atores:

| Perfil | Descrição |
|--------|:----------|
| Administrador | Este usuário é responsável por manter a loja alimentada e atualizada, podendo manipular produtos e processar pedidos. |
| Cliente | Este usuário é o cliente comum da loja, que pode navegar pela loja e realizar pedidos de produtos. |
| Visitante | Este usuário pode navegar pela loja e visualizar os produtos. |

## Lista de Requisitos Funcionais

| Requisito | Descrição | Ator |
|-----------|:---------|:-----|
| RF001 - Cadastrar Cliente | Cadastrar um novo cliente no sistema com as informações de nome, email, senha e confirmar senha. | Visitante |
| RF002 - Visualizar Cliente | O cliente cadastrado pode visualizar seus dados próprios. | Cliente |
| RF003 - Alterar Cliente | Alterar um cliente cadastrado podendo alterar informações de nome, email, data de nascimento, número de telefone e imagem de exibição. | Cliente |
| RF004 - Deletar Cliente | Deletar um cliente cadastrado. | Cliente |
| RF005 - Realizar Login | Usuário realiza login no sistema com os dados de email e senha. | Administrador/Cliente |
| RF006 - Realizar Logoff | Usuário realiza logoff no sistema. | Administrador/Cliente |
| RF007 - Listar Produtos | Usuário pode visualizar alguns produtos cadastrados na loja pela página principal ou acessar a área de produtos para listar todos os produtos da loja. | Visitante/Cliente/Administrador |
| RF008 - Listar Produtos por Categoria | Usuário visualiza produtos de uma certa categoria. | Visitante/Cliente/Administrador |
| RF009 - Pesquisar Produto | Usuário pesquisa por produtos através de uma barra de pesquisa. | Visitante/Cliente/Administrador |
| RF010 - Visualizar Detalhes de Produto | Usuário visualiza os detalhes de um produto em específico na página deste produto. | Visitante/Cliente/Administrador |
| RF011 - Adicionar Produto ao Carrinho | Usuário adiciona um produto ao seu carrinho de compras. | Cliente |
| RF012 - Visualizar Carrinho | Usuário visualiza seu carrinho de compras podendo observar quais produtos o compõe. | Cliente |
| RF013 - Realizar Compra | Usuário realiza compra através do seu carrinho enviando os dados pertinentes aos pagamento. | Cliente |
| RF014 - Alterar Quantidade de Itens no Carrinho | Usuário altera a quantidade de itens de seu carrinho podendo até mesmo remover um item. | Cliente |
| RF015 - Limpar Carrinho | Usuário limpa seu carrinho de compras removendo todos os itens com o apertar de um botão. | Cliente |
| RF016 - Listar Pedidos | Usuário visualiza todos os seus pedidos realizados. | Cliente |
| RF017 - Visualizar Pedidos | Usuário visualiza informações de um pedido em específico. | Cliente |
| RF018 - Solicitar Reclame de Pedido | Usuário solicita que uma análise de pedido seja realizada por motivos de atraso na entrega, defeito de produtos, erro de produtos ou qualquer outro motivo pertinente. | Cliente |
| RF019 - Adicionar Produto | Adm adiciona um novo produto a loja enviando o nome, imagens, preço, categoria e informações técnicas sobre o produto. | Administrador |
| RF020 - Listar Produtos no Dashboard | Adm visualiza todos os produtos cadastrados no sistema. | Administrador |
| RF021 - Visualizar Produto no Dashboard | Adm pode visualizar os dados de um produto específico. | Administrador |
| RF022 - Atualizar Produto no Dashboard | Adm atualiza dados de um produto. | Administrador |
| RF023 - Deletar Produto no Dashboard | Adm deleta um produto. | Administrador |
| RF024 - Listar Categorias no Dashboard | Adm lista todas as categorias de produtos cadastrados na loja. | Administrador |
| RF025 - Adicionar Nova Categoria no Dashboard | Adm adiciona uma nova categoria de produto. | Administrador |
| RF026 - Remover uma Categoria no Dashboard | Adm remove uma categoria de produto. | Administrador |
| RF027 - Listar Pedidos no Dashboard | Adm visualiza todos os pedidos realizados, podendo filtrar por pedidos pedidos finalizados, em aberto,  pendentes de pagamento ou sob alerta. | Administrador |
| RF028 - Visualizar Pedido no Dashboard | Adm pode visualizar os dados de um pedido em específico. | Administrador |
| RF029 - Processar Pedido no Dashboard | Adm pode alterar o status de um pedido de acordo com o estágio de completude (em aberto, pendente de pagamento, enviado, sob alerta ou finalizado). | Administrador |

## Lista de Requisitos Não-Funcionais

| Requisito | Descrição |
|-----------|:----------|
| RNF001 - Deve ser acessível via navegador | Deve abrir perfeitamente nos principais navegadores. |
| RNF002 - Frontend Desenvolvido em Nextjs | O código do frontend deve ser desenvolvido utilizando html5, css3 e javascript através do framework Nextjs. |
| RNF003 - Backend Desenvolvido em Nodejs | O código do backend e API deve ser desenvolvido com javascript através do framework Nodejs. |
| RNF004 - Banco de Dados MongoDB | O banco de dados deve ser o MongoDB, conectado ao backend pelo ODM Mongoose. |
| RNF005 - Imagens Salvas no AWS S3 | As imagens de produtos e usuários devem ser armazenadas na AWS S3. |
| RNF006 - Sessão de Usuário Baseado em JWT | A sessão de usuários deve ser feita através do Json Web Token. |
| RNF007 - Pagamentos Administrados via Efí Gerencianet | O sistema deve se conectar a API de pagamentos da Gerencianet. |






