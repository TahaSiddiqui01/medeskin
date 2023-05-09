const mongoose = require('mongoose')
const BlogSchema = mongoose.Schema({
    category: {
        type: String,
        required: [true, 'The category field is required']
    },
    title: {
        type: String,
        required: [true, 'The title field is required']
    },
    slug: {
        type: String,
    },
    description: {
        type: String,
        required: [true, 'The description field is required']
    },
    content: {
        type: String,
        required: [true, 'The content field is required']
    },
    image: {
        data: Buffer,
        contentType: String
    },
    coverimage: {
        data: Buffer,
        contentType: String
    },

    featured_image: {
        type: String,
        // required: [true, 'The featured image field is required']
    },
    cover_image: {
        type: String,
        // required: [true, 'The cover image field is required']
    },
}, { timestamps: true });

const Blog = mongoose.model('blogs', BlogSchema)
module.exports = Blog