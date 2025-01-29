// Manejo del clic en el botón
document.querySelector(".chequear").addEventListener("click", function(event) {
    event.stopPropagation(); // Detiene la propagación del evento hacia el documento
    alert("Hemos pulsado el botón");
});

// Manejo del clic en cualquier parte del documento
document.addEventListener("click", function(event) {
    alert("Hemos pulsado el documento general");
});

// Manejo del clic derecho (menú contextual)
document.addEventListener("contextmenu", function(event) {
    event.preventDefault(); // Previene que aparezca el menú contextual
    alert("El menú contextual está deshabilitado");
});
