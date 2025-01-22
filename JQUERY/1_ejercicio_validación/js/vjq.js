$(document).ready(function () {
    $("#registro").validate({
        rules: {
            nombre: {
                required: true
            },

            mail: {
                required: true,
                email: true
            },

            contra: {
                required: true,
                rangelength: [8, 16]
            },

            ccontra: {
                equalTo: '#contra'
            }
        },

        messages: {
            nombre: {
                required: "Acuerdate de poner el nombre!!"
            },
            mail: {
                required: "Acuerdate de poner el email!!",
                email: "Ojo, formato de email nombre@operador.com"
            },
            contra: {
                required: "Escribe contraseña",
                rangelength: "Debe tener entre 8 y 16 caracteres"
            },
            ccontra: {
                equalTo: "No coinciden con la contraseña"
            }
        }
    });
});
