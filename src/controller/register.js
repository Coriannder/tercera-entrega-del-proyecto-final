import { usuariosDao } from "../daos/index.js"
import { createHash } from "../utils/crypt.js"
import { sendMailNewUser } from "../utils/nodemailer.js"



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
        const newUser = {
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            edad: req.body.edad,
            email: email,
            password: password,
            photo: req.body.fileName,
            phone: '+549' + req.body.telefono
        }

        await usuariosDao.guardar( newUser ).then( res => sendMailNewUser( newUser ))
        //sendMailNewUser( newUser )

        //console.log('/uploads/',newUser.photo)
        res.redirect('/login')
    }
}

export const getRegisterController = ( req, res ) => {
    res.render('pages/register')
}






