import  { Strategy as LocalStrategy } from 'passport-local'
import { usuariosDao } from '../daos/index.js'
import { isValidPassword } from '../utils/crypt.js'


export const loginLocalStrategy =  new LocalStrategy( async ( username , password , done) => {

    const usuarios = await usuariosDao.listarAll()
    if( usuarios === false ) done( Error('error') )
    const user = usuarios.find(usuario => usuario.email === username)
    if( !user) {
         done(null, false)
    }else{
        isValidPassword(password , user.password) ? done(null, user) : done(null, false)
    }})


