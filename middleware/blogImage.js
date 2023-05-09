const multer = require('multer')
    // const path = require('path')
if (process.env.NODE_ENV == 'production') {
    var featuredImageStoragePath = './client/build/uploads/blogs/featured_image/'
    var coverImageStoragePath = './client/build/uploads/blogs/cover_image/'
} else {
    var featuredImageStoragePath = './client/public/uploads/blogs/featured_image/'
    var coverImageStoragePath = './client/public/uploads/blogs/cover_image/'
}
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file) {
            if (file.fieldname === "image") { // if uploading resume
                cb(null, featuredImageStoragePath);
            } else { // else uploading image
                cb(null, coverImageStoragePath);
            }
        }
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname;
        cb(null, fileName)
    }
});
var uploadBlogImage = multer({
    storage: storage,
    limits: {
        fileSize: 204857678, // 10 Mb
    },
    fileFilter: (req, file, cb) => {
        const fileSize = parseInt(req.headers['content-length']);
        console.log(fileSize)
        // if ((file.mimetype !== 'image/png' || file.mimetype !== 'image/jpg' || file.mimetype !== 'image/jpeg') && (fileSize >= 1048576)) {
        //     return cb(new Error('Only .png, .jpg and .jpeg format allowed! '));
        // } else {
        // }
        cb(null, true)
    }
});
module.exports = uploadBlogImage;