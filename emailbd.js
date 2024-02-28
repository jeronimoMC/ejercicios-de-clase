let emailBaseDatos = "jmorales_107@gmail.com";
let claveBaseDatos = "1234*";
let emailIngresado = "jmorales_107@cue.edo.co";
let claveIngresada = "1234*";
let nombreUsuario = "jero";

if(emailIngresado == emailBaseDatos && claveIngresada == claveBaseDatos){
    console.log(`¡Bienvenido/a ${nombreUsuario}!, seleccione opciones del sistema.`);
} else{
    console.log("Acceso denegado.");
}