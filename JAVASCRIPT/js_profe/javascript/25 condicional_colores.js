// JavaScript Document

/*el evento onMauseOut va a estar hecho de dos maneras incluyendolo en la misma funcio "cambiar", y la otra manera , creando una nueva función, llamada "volver"*/
function cambiar(x){
	if(x=="rojo"){	document.getElementById("texto").innerHTML="ROJO";
	}
	else if(x=="naranja"){	document.getElementById("texto").innerHTML="NARAJA";
	}
	else if(x=="verde"){	document.getElementById("texto").innerHTML="VERDE";
	}
	else if(x=="amarillo"){	document.getElementById("texto").innerHTML="AMARILLO";
	}
	else if(x=="ninguno"){	document.getElementById("texto").innerHTML="NINGUNO";
	}
}
function volver(){
	document.getElementById("texto").innerHTML="NINGUNO";
}

