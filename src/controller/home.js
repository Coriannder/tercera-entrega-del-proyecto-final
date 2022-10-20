


 export const getHomeController = async (req, res) => {
    /* if(req.isAuthenticated()){
        const email = (await usuariosDao.listar(req.session.passport.user))[0].email */
        res.render('pages/home',{nombre: 'email'})
        /* console.log((await usuariosDao.listar(req.session.passport.user))[0])
    } else {
        res.redirect('/login' )
    } */
}