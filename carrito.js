//CARRITO
import { supermercado} from "./super.js";

let carrito = [];

console.log('-->', localStorage.getItem("carrito"));

window.addEventListener('load', function(){
    let containerCarrito = document.getElementById("carrito")

    if(localStorage.getItem("carrito") !== null){
        carrito = JSON.parse(localStorage.getItem("carrito"));

            containerCarrito.innerHTML =`
                            
                            <h2>Carrito de Compras</h2>
                            <p>Tienes ${carrito.length} productos en el carrito</p>
            `;
    }else{
        containerCarrito.innerHTML =`
        <h2>Carrito de Compras</h2>
        <p>No tienes productos pre cargados en el carrito</p>
        `;
    }
});