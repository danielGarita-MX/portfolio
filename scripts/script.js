/* Validación del formulario de contacto mediante el uso de expresiones regulares */

/* Variable que almacena el estado del formulario */
const formControl = document.getElementById('contactForm');

/* Variable para almacenar las entradas del formulario */
const inputName = document.getElementById('nameUser');
const inputEmail = document.getElementById('emailUser');
const inputAffair = document.getElementById('affairUser');
const inputDescription = document.getElementById('descriptionUser');

/* Variables que almacenan los mensasjes de error */
const errorMessage = document.querySelectorAll('.error-field');

/* La expresión regular valida el campo de 'nombre' y 'asunto':
    ^(?=.{1,50}$): Condición que la cadena final debe cumplir (máximo 50 carácteres sin cadenas vacias).
     [a-zA-Z]+(?:\s[a-zA-Z]+)*$: La cadena debe iniciar con una o más letras seguidas de un grupo de no
      captura (no se toma en cuenta para el resultado) que indica que puede haber un espacio seguido de
      más letras (al menos una) y esto se puede repetir 0 o más veces siempre que la cadena termine
      con un carácter y no con un espacio. */
const regexName = /^(?=.{1,50}$)[a-zA-ZáéíóúÁÉÍÓÚ]+(?:\s[a-zA-ZáéíóúÁÉÍÓÚ]+)*$/

/* Expresión regular para validar el campo de correo eléctronico */
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

/* Expresión regular para validar el campo de 'descripción' 
   ^(?=.{1,300}$): Condición que la cadena final debe cumplir (máximo 50 carácteres sin cadenas vacias).
   \S+: Coincide con cualquier carácter que no sea un espacio en blanco, tabulación, salto de linea u 
        otro carácter de espacio en blanco similar.
   (?:\s\S+)*$: Grupo de no captura (no se almacena en el resultado) que coincide con un espacio en blanco
                seguido de uno o más carácteres. Indica que la cadena no debe terminar con un espacio en blanco.
*/
const regexDescription = /^(?=.{1,300}$)\S+(?:\s\S+)*$/

/* Función que controla el envio del formulario */
formControl.addEventListener('submit', (e) => {
  e.preventDefault(); /* Detiene el envio del formulario para poder validar */
  
  /* Validación del nombre */
  if(!regexName.test(inputName.value)){
    showMessage(errorMessage[0], 'Letras mayúsculas y minúsculas de 1 a 50 carácteres');
  }else{
    showMessage(errorMessage[0], '');
  }

  /* Validación del email */
  if(!regexEmail.test(inputEmail.value)){
    showMessage(errorMessage[1], 'Ingresa una dirección de correo eléctronico valida');
  }else{
    showMessage(errorMessage[1], '');
  }

  /* Validación del asunto */
  if(!regexName.test(inputAffair.value)){
    showMessage(errorMessage[2], 'Letras mayúsculas y minúsculas de 1 a 50 carácteres');
  }else{
    showMessage(errorMessage[2], '');
  }

  /* Validación de la descripción */
  if(!regexDescription.test(inputDescription.value)){
    showMessage(errorMessage[3], 'Letras mayúsculas y minúsculas de 1 a 300 carácteres');
  }else{
    showMessage(errorMessage[3], '');
  }
});

/* Función que modifica el DOM insertando texto a un elemento */
function showMessage(element, message){
  element.innerHTML = message;
}
