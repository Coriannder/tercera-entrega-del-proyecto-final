import { usuariosDao } from "../daos/index.js"
import { createHash } from "../utils/crypt.js"



export const postRegisterController = async ( req , res  ) => {
    const usuarios = await usuariosDao.listarAll()
    const email = req.body.email
    const password = createHash(req.body.password)
    if(usuarios.find(usuario => usuario.email == email)){
        req.session.message = "Este email ya se encuentra registrado, prueba con otro"
        req.session.route = 'register'
        req.session.fileName = req.body.fileName
        res.redirect('/error')

    } else {
        await usuariosDao.guardar( {
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            edad: req.body.edad,
            email: email,
            password: password,
            photo: req.body.fileName,
            phone: '+549' + req.body.telefono
        })
        res.redirect('/login')
    }

}

export const getRegisterController = ( req, res ) => {
    res.render('pages/register')
}






