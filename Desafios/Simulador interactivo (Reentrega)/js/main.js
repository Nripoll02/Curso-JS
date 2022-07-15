let alumnos = [];
function RegistrarAlumno(){
    cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos que desea registrar"));
    for(i=0; i<cantidadAlumnos; i++){
        alumnos.push({nombre: prompt("Ingrese el nombre del alumno"),edad: prompt("Ingrese la edad del alumno")   ,legajo: prompt("Ingrese el legajo del alumno")});
    }
}

function MostrarAlumnos(){
    for(i = 0; i < alumnos.length; i++){
        console.log(alumnos[i].nombre, alumnos[i].edad ,alumnos[i].legajo);
    }
}

function EliminarAlumnos(){
    let eliminar = prompt("Ingrese el legajo del alumno que desea eliminar");
    for(i = 0; i < alumnos.length; i++){
        if(alumnos[i].legajo == eliminar){
            alumnos.splice(i,1);
        }
    }
}

function CalcularPromedio(){

    const aprobados = [];
    const desaprobados = [];
    for(let alumnos = 1; alumnos <4; alumnos++){
        let parcial,final,promedio;
        nombre = prompt("Ingrese el nombre del alumno");
        parcial = parseFloat(prompt("Parcial"));
        final = parseFloat(prompt("Final"));
        promedio = (parcial+final)/2;
    
        if(promedio >= 7){
            document.write("El promedio de "+ nombre +" es "+promedio+" APROBADO ");
            aprobados.push(promedio);
            console.log(aprobados);
        }else{
            document.write("El promedio de " + nombre + " es "+promedio+" DESAPROBADO ");
            desaprobados.push(promedio);
            console.log(desaprobados);
        }
    
    }
    console.log(aprobados[1]);
}


function filtrarEdad(){
    let edad = prompt("Ingrese la edad máxima de los alumnos");
    let filtro = alumnos.filter(alumnos => alumnos.edad <= edad)
    console.log(filtro);
}

