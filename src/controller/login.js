import passport from 'passport'
import  { Strategy as LocalStrategy } from 'passport-local'
import { usuariosDao } from '../daos/index.js'
import { isValidPassword } from '../utils/crypt.js'


passport.use('login' , new LocalStrategy( async ( username , password , done) => {

    usernameField: 'username'
    passwordField: 'password'

    const usuarios = await usuariosDao.listarAll()
    if( usuarios === false ) done( Error('error') )
    const user = usuarios.find(usuario => usuario.email === username)
    if( !user) {
         done(null, false)
    }else{
        isValidPassword(password , user.password) ? done(null, user) : done(null, false)
    }}))

passport.serializeUser(( user, done ) => {
    done(null, user.id)
})

passport.deserializeUser( async (id, done) => {
    done(null, await usuariosDao.listar(id))
})


export const postLoginController = async (req, res) => {
        console.log(req.body)
        passport.authenticate('login', {
            successRedirect: '/home',
            failureRedirect: '/error'
        })
}

export const getLoginController = (req, res) => {
    res.render('pages/login')
}