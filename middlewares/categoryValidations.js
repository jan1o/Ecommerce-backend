const {body} = require("express-validator");

const categoryCreateValidator = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome da categoria é obrigatório"),
    body("image")
      .isURL()
      .withMessage("A imagem da categoria deve ser uma URL para uma imagem")
  ];
}

const categoryUpdateValidator = () => {
  return [
    body("name")
      .optional()
      .isString()
      .withMessage("O nome da categoria deve ser em formato de texto"),
    body("image")
      .optional()
      .isURL()
      .withMessage("A imagem da categoria deve ser uma URL para uma imagem")
  ]
}

module.exports = {
  categoryCreateValidator,
  categoryUpdateValidator
}