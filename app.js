
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('yargs').argv;


console.clear();

console.log(process.argv);
console.log(argv);

console.log('base: yargs', argv.base);

// con el process.argv podemos ver de donde vienen los argumentos de consola
// const[ , , arg3 = 'base=5' ] = process.argv;
// const[ , base = 5] = arg3.split('=');

// con el comando: npm install colors para colocar colores en la consola de node

//para instalar nodemon solo en desarrollo: npm install nodemon --save-dev
//const base = 5;

//para instalar versiones especificas de colores: npm i colors@versionespecifica 
//i = install
//https://www.npmjs.com/package/colors 


//para instalar yargs: npm i yargs
//https://www.npmjs.com/package/yargs


// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(err => console.log(err));