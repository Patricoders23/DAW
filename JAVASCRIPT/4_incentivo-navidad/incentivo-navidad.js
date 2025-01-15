
window.addEventListener("load", function() {
  const input = {
    name: document.querySelector("#inpName"),
    antiquity: document.querySelector("#inpAntiquity"),
  };
  const formElem = document.querySelector("#formLogin");
  const incentiveElem = document.querySelector("#pIncentivo");
  formElem.addEventListener("submit", (event) => {
    // Evitar que el buscador haga el cambio de pagina
    // Nos mantiene en la misma pagina sin pedir cambios al servidor
    event.preventDefault();

    const name = input.name.value;
    const antiquity = Number(input.antiquity.value);

    if (antiquity <= 3) {
      incentiveElem.innerText = `${name}, sos un empleado nuevo!
Recibiras un Jamón por pasar la Navidad con nosotros en vez de con tu familia!`;
    } else if (antiquity <= 10) {
      incentiveElem.innerText = `${name}, sos un empleado veterano y te apreciamos!
Recibiras una cesta de Ibericos por pasar la Navidad con nosotros en vez de con tu familia!`;
    } else {
      incentiveElem.innerText = `${name}, sos un empleado de honor y nos mantemos a flota por gente como tú!
Recibiras un viaje todo pagado para las Navidades!`;
    }
  });
});

