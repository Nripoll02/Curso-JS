//Evento para registar a los alumnos
document.getElementById("formulario").addEventListener("submit", crear);

//Funcion para registar a los alumnos
function crear(e)
{
  nombre = document.getElementById("nombre").value;
  apellido = document.getElementById("apellido").value;
  legajo = document.getElementById("legajo").value;

  let alumno = {
    nombre,
    apellido,
    legajo
  }

  if(localStorage.getItem("alumnos") === null) 
  {
    let alumnos = [];
    alumnos.push(alumno);
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
  }else
  {
    let alumnos = JSON.parse(localStorage.getItem("alumnos"));
    alumnos.push(alumno);
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
  }
  mostrar();
  document.getElementById("formulario").reset()
  console.log("Alumno creado")
  e.preventDefault()
  
}


//Function para mostrar los alumnos
function mostrar(){
  let alumnos = JSON.parse(localStorage.getItem("alumnos"));
  document.getElementById("tbody").innerHTML = "";
  for(let i = 0; i < alumnos.length; i++)
  {
    let nombre = alumnos[i].nombre;
    let apellido = alumnos[i].apellido;
    let legajo = alumnos[i].legajo;

    document.getElementById("tbody").innerHTML += 
    `<tr>
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${legajo}</td>
    </tr>`    

  }
}

mostrar();
