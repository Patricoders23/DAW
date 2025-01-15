// Función para manejar el envío del formulario
function submitForm(){
    const diaSemana = document.getElementById('diaSemana').value;
    const age = document.getElementById('age').value;

    if (!age){
        alert('Por favor, introduce tu edad');
        return;
    }

    const outputMessage = `Vendrás el día: ${diaSemana}, y tienes ${age} años.`;
    document.getElementById("output").innerText = outputMessage;
}
