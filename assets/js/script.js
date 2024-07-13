
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Cambio color navbar al hacer scroll
$(window).scroll(function(){
    if($("#menu").offset().top > 80){
        $("#menu").addClass("bg-dark");
    }else{
        $("#menu").removeClass("bg-dark");
    }
});


$("#submitMessage").click(function(){
    alert("Mensaje enviado");
    console.log("Mensaje enviado");
});

$("#airPlane").on("click", function() {
    $( "#textAirPlane" ).toggle("slow");
});

$("#mountain").on("click", function() {
    $( "#textMountain" ).toggle("slow");
});  

$("#route").on("click", function() {
    $( "#textRoute" ).toggle("slow");
});