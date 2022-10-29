import { Router } from 'express'
import { getHomeController, postHomeController } from '../controller/home.js'

export const home = Router()
home.get('/' , getHomeController)
home.post('/' , postHomeController)