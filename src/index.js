const express = require('express');
var morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3001;

// http logger
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
//template engie
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource\\views'));

console.log('PATCH:', path.join(__dirname, 'resource/views'));
// method
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
