// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHcer = require('./por-hacer/por-hacer');
const color = require('colors');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHcer.crear(argv.descripcion);


        break;
    case 'listar':
        let listado = porHcer.getListado();

        for (let tarea of listado) {
            console.log('===============Por Hacer============='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('====================================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHcer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHcer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no es reconocido');
        break;
}