const {body} = require("express-validator");

const updateStatusValidator = () => {
  return [
    body("status")
      .isString()
      .withMessage("O status do pedido é necessário")
  ]
}

module.exports = {
  updateStatusValidator,
}