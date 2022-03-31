const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const app = express();
const port = 3000;

// gunakan ejs
app.set('view engine', 'ejs');

// Thrid-party Middleware
app.use(expressLayouts);
app.use(morgan('dev'));

// Built-in middleware
app.use(express.static('public'));

// Aplication level middleware
app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

app.get('/', (req, res) => {
  // res.sendFile('./index.html', {root: __dirname });
  const mahasiswa = [
    {
      nama: 'Hanan Askarim',
      email: 'hanan@gmail.com',
    },
    {
      nama: 'Ana',
      email: 'ana@gmail.com',
    },
    {
      nama: 'Widi',
      email: 'widi@gmail.com',
    },
  ];
  res.render('index', { 
    nama: 'Hanan Askarim', 
    title: 'Halaman Home',
    mahasiswa,
    layout: 'layouts/main-layout',
  });
});

app.get('/about', (req, res) => {
  res.render('about', { 
    layout: 'layouts/main-layout',
    title: 'Halaman About',
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', { 
    layout: 'layouts/main-layout',
    title: 'Halaman Contact',
  });
});

app.get('/product/:id', (req, res) => {
  res.send(`Prodact ID : ${req.params.id} <br> Category ID : ${req.query.category}`);
});

app.use('/',(req,res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
