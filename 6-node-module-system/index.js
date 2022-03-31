//const nama = 'Hanan Askarim';
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama('Hanan Askarim'));

//const cetakNama = require('./coba'); // local modul


const coba = require('./coba');

console.log(
    coba.cetakNama('Hanan'), 
    coba.PI, coba.mahasiswa.cetakMhs(), 
    new coba.Orang()
);