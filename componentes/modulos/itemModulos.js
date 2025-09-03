import {guardarProducto, obtenerProducto} from ""; 
export function item(title, image, description, price) {

    let item = document.createElement('div');
    item.className = "item";
 
     // TITULO-------------------------------
    let h3 = document.createElement("h3");
    h3.className="title";
    titulo.textContent = title;
    item.appendChild(h3);

    // IMG----------------------------------
    let img = document.createElement("img");
    img.className="img1";
    img.src = image;
    img.alt = title;
    item.appendChild(img);

    // DESCRIPCIÓN--------------------------
    let pDesc = document.createElement("p");
    pDesc.textContent = description;
    pDesc.className="desc";
    item.appendChild(pDesc);

    // PRECIO -------------------------------
    let precio = document.createElement("p");
    precio.textContent = `Precio: $${price}`;
    precio.className="price";
    item.appendChild(precio);
    
    item.addEventListener('click', ()=>{
    let carritoLocalStorange = obtenerProductos();
    console.log("carrito: ", carritoLocalStorange)

    carritoLocalStorange.push({precio:precio, nombre:titulo}); 
    guardarProducto("Hola mundo");
    console.log("Producto en LocalStorage")
    location.reload();

    });
    return item;
}
