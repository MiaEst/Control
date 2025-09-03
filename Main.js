import { header } from "./componentes/header/headerComponent.js";
import {seccion1} from "./componentes/seccion1/seccion1Componentes.js";
import { obtenerNav} from "./componentes/nav/navComponent.js";

function seccion(){

  let seccion = document.createElement('section');

        if(!ListaDeCompras){
            ListaDeCompras =[];
            localStorage.setItem("carrito",JSON.stringify(ListaDeCompras));
        } else{
            ListaDeCompras = JSON.parse(ListaDeCompras);
        }

         console.log(ListaDeCompras);

         
  seccion.appendChild(header());
  seccion.appendChild(seccion1());


  console.log("hola mundo");

  return seccion;

}

document.body.appendChild(seccion());