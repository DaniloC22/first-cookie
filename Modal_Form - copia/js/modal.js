$(document).ready(function(){
    // Abrir modal haciendo click en el botón
    $("#abrir_modal").click(function(){
        $("#modal").fadeIn();
        //fadeIn abrir modal de forma gradual
    });
    
    //Cerrar modal haciendo click en la cruz x
    $(".cerrar_modal").click(function(){
        $("#modal").fadeOut();
        //fadeOut cerrar modal de forma gradual
    });
    
    //Cerrar modal haciendo click en cualquier parte de la ventana
    $(window).click(function(event){
        if(event.target.id==="modal"){
            $("#modal").fadeOut();
        }
    });
});

//no permitir espacios en los campos
function noEspacios(event){
    if(event.keyCode === 32){
        event.preventDefault();
    }
}
//el valor 32 equivale a la tecla del espacio en JS