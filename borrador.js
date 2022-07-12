//orden: libreria, funciones, variables, codigo.

/* function solicitarNombre(){
    let nombreIngreso = prompt("Ingrese su nombre");
    console.log(`Bienvenido ${nombreIngreso}`);
}
solicitarNombre(); */

const resta = (a,b)=>(a-b);
const suma = (a,b) => (a+b);
let stock1 = 1;

class Producto{
    
    constructor(nombreProducto, precioProducto,cantidadProducto){
    
    this.nombreProducto = nombreProducto;
    
    this.precioProducto = parseFloat(precioProducto);
    
    this.vendido = false;
    
    this.cantidadProducto = cantidadProducto;
  }
  
  vender(){
    this.vendido = true;
    
    if(producto1.vendido){
    
        console.log("Producto Vendido");
    
    }
    if(producto2.vendido){
    
        console.log("Producto Vendido");
    
    }
    else{
      
        console.log("Producto no Vendido");
        }
    }

    cantidad(){
        this.cantidadProducto = resta (producto1.cantidadProducto,stock1);
        
        if(this.cantidadProducto == 0){
            
            
            console.log("No quedan en Productos Stock.");
        } else{
             
            console.log(`Quedan en Stock ${this.cantidadProducto}`);
        }
    }
    
}

const producto1 = new Producto("Harina", 10, 5);

const producto2 = new Producto("Pan", 8, 5 );


console.log(producto1);

producto1.vender();

producto1.cantidad();

console.log(producto2);

producto2.vender();

producto2.cantidad();



let totalPrecio = suma(producto1.precioProducto, producto2.precioProducto);

 let totalCantidad = suma(producto1.cantidadProducto, producto2.cantidadProducto);

 console.log (`Compraste ${producto1.nombreProducto} y ${producto2.nombreProducto}. El Precio Total es de $ ${totalPrecio}`); 

 console.log(`El total de productos comprados son ${totalCantidad}`);













