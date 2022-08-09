// function demorar(){
//     for(let i=0; i<=200; i++){
//         console.log("Demorando...");
//     }
// }


//Programacion asincrona

// console.log("Arranco el programa"); //Se ejecuta antes de que se demore

// setTimeout( //Se ejecuta despues de que se demore
//     function(){
//     console.log("1 segundo");
// },1000);

// demorar();  //Se ejecuta antes de que se demore

// console.log("Fin del programa"); //Se ejecuta antes de que se demore



// let counter = 1; 

// const interval = setInterval(() => { //Se ejecuta cada segundo
//     console.log(counter);
//     counter++;
//     if(counter === 6){
//         clearInterval(interval);//Se detiene el intervalo
//         console.log("Fin del programa");
//     }
// }, 1000);


//Promesas 
//Se ejecuta cuando se resuelve la promesa

const pago = new Promise((res, rej) => {
    setTimeout(() => {
        res("Pago realizado");
    }, 2000);
});

pago
    .then(() => {
        console.log(pago);
        console.log("Pago realizado");
    }).catch(() => {
        console.log(pago);
        console.log("Error en el pago");
    })
    .finally(() => {
        console.log("Informar al acreedor");
    });
