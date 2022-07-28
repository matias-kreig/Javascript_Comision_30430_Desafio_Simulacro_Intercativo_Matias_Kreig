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