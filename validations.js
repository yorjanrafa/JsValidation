// antes de usar el script asegurese de haber agragado a su
// formulario en el  HTML el id de form ejemplo: <form id="form">
// seguido de la etiqueta novalidate para evitar la validacion
// por defecto del navegador ejemplo: <form id="form" novalidate>

// agregue el patron aca que desea validar o verificar
const regex = {
  numeric: /^\d{1,3}$/,
  email:   /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

// se agregan los estilos para alertar del error con su respectivo mensaje
const addInvalidStyle = (input, message) => {
  input.classList.add("is-invalid");

  // crea el nodo de parrafo a mostrar "<p></p>"
  let parentInput  = input.parentNode;
  let paragraph    = document.createElement("p");
  let strong       = document.createElement("strong");
  strong   .appendChild(document.createTextNode(message));
  paragraph.appendChild(strong);
  paragraph.classList.add("invalid-feedback");

  // vera con regualaridad el """parentInput.childNodes[3]""" el cual es la
  // posicion en la cual se encuentra situado el paragraph en el html si por
  // algun motivo usted lo tiene de 4 o 5 sustituir el 3 por el numero de nodo
  let childNode = parentInput.childNodes[3];
  if (!childNode) {
    parentInput.appendChild(paragraph);
  } else {
    if (/error/g.test(childNode.id)) {
      childNode.remove();
      parentInput.appendChild(paragraph);
    }
  }
};

// se eliminan los estilos del error en caso
// de que la verificacion sea exitosa
const removeInvalidStyle = (input) => {
  input.classList.remove("is-invalid");
};

// especificar aca el tipo de mensajes
// que desea mostrar segun el tipo de dato
const messages = {
  numericIDPC: "Sólo valores numericos de 1 a 3 caracteres",
  email:       "Solo direcciones de coreo electronico",
  alphabetic:  "Solo caracteres alfabeticos",
};

// se crea una comprobacion en base a un ternario
// en caso de que exista el error se agregaran los
// estilos y se enviara el mensaje a mostrar
// NOTA: esto grita "HASME TUYA, PERO PRIMERO REFACTORIZAME DOY ASCO"
const validations = {
  numericField: function () {
    regex["numeric"].test(this.value)
      ? removeInvalidStyle(this)
      : addInvalidStyle   (this, messages["numericIDPC"]);
  },
  emailField: function () {
    regex["email"].test(this.value)
      ? removeInvalidStyle(this)
      : addInvalidStyle   (this, messages["email"]);
  },
};

/*
   Objeto ids el cual le asigna una validacion al input que
   le pertenesca el id esta validacion "validations" viene del objeto 
   validations de arriba al cual hay que pasarle el tipo de campo que
   queremos validar

   NOTA: agregar los id de tu formulario aqui con el tipo de campo 
   a validar

   EJEMPLO:    id_nombre : validations["alphabeticField"]

   NOTA FINAL: los id deben ser los mismos a los ids de cada uno de los 
   inputs correspondiente al tipo de dato que se espera
*/
const ids = {
  id_number_id: validations["numericField"],
  id_mark:      validations["emailField"],
};

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
