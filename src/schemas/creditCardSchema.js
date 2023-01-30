import joi from 'joi'

export const cardSchema = joi.object({
    cardName: joi.string().required(),
    cardNumber: joi.string().creditCard().required(),
    expirationDate: joi.date().format("MM/YYYY").required(),
    cardCVC: joi.string().min(3).required()
})