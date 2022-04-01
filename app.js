
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');
require('colors');


console.clear();

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

//con esto se instalaran todos los modulos que se encuentran en el archivo json
//npm install


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log('\n', nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));