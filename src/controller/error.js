

export const getErrorController = (req, res ) => {
    res.render('pages/error' , {message: req.session.errorMessage,
    ruta: req.session.ruta})
    console.log('session en /error', req.session)
    req.session.destroy
}