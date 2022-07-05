// Registro de Usuarios para Formulario de Contacto
//Variables Globales

let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su Edad");
let email = prompt("Ingrese su E-mail");
let localidad = prompt("Ingrese su Localidad");
let telefono = prompt("Ingrese su N° de Telefono");

const validacion = () => {
     
    let isValidNombre, isValidEdad, isValidEmail, isValidLocalidad, isValidTelefono;
    
    /* isValidNombre = nombre
    isValidEdad = parseInt(edad)
    isValidEmail = isNaN(email)
    isValidLocalidad = localidad
    isValidTelefono = !isNaN(telefono) */ 

    console.log(
        `Nombre: ${nombre} Tipo: ${typeof nombre}
        Edad: ${edad} Tipo: ${typeof edad}
        E-mail: ${email} Tipo: ${typeof email}
        Localidad: ${localidad} Tipo: ${typeof localidad}
        Telefono: ${telefono} Tipo: ${typeof telefono}`
    )
    


    
} 
 function registro(nombre, edad, email, localidad, telefono){
    if(edad >= 18){
        console.log(`Bienvenido ${nombre} Puedes Registrarte. Edad: ${edad} (Mayor de Edad). E-Mail: ${email}. Localidad: ${localidad}. Telefono ${telefono}`);
    }else{
        console.log(`No puedes Ingresar ${nombre}. Edad: ${edad} (Menor de Edad). E-Mail: ${email}. Localidad: ${localidad}. Telefono ${telefono}`);
    }

}
validacion(nombre, edad, email, localidad, telefono);

registro(nombre, edad, email, localidad, telefono);