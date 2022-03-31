const validator = require('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('hanan@gmail.com'));
// console.log(validator.isMobilePhone('08245678', 'id-ID'));
// console.log(validator.isNumeric('08245678'));

// console.log(chalk.blue('Hello World!'));
// console.log(chalk.italic.black.bgBlue('Hello World!'));
const nama = 'Hanan';
const pesan = chalk`Lorem {bgRed.black.bold aku} kamu hai. Nama saya : ${nama}`;
console.log(pesan);
