import express from 'express'
import { Server as HttpServer }  from 'http'
import session from 'express-session'
import { mongoSession } from './middleware/mongoSession.js'
import passport from 'passport'
import { loginLocalStrategy } from './localStrategys/index.js'
import { usuariosDao } from './daos/index.js'
import { port } from './config/config.js'


const app = express()
const httpServer = new HttpServer(app)
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//------------------Configuracion EJS--------------------//
app.set('views', './views')
app.set('view engine', 'ejs')


//-----------------Session-------------------------------//
app.use(session(mongoSession))

//-----------------Passport------------------------------//
app.use(passport.initialize())
app.use(passport.session())

passport.use('login' , loginLocalStrategy )

passport.serializeUser(( user, done ) => {
    done(null, user.id)
})
passport.deserializeUser( async (id, done) => {
    done(null, await usuariosDao.listar(id))
})




//------------------Configuracion Server---------------------------------//

const server = httpServer.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on(`error`, error => console.log(`Error en servidor: ${error}`))
