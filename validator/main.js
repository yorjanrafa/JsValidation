import { ids } from "./id.js" 

// selecciona el formulario siempre y cuando el id de este sea ""form""
const form   = document.querySelector("#form");

// selecciona cada uno de los inputs del formulario con el id form
const inputs = document.querySelectorAll("#form input");

/*
   Asignacion de eventos a cada uno de los inputs del formulario
   siempre y cuando el id del input este registrado en el objeto 
   ids de arriba
*/
inputs.forEach((input) => {
  let id = input.id;
  input.addEventListener("keyup", ids[id]);
  input.addEventListener("blur",  ids[id]);
});
