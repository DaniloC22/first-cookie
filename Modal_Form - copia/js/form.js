let contador = 0;
let m = false;
let primary = true;
let cuenta = 10; 

// Obtener referencias a los botones y a los elementos
const botonIncrementar = document.getElementById('cookie');
const botonDisminuir = document.getElementById('delete');
const valorContador = document.getElementById('valor-contador');
const primer_mejora = document.getElementById('mejora1');
const clicker = document.getElementById('segundos');

botonIncrementar.addEventListener('click', () => {
    contador++;
    valorContador.textContent = contador;
    if (m==true){
        contador+=4;
        valorContador.textContent = contador;
    }
});

botonDisminuir.addEventListener('click', () => {
    contador--;
    valorContador.textContent = contador;
});

function noEspacios(event){
    if(event.keyCode===32){
        event.preventDefault();
    }
}

primer_mejora.addEventListener('click', () => {
    if(contador>=50){
        m = true;
        while(primary==true){
            contador-= 50;
            primary=false;
        }
    }
});

clicker.textContent= "Click automático: " + cuenta + " COOKIES";

clicker.addEventListener('click', () => {
    clicker.textContent= "Click automático: " + cuenta + " COOKIES";
    if(contador>=cuenta){
        contador= contador-cuenta;
        cuenta= cuenta*2;
        setInterval(() => {
            botonIncrementar.click();
        }, 1000);
    }
});

function verificarPass(){
    let passwordA = document.getElementById("password").value;
    let passwordB = document.getElementById("confirmPassword").value;
    let mensaje = document.getElementById("Error");

    if (passwordA !== passwordB){
        mensaje.textContent="Las contraseñas deben coincidir";
    }else{
        mensaje.textContent="";
    }
}

function cambiarImagen(){

    if(contador>=100){
        var imagen = document.getElementById("cookie"); // Para agarrar el ID de la imagen
        if (imagen.style.backgroundImage.includes("cookie.png")){

            contador= contador-100;
            imagen.style.backgroundImage = "url('img/banana.png')";
            // Cambia a banana.png si la imagen actual es cookie.png Y DESCUENTA 100 CLICKS
            
        } else if (imagen.style.backgroundImage.includes("banana.png")){

            contador= contador-100;
            imagen.style.backgroundImage = "url('img/manzana.png')";
            // Cambia a manzana.png si la imagen actual es banana.png Y DESCUENTA 100 CLICKS

        } else {

            contador= contador-100;
            imagen.style.backgroundImage = "url('img/cookie.png')";
            // Cambia a cookie.png DESCUENTA 100 CLICKS

        }
    }
}