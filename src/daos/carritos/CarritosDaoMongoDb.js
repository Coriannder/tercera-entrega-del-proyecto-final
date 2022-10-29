import ContenedorMongoDb from "../../container/ContenedorMongoDb.js";

class CarritoDaoMongoDb extends ContenedorMongoDb {
    constructor () {
        super('carritos', {
            productos: { type: [], required: true },
            userID: {type: String, required: true}
        })
    }
}

export default CarritoDaoMongoDb