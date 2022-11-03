import * as dotenv from 'dotenv'
dotenv.config()

export const urlMongo = process.env.URL_MONGO
export const secretSessionMongo = process.env.SECRET_SESSION_MONGO
export const port = process.env.PORT
export const  userMailAdmin = process.env.USER_MAILADMIN
export const passMailAdmin = process.env.PASS_MAILADMIN