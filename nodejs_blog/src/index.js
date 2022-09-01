const path = require('path')
const express = require('express')
const morgan = require('morgan')
const hbs = require('express-handlebars');
const route = require('./routes/index')
const app = express();
const port = 3000

// static

app.use(express.static(path.join(__dirname,'public')))

// middleware

app.use(
    express.urlencoded({
      extended: true,
    }),
);
app.use(express.json());

// HTTTP logger

app.use(morgan('combined'));

// Template engine
app.engine('hbs', hbs.engine({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'));

// Router

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})