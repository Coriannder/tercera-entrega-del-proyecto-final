import { Router } from 'express'
import { getCartController } from '../controller/cart.js'
export const cart = Router()

cart.get('/' , getCartController)