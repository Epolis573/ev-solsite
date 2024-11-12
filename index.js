//Import

const express = require('express')
const app = express()
const port = 3000

// Static
app.use(express.static(__dirname + "/public/"));

// Set Views
app.set('views', (__dirname + '/views'));
app.set('view engine', 'ejs');

// Routes
app.get('', (req, res) => {
    res.render('index');
});
app.get('/index', (req, res) => {
    res.render('index');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/careers', (req, res) => {
    res.render('careers');
});
app.get('/news', (req, res) => {
    res.render('news');
});
app.get('/privacy', (req, res) => {
    res.render('privacy');
});
app.get('/sitemap-index', (req, res) => {
    res.render('sitemap-index');
});
app.get('/smb-service', (req, res) => {
    res.render('smb-service');
});
app.get('/white-label', (req, res) => {
    res.render('white-label');
});
app.get('/why-use', (req, res) => {
    res.render('why-use');
});
app.get('/news/news-sample1', (req, res) => {
    res.render('./news-stored/newssample1');
});
app.get('/news/news-sample2', (req, res) => {
    res.render('./news-stored/newssample2');
});

// Listen
app.listen(port, () => console.info(`Listening on port ${port}`));