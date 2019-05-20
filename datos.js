const estudiante1 = require("./segundo");
console.log(estudiante1.estudiante);
console.log("El promedio del estudiante es: " + estudiante1.obtenerpromedio(estudiante1.estudiante.notas.mat,estudiante1.estudiante.notas.ingles,estudiante1.estudiante.notas.programacion))

/**DESTRUCTURACION */
const {estudiante,obtenerpromedio} = require("./segundo");
console.log("el nombre del estudiante es: "+estudiante.nombre);
console.log("el promedio del estudiantes es: "+ estudiante.notas.ingles+ estudiante.notas.mat+ estudiante.notas.programacion);
/**otra desestructuracion */
let {nombre,edad,notas:{mat,ingles,programacion}} = estudiante;
console.log("El nombre del estudiante es: "+nombre);

/**REQUIRE INTERNO */
const fs = require ('fs');
let creararchivo = (estudiante) =>{
    text = "el nombre del estudiante es: "+nombre + "\n" +
            "ha obtenido un promedio de: "+ obtenerpromedio(mat,ingles,programacion)
            fs.writeFile("Promedio.txt",text,(err) => {
                if (err) throw (err);
                console.log("se ha creado el archivo")
            });
}

creararchivo(estudiante);