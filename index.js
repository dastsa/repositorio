const opciones = {
    mat:{
        //es un valor por defecto
        //default:0,
        demand: true,
        alias: 'm'
    },
    ingles:{
        //es un valor por defecto
        //default:0,
        demand: true,
        alias: 'i'
    },
    programacion:{
        //es un valor por defecto
        //default:0,
        demand: true,
        alias:'p'
    }
}
const argv = require('yargs')
        .command('promedio','calcular el proimedio de los estudiantes', opciones)
        .argv
console.log(argv.mat);
console.log("El nombre del estudiante es : "+argv.nombre);
console.log("el promedio es: "+(argv.m+argv.i+argv.p)/3);