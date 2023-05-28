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
    let valorTotal = document.getElementById("total").innerHTML = "Total a Pagar: $ " + valorTickets;
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