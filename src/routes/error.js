import { Router } from 'express'

export const error = Router()

error.get('/' , (req, res ) => {
    res.render('pages/error' , {message: req.session.errorMessage,
    ruta: req.session.ruta})
    req.session.destroy
})