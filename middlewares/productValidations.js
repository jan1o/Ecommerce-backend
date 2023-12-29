const {body} = require("express-validator");

const productCreateValidator = () => {
  return [
    body("name")
      .isString().withMessage("O nome é obrigatório.")
      .isLength({min: 3}).withMessage("O nome precisa ter no mínimo 3 caracteres."),
    body("description")
      .isString().withMessage("A descrição é obrigatória."),
    body("previousPrice")
      .isDecimal({ gt: 0 }).withMessage("O preço anterior é obrigatório."),
    body("price")
      .isDecimal({ gt: 0 }).withMessage("O preço é obrigatório."),
    body("shipping")
      .isDecimal().withMessage("O valor do frete é obrigatório."),
    body("categories")
      .optional()
      .isArray()
      .withMessage("Caso desejar adicionar categorias, envie uma lista."),
    body("specifications")
      .optional()
      .isArray()
      .withMessage("Caso desejar adicionar especificações, envie uma lista."),
    body("images")
      .isArray()
      .withMessage("É necessário enviar uma lista de imagens para exibição.")
  ];
}

const productUpdateValidator = () => {
  return [
    body("name")
      .isString().withMessage("O nome é obrigatório.")
      .isLength({min: 3}).withMessage("O nome precisa ter no mínimo 3 caracteres."),
    body("description")
      .isString().withMessage("A descrição é obrigatória."),
    body("previousPrice")
      .isDecimal({ gt: 0 }).withMessage("O preço anterior é obrigatório."),
    body("price")
      .isDecimal({ gt: 0 }).withMessage("O preço é obrigatório."),
    body("shipping")
      .isDecimal({}).withMessage("O valor do frete é obrigatório."),
    body("categories")
      .optional()
      .isArray()
      .withMessage("Caso desejar adicionar categorias, envie uma lista."),
    body("specifications")
      .optional()
      .isArray()
      .withMessage("Caso desejar adicionar especificações, envie uma lista."),
    body("images")
      .isArray()
      .withMessage("è necessário enviar uma lista de imagens para exibição.")
  ];
}


module.exports = {
  productCreateValidator,
  productUpdateValidator,
}