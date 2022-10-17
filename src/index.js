const express = require('express');
var morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3001;
const route = require('./routes');
const db = require('./config/db');
// connect db
db.conect();
// http logger
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(morgan('combined'));
//template engie
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

console.log('PATCH:', path.join(__dirname, 'resource/views'));
// method

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
