# Documento de Versão
Este documento tem o objetivo de manter um histórico de versões do sistema.

As versões devem obedecer o padrão **0.0.0** onde o *primeiro dígito* se refere a completude de uma versão major, o *segundo dígito* é referente a completude de uma função/versão minor e o *terceiro dígito* deve ser usado para se referir ao concerto de bugs, falhas e erros.

## Histórico de versões
| Versão | Pontos importantes | Observações |
|--------|:-------------------|:------------|
| 0.1.0 | Criação e inicialização do sistema. | Nenhum alerta pertinente. |
| 0.2.0 | Rotas de usuário criadas e funcionais com middlewares, controllers e todo o devido acesso ao banco de dados. | Existem melhorias a ser feitas na parte que integra usuário aos pedidos. |
| 0.2.1 | Melhorias realizadas nas funcionalidades de usuário. | nenhum alerta pertinente. |
| 0.3.1 | Funcionalidades de Produto (models, controllers, middlewares, rotas) implementadas. | Nenhum alerta pertinente. |
| 0.4.2 | Funcionanlidade de pedidos funcionais; Correções realizadas nos models com chave estrangeira. | nenhum alerta pertinente. |
| 0.5.2 | Funcionalidades de carrinho de compras implementadas. | nenhum alerta pertinente. |
| 0.6.3 | Funcionalidades de categoria implementadas; Correções nos controllers nos códigos de mongoose.Types.ObjectId(). | Nenhum alerta pertinente. |
| 0.7.3 | Funcionalidades de like e deslike em produto adicionado; Carrinho criado junto de usuário. | Nenhum alerta pertinente. |
| 0.7.4 | Concertos nas funcionalidades de produto. | Nenhum alerta pertinente. |
| 0.7.5 | Concertos nas funcionalidades de carrinho. | Nenhum alerta pertinente. |
| 0.7.6 | Adição de pre("save) ao model de usuário e remoção da funcao de criar carrinho do controller | Nenhum alerta pertinente. |
| 0.7.7 | Model de categoria agora remove categorias deletadas da lista de categorias dos produtos. | Nenhum alerta pertinente. |