import { validations } from "./validation.js"
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
export const ids = {
  id_number_id: validations["numericField"],
  id_mark:      validations["emailField"],
};

