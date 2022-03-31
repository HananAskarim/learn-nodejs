const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact, findContact } = require('./utils/contacts');

const app = express();
const port = 3000;

// gunakan ejs
app.set('view engine', 'ejs');

// Thrid-party Middleware
app.use(expressLayouts);

// Built-in middleware
app.use(express.static('public'));

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
  const contacts = loadContact();
  
  res.render('contact', { 
    title: 'Halaman Contact',
    layout: 'layouts/main-layout',
    contacts,
  });
});

app.get('/contact/:nama', (req, res) => {
  const contact = findContact(req.params.nama);

  res.render('detail', { 
    title: 'Halaman Detail Contact',
    layout: 'layouts/main-layout',
    contact,
  });
});

app.use('/',(req,res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
