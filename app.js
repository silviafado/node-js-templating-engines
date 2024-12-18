const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const users = [];

app.engine('hbs', expressHbs({ defaultLayout: 'main-layout', extname: 'hbs' }));
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
    res.render('index', { pageTitle: 'Add User' });
});

app.get('/users', (req, res, next) => {
    res.render('users', { pageTitle: 'User', users: users });
});

app.post('/add-user', (req, res, next) => {
    users.push({ name: req.body.username });
    res.redirect('/users');
});

app.listen(3000);
