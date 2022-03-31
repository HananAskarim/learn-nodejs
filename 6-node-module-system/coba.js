function cetakNama(nama) {
    return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
    nama : 'fatwa dwi',
    umur : 21,
    cetakMhs() {
        return `Hello, nama saya ${this.nama}, umur saya ${this.umur} tahun.`
    }
}

class Orang {
    constructor() {
        console.log('Objek orang telah dibuat!!');
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang,
// };

module.exports = { cetakNama, PI, mahasiswa, Orang};