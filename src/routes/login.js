import { Router } from 'express'
import { getLoginController, postLoginController } from '../controller/login.js'



export const login = Router();


login.get('/' ,  getLoginController)

login.post('/' , postLoginController)

