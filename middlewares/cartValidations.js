const {body} = require("express-validator");

const addProductValidator = () => {
  return [
    body("id")
      .isString()
      .withMessage("O id do produto é necessário")
  ];
}

const removeProductValidator = () => {
  return [
    body("id")
      .isString()
      .withMessage("O id do produto é necessário")
  ];
}

const cartAmountValidator = () => {
  return [
    body("id")
      .isString()
      .withMessage("O id do produto é necessário"),
    body("amount")
      .isDecimal({ gt: 0 })
      .withMessage("A quantidade é obrigatória")
  ];
}

module.exports = {
  addProductValidator,
  removeProductValidator,
  cartAmountValidator
}