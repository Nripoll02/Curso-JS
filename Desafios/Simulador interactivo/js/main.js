function CalcularPromedio(){
    
    for(let alumnos = 1; alumnos <4; alumnos++){
        let parcial,final,promedio;
        parcial = parseFloat(prompt("Parcial"));
        final = parseFloat(prompt("Final"));
        promedio = (parcial+final)/2;
    
        if(promedio >= 7){
            document.write("El promedio es "+promedio+" APROBADO ");
        }else{
            document.write("El promedio es "+promedio+" DESAPROBADO ");
        }
    }
}

// if(prom<7){
//     console.log("Alumno desaprobado");
// }else{
//     console.log("Alumno aprobado");
// }
