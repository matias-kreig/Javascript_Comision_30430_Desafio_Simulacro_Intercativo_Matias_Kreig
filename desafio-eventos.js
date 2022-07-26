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

  for(const cosa of cosas){
    let li = document.createElement("li");
    li.innerHTML = `
                    <h2> ID: ${cosa.id}<\h2>
                    <p> Producto: ${cosa.nombre}<\p>              
                    <p> $ ${cosa.precio}<\p>
                    <p> Stock: ${cosa.stock}<\p>
                    <button class="botonRespuesta" id="btnPrincipal" > COMPRAR </button>`;
                    contenedor.append(li);
}; 


//INCORPORANDO EVENTO
//ARRIBA AGREGUR UN BUTTON Y ABAJO QUIERO QUE AL HACERLE CLIC SE PONGA EN VERDE Y ME MANDE UN CONSOLE.LOG DE "COMPRA REALIZADA"



let boton = document.getElementById("btnPrincipal");
boton.addEventListener("click", () => {
	console.log("clicked element");
});

/* boton.addEventListener("click", respuestaClick);
function respuestaClick (){
boton.className = "botonVerde"
console.log("Compra Realizada"); 
};
 */


let container = document.querySelector("#container");
    

//INCORPORANDO ARRAY
const productos = [
    {id: 1, nombre:"HARINA", precio:20},
    {id: 2, nombre:"AZUCAR", precio:50},
    {id: 3, nombre:"CREMA", precio:30},
    {id: 4, nombre:"LECHE", precio:40},
    {id: 5, nombre:"ARROZ", precio:60}
];

const carrito =[];
let producto
let entrada = prompt("ingrese el nombre del producto que desea comprar o escriba ESC para salir: \nHARINA\nAZUCAR\nLECHE\nCREMA\nARROZ").toLocaleUpperCase()

while(entrada != "ESC"){
    producto =productos.find(item => item.nombre === entrada);
    carrito.push(producto);
    entrada=prompt("ingrese el nombre del producto que desea comprar o escriba ESC para salir: \nHARINA\nAZUCAR\nLECHE\nCREMA\nARROZ").toLocaleUpperCase()
}
for (item of carrito){
    console.log(item)
}

