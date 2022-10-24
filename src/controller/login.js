import passport from 'passport'
import { usuariosDao } from '../daos/index.js'
import  { Strategy as LocalStrategy } from 'passport-local'
import { isValidPassword } from '../utils/crypt.js'



passport.use('login' , new LocalStrategy( async ( username , password , done) => {

    const usuarios = await usuariosDao.listarAll()
    if( usuarios === false ) done( Error('error') )
    const user = usuarios.find(usuario => usuario.email === username)
    if( !user) {
         done(null, false)
    }else{
        isValidPassword(password , user.password) ? done(null, user) : done(null, false)
    }}) )


passport.serializeUser(( user, done ) => {
    done(null, user.id)
})

passport.deserializeUser( async (id, done) => {
    done(null, await usuariosDao.listar(id))
})



export const postLoginController = passport.authenticate('login', {
    successRedirect: '/home',
    failureRedirect: '/error',
})

let subtitleLogin
let ruta = 'login'


export const getLoginController = (req, res) => {
    res.render('pages/login', {subtitleLogin: subtitleLogin})
}