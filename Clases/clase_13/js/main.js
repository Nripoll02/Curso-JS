function manejeElClick() {//funcion que se ejecuta al hacer click en el boton
    Swal.fire({//se crea una alerta con los siguientes parametros 
      title: 'Error con la camada 30425!!!',
      text: 'Do you want to continue?',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
}

// function manejeElClick() { //Ejemplo de carrito usando sweetalert
//     Swal.fire({
//         title: '¿Qué desea agregar al carro?',
//         html: '<input id="nombre" type="text" placeholder="Nombre">' +
//                 '<input id="precio" type="text" placeholder="Precio">' +
//                 '<input id="cantidad" type="text" placeholder="Cantidad">',
//         showCancelButton: true,
//         confirmButtonText: 'Agregar',
//         cancelButtonText: 'Cancelar',
//         showLoaderOnConfirm: true,
//         preConfirm: () => {
//             return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     if (document.getElementById('nombre').value == '') {
//                         reject('El nombre es requerido.');
//                     } else if (document.getElementById('precio').value == '') {
//                         reject('El precio es requerido.');
//                     } else if (document.getElementById('cantidad').value == '') {
//                         reject('La cantidad es requerida.');
//                     } else {
//                         resolve([
//                             document.getElementById('nombre').value,
//                             document.getElementById('precio').value,
//                             document.getElementById('cantidad').value
//                         ]);
//                     }
//                 }, 2000);
//             });
//         }
//     }).then((result) => {
//         if (result.value) {
//             Swal.fire({
//                 title: 'Producto agregado al carro',
//                 text: 'Nombre: ' + result.value[0] + '\n' +
//                         'Precio: ' + result.value[1] + '\n' +
//                         'Cantidad: ' + result.value[2],
//                 type: 'success'
//             });
//         }
//     });
// }

