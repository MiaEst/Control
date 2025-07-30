import { header } from "./componentes/header/headerComponent.js";
import {seccion1} from "./componentes/seccion1/seccion1Componentes.js";

function seccion(){

  let seccion = document.createElement('section');


  seccion.appendChild(header());
  seccion.appendChild(seccion1());


  console.log("hola mundo");

  return seccion;

}

document.body.appendChild(seccion());