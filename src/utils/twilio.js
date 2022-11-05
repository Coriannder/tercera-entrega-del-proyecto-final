import twilio from 'twilio'
import { twilioSID, twilioToken, twilioPhoneNumber, twilioWhastsAppPhoneNumber, adminWhatsAppPhoneNumber} from '../config/config.js'

const client = twilio( twilioSID , twilioToken )

export const sendSMSCartToUser = async () => {

    try {
        const message = await client.messages.create({
            body: 'HOLA QUE TAL',
            from: twilioPhoneNumber,
            to: '+543816636350'
        })
        console.log(message)

    }catch (error) {
        console.log(error)
    }
}


export const sendWhatsAppNewUser = async ( newUser ) => {

    const msg = `NUEVO USUARIO REGISTARDO
    NOMBRE: ${newUser.nombre}
    DIRECCION: ${newUser.direccion}
    EDAD: ${newUser.edad}
    TELEFONO: ${newUser.phone}
    EMAIL: ${newUser.email}`

    try {
        const message = await client.messages.create({
            body: msg,
            from: `whatsapp:${twilioWhastsAppPhoneNumber}`,
            to: `whatsapp:${adminWhatsAppPhoneNumber}`
        })
        console.log('MENSAJE ok', message)

    } catch (error) {
        console.log('error AL ENVIAR',error)
    }
}

export const sendMessageNewCart = async (nombre , email ,  cart ) => {  // funcion que envie whatsApp y SMS con nuevo carrito comprado

    let listaProductosCarrito = `NUEVO CARRITO de ${nombre } ( email: ${email} ) \n`
        cart.productos.forEach(element => {
            listaProductosCarrito +=`${element.title}   $${element.price} x ${element.cantidad} \n`
        });

    const msg = listaProductosCarrito + 'Total: $' + cart.total


    //-----------------ENVIO DE WHATSAPP-------------------//
    try {
        const message = await client.messages.create({
            body: msg,
            from: `whatsapp:${twilioWhastsAppPhoneNumber}`,
            to: `whatsapp:${adminWhatsAppPhoneNumber}`
        })
        console.log('ENVIO DE ok', message)
    } catch (error) {
        console.log('error AL ENVIAR WHATSAPP',error)
    }
    //-----------------ENVIO DE SMS------------------------//
    try {
        const message = await client.messages.create({
            body: msg,
            from: twilioPhoneNumber,
            to: '+543816636350'
        })
        console.log('ENVIO DE SMS OK' , message)

    }catch (error) {
        console.log('ERROR AL ENVIAR SMS' , error)
    }
}


