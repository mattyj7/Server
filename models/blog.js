const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true});

// create variable that stores the model of the collection blog (pluralises collection to blogs)
const Blog = mongoose.model('Blog', blogSchema);