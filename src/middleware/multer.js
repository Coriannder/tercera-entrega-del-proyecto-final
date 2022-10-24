import multer from "multer"


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, 'porfilePhoto-' + req.email)
    }
})

export const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (!file.originalname.match(/\.(jpg)$/)) {
        return cb(new Error('Error en el tipo de archivo.'));
        }
        cb(null, true);
}})