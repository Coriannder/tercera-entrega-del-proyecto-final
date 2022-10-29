import { usuariosDao , productosDao } from "../daos/index.js"



export const getHomeController = async (req, res) => {
    if(req.isAuthenticated()){
        const nombre = (await usuariosDao.listar(req.session.passport.user))[0].nombre
        const productos = await productosDao.listarAll()
        res.render('pages/home', {
            nombre: nombre,
            productos: productos,
            active: 'home' //pestana activa de NAVBAR
        })
    } else {
        res.redirect('/login' )
        
    }
}

export const postHomeController =  (req, res) => {
    console.log('body post home producto', req.body.producto)
}