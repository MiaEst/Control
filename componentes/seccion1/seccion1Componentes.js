import {item} from "../modulos/itemModulos.js";
export function seccion1(){

    let seccion=document.createElement('div');

    seccion.className="section"
    seccion.appendChild(item());
    seccion.appendChild(item());
    seccion.appendChild(item());
    seccion.appendChild(item());
    
    return seccion;
    
}