


function saludar(){
    let nombre = prompt("Bienvenido a Viaje Seguro \nIngrese su nombre: ");
    if (nombre === null || nombre === ""){
        alert('Ingrese su nombre por favor');
        saludar();
    }else{
        alert ('Hola '+nombre +' gracias por elegirnos!');
    }
}

function elegirDestino(){
    tipoDeViaje = parseInt(prompt('ingrese que tipo de viaje necesita:'
    +' \n 1- Viaje de larga distancia mas de 10 km: precio sin iva $15000'
    +'\n 2- Viaje de media distancia entre 10 km y 5 km: Precio sin iva $10000'
    +'\n 3- Viaje de corta distancia menos de 5 km: Precio sin iva: $5000'
    +'\n 4- Terminar'))
    switch (tipoDeViaje) {
        case 1:
            viaje = 1;
            precio += 15000;
            confirmacion();
            break;
        case 2:
            viaje = 2;
            precio += 10000;
            confirmacion();
            break;
        case 3:
            viaje = 3;
            precio += 5000;
            confirmacion();
            break;
        case 4:
            seguirComprando = false;
            alert('Gracias por su compra');
        break;
    }
    while(isNaN(tipoDeViaje) || tipoDeViaje <=0 || tipoDeViaje >=5){
        alert('ingrese una opcion valida');
        tipoDeViaje = parseInt(prompt('ingrese que tipo de viaje necesita:'
        +'\n 1- Viaje de larga distancia mas de 10 km: Precio sin iva $15000'
        +'\n 2- Viaje de media distancia entre 10 km y 5 km: Precio sin iva $10000'
        +' \n 3- Viaje de corta distancia menos de 5 km: Precio sin iva $5000'
        +'\n 4- Terminar'))
        switch (tipoDeViaje) {
            case 1:
                precio += 15000;
                viaje = 1;
                confirmacion();
                break;
            case 2:
                viaje = 2;
                precio += 10000;
                confirmacion();
                break;
            case 3:
                viaje = 3;
                precio += 5000;
                confirmacion();
                break;
            case 4:
                seguirComprando = false;
                alert('Gracias por su compra');
            break;
        }
    }
}

function confirmacion(){
    do{
        if (viaje ===1){
            alert('Usted a contratado un viaje de larga distancia');
            seguirComprando = confirm('¿Desea contratar otro viaje? (Aceptar) '
            +' \n Si desea que muestre el precio final (Cancelar) ');
            if (seguirComprando === true) {
                elegirDestino();
                break;
            }else{
                seguirComprando = false;
                alert('Gracias por su compra');
                break;
            }
        }if (viaje ===2){
            alert('Usted a contratado un viaje de media distancia');
            seguirComprando = confirm('¿Desea contratar otro viaje? (Aceptar) '
            +' \n Si desea que muestre el precio final (Cancelar) ');
            if (seguirComprando === true) {
                elegirDestino();
                break;
            }else{
                seguirComprando = false;
                alert('Gracias por su compra');
                break;
            }
        }if (viaje ===3){
            alert('Usted a contratado un viaje de corta distancia');
            seguirComprando = confirm('¿Desea contratar otro viaje? (Aceptar) '
            +' \n Si desea que muestre el precio final (Cancelar) ');
            if (seguirComprando === true) {
                elegirDestino();
                break;
            }else{
                seguirComprando = false;
                alert('Gracias por su compra');
                break;
            }
        }
    }while(seguirComprando)
}

function precioTotal(){
    precioFinal += precio + (precio * iva);
    return precioFinal;
}

// comienzo de codigo

let precio = 0;
let iva = 0.21;
let tipoDeViaje = 0;
let precioFinal = 0;

saludar();
do{
    elegirDestino();
    precioTotal();
    terminar = false;
    alert('El precio total es: $'+precioFinal);
}while(terminar);

