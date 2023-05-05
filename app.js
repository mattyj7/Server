const express = require('express');

// express app
const app = express();

app.use(express.static(__dirname + '/public'));

// register view engine
// !!! Next step
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

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