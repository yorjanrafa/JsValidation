import { messages } from "./message.js"
import { regex } from "./regex.js"

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
  // algun motivo usted lo tiene de 4 o 5 substituir el 3 por el numero de nodo
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

// se crea una comprobacion en base a un ternario
// en caso de que exista el error se agregaran los
// estilos y se enviara el mensaje a mostrar
const verifyInput = (input, regexType, message) => {
    regexType.test(input.value)
      ? removeInvalidStyle(input)
      : addInvalidStyle   (input, message);
}

// se le pasa a la funcion verifyInput el "this"
// seguido del tipo de regex que  vallamos a utilizar
// y a este le seguira el tipo de mensaje a mostrar 
// ejemplo: verifyInput(this, regex["alphabetic"], messages["alphabetic"])
export const validations = {
  numericField: function () {
      return verifyInput(this, regex["numeric"], messages["numericIDPC"])
  },
  emailField: function () {
      return verifyInput(this, regex["email"], messages["email"])
  },
};

