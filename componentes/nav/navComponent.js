import { obtenerProductos } from "../../";
export function obtenerNav(){

 let nav = document.createElement("div");
 nav.className="nav";



let divInicio=document.createElement("div");
divInicio.className = "div-inicio";
divInicio.innerHTML = '<span class="inicio">🏠</span>';
divInicio.appendChild(divInicio);
nav.appendChild(inicio);



let divPaquetes=document.createElement("div");
divPaquetes.className = "div-paquetes";
divPaquetes.innerHTML = '<span class="paquete">🛍️</span>';
divPaquetes.appendChild(divPaquetes);
nav.appendChild(paquetes);



let divCarrito=document.createElement("div");
divCarrito.className = "div-carrito";
divCarrito.innerHTML = '<span class="carrito">🛒</span>'
divCarrito.appendChild(divCarrito);

let divItem = document.createElement('div');
divItem.className = "div-item";
divItem.textContent = "";

if (obtenerProductos()!="") {
 carrito.appendChild(divItem);    
}
nav.appendChild(carrito);



let divUsuario = document.createElement('div');
divUsuario.className = "nav-item";
divUsuario.innerHTML = '<span class="">👤</span>';
divUsuario.appendChild(divUsuario);


return nav; 
}