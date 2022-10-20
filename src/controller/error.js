

export const getErrorController = (req, res ) => {
    res.render('pages/error' , {message: req.session.errorMessage,
    ruta: req.session.ruta})
    req.session.destroy
}