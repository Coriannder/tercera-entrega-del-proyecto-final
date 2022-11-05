import express from 'express'
import { Server as HttpServer }  from 'http'
import session from 'express-session'
import { mongoSession } from './session/mongoSession.js'
import passport from 'passport'
import { port } from './config/config.js'
import { login } from './routes/login.js'
import { register } from './routes/register.js'
import { error } from './routes/error.js'
import { home } from './routes/home.js'
import { cart } from './routes/cart.js'
import { logout } from './routes/logout.js'


const app = express()
const httpServer = new HttpServer(app)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))


//------------------Configuracion EJS--------------------//
app.set('views', './views')
app.set('view engine', 'ejs')


//-----------------Session-------------------------------//
app.use(session(mongoSession))

//-----------------Passport------------------------------//
app.use(passport.initialize())
app.use(passport.session())

//------------------------------RUTAS---------------------//
app.use( '/login', login )
app.use( '/logout' , logout)
app.use( '/register' , register )
app.use( '/error' , error )
app.use( '/home' , home )
app.use( '/cart' , cart )


//------------------Configuracion Server---------------------------------//

const server = httpServer.listen(port, async ()=>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on(`error`, error => console.log(`Error en servidor: ${error}`))

