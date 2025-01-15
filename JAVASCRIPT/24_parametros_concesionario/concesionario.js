function submitForm() {
    // Inicia la función 'submitForm' que será llamada al hacer clic en el botón "Aceptar".

    const carModel = document.getElementById("carModel").value;
    // Obtiene el valor seleccionado en el campo desplegable con id 'carModel' (modelo de coche).

    const carColor = document.querySelector('input[name="carColor"]:checked').value;
    // Obtiene el valor del botón de selección (radio button) que está marcado (checked) dentro del grupo 'carColor'.

    const deliveryDate = document.getElementById("deliveryDate").value;
    // Obtiene el valor (fecha seleccionada) del campo con id 'deliveryDate'.

    if (!deliveryDate) {
        // Verifica si el campo de fecha de entrega ('deliveryDate') está vacío.
        alert("Por favor, selecciona una fecha de entrega");
        // Muestra una alerta al usuario indicando que debe seleccionar una fecha.
        return;
        // Detiene la ejecución de la función si no se ha seleccionado una fecha.
    }

    const output = `Has elegido el modelo: ${carModel}, el color ${carColor}, y la fecha de entrega: ${deliveryDate}.`;
    // Crea un mensaje de salida que incluye los valores seleccionados por el usuario (modelo, color y fecha).

    document.getElementById("output").innerText = output;
    // Inserta el mensaje de salida generado en el elemento HTML con id 'output' (un párrafo en este caso).
}

