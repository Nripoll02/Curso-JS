// To-do-list

//Bienvenida al usuario
let nombre = prompt("Bienvenido a tu to-do-list. Me dices tu nombre?");

//Declaracion de lista predefinida de tareas
const diaPoderoso = ["Hidratarse", "Estudiar", "Descansar", "Trabajar"];

const finDia = ["Comer", "Ver tele", "Dormir"];

const rutinaCompleta = diaPoderoso.concat(finDia);

const toDoList = [];

//Menu de opciones al usuario donde le oferecemos algunas
let rutinaPredefinida = (" Dia Poderoso incluye: Hidratarse, Estudiar, Descansar o Dormir; \n Fin del Dia incluye: Comer, Ver tele y Dormir");

//Seleccion de opciones
if(rutinaPredefinida == 1){
    toDoList.push(diaPoderoso);
}else if(rutinaPredefinida == 2){
    toDoList.push(finDia);
}else if(rutinaPredefinida == 3){
    toDoList.push(rutinaCompleta);
}


function agregarTareas(){
    let cantidadTareas = prompt("Cuantas tareas quiere agregar? ");
    
    for(i = 0; i <= cantidadTareas; i++){
        let agregarTarea = prompt("Asigne su tarea");
        toDoList.push(agregarTarea);    
    }
}

//Invocamos la funcion para que el usuario pueda agregar tareas
agregarTareas();

//Acá usamos los backticks para realizar una interpolación de variables
let consultaFinal = prompt(`${nombre} estas son tus tareas: ${toDoList},
                            \n Si quieres eliminar la ultima tarea escribe 1 
                            \n Si quieres seguir agregando tareas escribe 2
                            \n Si no quieres seguir, escribe cualquier otro valor}`);

if(consultaFinal == 1){
    toDoList.pop();
}else if (consultaFinal == 2){
    agregarTareas();
}else{
    alert(`${nombre} gracias por usar nuestro to-do-list. Estas son tus tareas elegidas ${toDoList}`);
}


//Mostrar al usuario cuando eliminamos taras o si no hacemos mas nada
alert(`${nombre} gracias por usar nuestro to-do-list. Estas son tus tareas elegidas ${toDoList}`);