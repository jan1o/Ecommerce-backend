const {body} = require("express-validator");

const userCreateValidation  = () => {
  return [
    body("name")
      .isString().withMessage("O nome é obrigatório.")
      .isLength({min: 3}).withMessage("O nome precisa ter no mínimo 3 caracteres."),
    body("email")
      .isString().withMessage("O email é obrigatório.")
      .isEmail().withMessage("Insira um email válido."),
    body("password")
      .isString().withMessage("A senha é obrigatória.")
      .isLength({min: 5}).withMessage("A senha deve ter no mínimo 5 caracteres."),
    body("confirmPassword")
      .isString().withMessage("A confirmação da senha é obrigatória.")
      .custom((value, {req}) => {
        if(value != req.body.password){
          throw new Error("As senhas não são iguais.");
        }
        return true;
      })
  ];
};

const loginValidation = () => {
  return [
    body("email")
      .isString().withMessage("O email é obrigatório.")
      .isEmail().withMessage("Digite um email válido."),
    body("password")
      .isString().withMessage("A senha é obrigatória.")
  ];
};

const userUpdateValidation = () => {
  return [
    body("name")
      .optional()
      .isLength({min: 3}).withMessage("O nome precisa de pelo menos 3 caracteres."),
    body("birth")
      .optional()
      .isString()
      .withMessage("A data de nascimento deve ser escrita em formato de texto"),
    body("telephone")
      .optional()
      .isString()
      .withMessage("O telephone deve ser escrito em formato de texto"),
    body("image")
      .optional()
      .isURL()
      .withMessage("A imagem de profile deve ser uma URL"),
    body("password")
      .optional()
      .isLength({min: 5}).withMessage("A senha deve ter pelo menos 5 caracteres."),
  ];
};

module.exports = {
  userCreateValidation,
  loginValidation,
  userUpdateValidation,
};