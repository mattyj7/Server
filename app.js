const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const Blog = require('./models/blog')

// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://new_user_admin:pKzVt9ixez3T8qa1@cluster0.ufkxu5o.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(3000))
.catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

//middleware
app.use(morgan('dev'))
app.use(express.static('public'));

// mongoose and mongo sanbox routs
app.get('/blogs', (req, res) => {
    Blog.find()
     .then((result) => {
        res.render('blogs', { title: 'All Blogs', blogs: result})
     })
     .catch((err) =>)
})

app.get('/', (req, res) => {
    res.render('index', { title: 'Home'});
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// 404
app.use((req, res) => {
    res.status(404).render('404', { title: '404 Not Found'});
})