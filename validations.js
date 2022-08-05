// agregue el patron aca que desea validar o verificar
const regex = {
  numeric: /^\d{1,3}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

// se agregan los estilos para alertar del error con su respectivo mensaje
const addInvalidStyle = (input, message) => {
  input.classList.add("is-invalid");
  let parentInput = input.parentNode;

  if (parentInput.childNodes[3] == undefined) {
    let paragraph = document.createElement("p");
    let strong = document.createElement("strong");
    strong.appendChild(document.createTextNode(message));
    paragraph.appendChild(strong);
    paragraph.classList.add("invalid-feedback");
    paragraph.id = "message";
    parentInput.appendChild(paragraph);
  }
};


// se eliminan los estilos del error en caso 
// de que la verificacion sea exitosa
const removeInvalidStyle = (input) => {
  input.classList.remove("is-invalid");
};


// especificar el aca el tipo de mensajes
// que desea mostrar segun el tipo
const messages = {
  numeric: "Solo caracteres numericos",
  email: "Solo direcciones de coreo electronico",
  alphabetic: "Solo caracteres alfabeticos",
};


// se se crea una comprobacion en base a un ternario
// en caso de que exista el error se agregaran los estilos
// y se enviara el mensaje a mostrar
const validations = {
  numericField: function () {
    regex["numeric"].test(this.value)
      ? removeInvalidStyle(this)
      : addInvalidStyle(this, messages["numeric"]);
  },
  emailField: function () {
    regex["email"].test(this.value)
      ? removeInvalidStyle(this)
      : addInvalidStyle(this, messages["email"]);
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
   input del formulario y el tipo de validacion a asignar debe ser 
   correspondiente al tipo de dato que se espera
*/
const ids = {
  id_number_id: validations["numericField"],
  id_mark: validations["emailField"],
};

// selecciona el formulario
const form = document.querySelector("#form");

// selecciona cada uno de los inputs del formulario con el id form
const inputs = document.querySelectorAll("#form input");
// for (let index = 1; index < formx.length; index++) {
//   if (ids[formx[index].id]) {
//     let id = formx[index].id
//     formx[index].addEventListener("keyup", ids[id]);
//     formx[index].addEventListener("blur", ids[id]);
//   }
// }

/*
   Asignacion de eventos a cada uno de los inputs del formulario
   siempre y cuando el id del input este registrado en el objeto 
   ids de arriba
*/
inputs.forEach((input) => {
  let id = input.id;
  input.addEventListener("keyup", ids[id]);
  input.addEventListener("blur", ids[id]);
});

