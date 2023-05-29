function valorCategoria(){
    let categoria = document.getElementById("categoria").value;
    console.log("Se eligió la categoría " + categoria);
    let descuento;
    if(categoria == 1){
        return descuento = 0.20;
    } else if(categoria == 2){
        return descuento = 0.50;
    } else if(categoria == 3){
        return descuento = 0.85;
    }
    console.log("Porcentaje a pagar: " + descuento);
}

function calcularValorTicket(){
    const precioBase = 200;
    let cantidad = document.getElementById("cantidad").value;
    let porcentajeAPagar = valorCategoria("categoria");
    let valorTickets = cantidad * precioBase * porcentajeAPagar;
    console.log("Los tickets solicitados valen: " + valorTickets);
    document.getElementById("total").innerHTML = "Total a Pagar: $ " + valorTickets;

    mandarMensajeDeDatos();
}

function eleccionEstudiante(){
    document.getElementById("categoria").value = 1;
}

function eleccionTrainee(){
    document.getElementById("categoria").value = 2;
}

function eleccionJunior(){
    document.getElementById("categoria").value = 3;
}

function borrar(){
    document.querySelector(".estructura_formulario").reset();
    document.getElementById("total").innerHTML = "Total a Pagar: $ ";
}

function mandarMensajeDeDatos(){
    
    var datosCompletos = verificarCamposCompletos();
    console.log(datosCompletos);

    let mensaje;
    if(datosCompletos == true){
        mensaje = "¡Datos enviados correctamente!";
    } else if (datosCompletos == false){
        mensaje = "Por favor, completa todos los datos faltantes.";
    }
    mostrarMensaje(mensaje, datosCompletos);

    function verificarCamposCompletos(){
        var nombre = document.querySelector(".nombre").value;
        var apellido = document.querySelector(".apellido").value;
        var cantidad = document.getElementById("cantidad").value;
        var mail = document.getElementById("campo_mail").value;

        let completo;
        if(nombre.length > 0 && apellido.length > 0 && cantidad != 0 && mail.length > 0){
            return completo = true;
        } else {
            return completo = false;
        }
    }
}

function mostrarMensaje(mensaje, completo){
    const campoMensaje = document.createElement("campo_mensaje");
    campoMensaje.textContent = mensaje;

    if(completo == false){
        campoMensaje.classList.add("datos_faltantes");
    } else {
        campoMensaje.classList.add("datos_completos");
    }

    let formulario = document.getElementById("estructura_completa");
    formulario.style.height = '450px';
    formulario.appendChild(campoMensaje);
    setTimeout(() => {
        formulario.style.height = '400px';
        campoMensaje.remove();
    }, 2000);
}