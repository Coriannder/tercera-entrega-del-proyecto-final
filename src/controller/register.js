import { usuariosDao } from "../daos/index.js"
import { createHash } from "../utils/crypt.js"


export const postRegisterController = async ( req , res  ) => {
    const usuarios = await usuariosDao.listarAll()
    const email = req.body.email
    const password = createHash(req.body.password)
    if(usuarios.find(usuario => usuario.email == email)){
        req.session.errorMessage = "El email ya se encuentra registrado, prueba con otro"
        req.session.ruta = req.originalUrl
        res.redirect('/error')
        console.log(req.session)
    } else {
        await usuariosDao.guardar( {email: email, password: password })
        res.redirect('/login')
    }
}


export const getRegisterController = ( req, res ) => {
    res.render('pages/register')
    
}






