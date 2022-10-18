import { Router } from 'express'
import { getRegisterController , postRegisterController } from '../controller/register.js';



export const register = Router();

register.get('/', getRegisterController )

register.post('/', postRegisterController )