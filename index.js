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
app.get('/carrers', (req, res) => {
    res.render('carrers');
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

// Listen
app.listen(port, () => console.info(`Listening on port ${port}`));