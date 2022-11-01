

export const getLogoutController = (req, res) => {
    console.log('Estas en ruta /logout')
    res.render('pages/logout', { nombre : req.session.nombre})
    req.session.destroy()
}