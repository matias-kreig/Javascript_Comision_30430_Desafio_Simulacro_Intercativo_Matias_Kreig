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

//CREANDO HTML DESDE JS
//CREAR H1 CON TIUTLO
const titulo = document.querySelector(".titulo");
titulo.textContent = "Bienvenidos al Carrito de Compras";
let padre = document.getElementById("parrafo");
let parrafo = document.createElement("p");
parrafo.innerHTML = "<h2>Eligue lo que deseas comprar.<\h2>";
padre.append(parrafo);

//CREANDO LI POR MEDIO DE JS
let contenedor = document.getElementById("container");
let cosas = [
    {id:1 , nombre:"ARROZ" , precio: 100, stock: 20 },
    {id:2 , nombre:"AZUCAR" , precio: 150, stock: 8 },
    {id:3 , nombre:"LECHE" , precio: 200, stock: 15 },
    {id:4 , nombre:"CREMA" , precio: 125 , stock: 10 },
    {id:5 , nombre: "SAL", precio: 110, stock: 20 },
    ];

cosas.forEach((cosa,index)=>{
    let li = document.createElement("li");
    li.id = cosa.id;
    li.innerHTML=`
                    <h2 class="card" style="width: 18rem;"> ID: ${cosa.id}<\h2>
                    <p class="card" style="width: 18rem;"> Producto: ${cosa.nombre}<\p>              
                    <p class="card" style="width: 18rem;"> $ ${cosa.precio}<\p>
                    <p class="card" style="width: 18rem;"> Stock: ${cosa.stock}<\p>
                    <button class="botonRespuesta" id="btn-${cosa?.nombre}" onclick="agregarAlCarro(${index})"> COMPRAR </button>`;
                    contenedor.appendChild(li);
})

function agregarAlCarro(cosaIndex){
    carrito.push(cosas[cosaIndex]);
    console.log(carrito);

    actualizarStorage(carrito);
}

function actualizarStorage(carrito){
    localStorage.setItem("carrito", JSON.stringify(carrito));
}











