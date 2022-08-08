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
titulo.textContent = `
Bienvenidos al Carrito de Compras
`
;
let padre = document.getElementById("parrafo");
let parrafo = document.createElement("p");
parrafo.innerHTML = `
<div class="container">
    
        <div class="col-11 col-lg-11 col-md-11 mt-1 mb-2 d-flex justify-content-center ">
        <h2>Eligue lo que deseas comprar.<\h2>
         </div>
    
</div>


`;
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
    li.innerHTML=`<div class="container-fluid d-flex justify-content-center me-2">
                    <div class="row ">
                        <div class="col-11 col-lg-11 col-md-11 mt-1 mb-2 d-flex justify-content-center ">
                            <h5 class="h5Id " > ID: ${cosa.id}<\h5>
                            <img src="./imagenes/PlaceHolder 400x200.png" class="shadow p-3 mb-5 bg-body rounded" alt="...">
                            
                        </div>
                        
                        <div class="col-11 col-lg-11 col-md-11 m-1 shadow p-3 mb-5 bg-body rounded d-flex justify-content-center">
                            
                            <h3 class="" > Producto: ${cosa.nombre}<\h3>              
                            
                        </div>
                        
                        <div class="col-11 col-lg-11 col-md-11 m-1 shadow p-3 mb-5 bg-body rounded d-flex justify-content-center">
                                        
                            <h3 class="" > $ ${cosa.precio}<\h3>
                           
                        </div>
                        
                        <div class="col-11 col-lg-11 col-md-11 m-1 shadow p-3 mb-5 bg-body rounded d-flex justify-content-center">
                            
                            <h4 class="" > Stock: ${cosa.stock}<\h4>
                            
                        </div>
                        
                        <div class="col-11 col-lg-11 col-md-11 mt-1 mb-3 d-flex justify-content-center ">
                            
                            <button class="botonRespuesta btn btn-success btn-lg " id="btn-${cosa?.nombre}" onclick="agregarAlCarro(${index})"> <h4>COMPRAR</h4>  </button>
                        </div>
                    
                    </div>
                </div>
                
                `;
                contenedor.appendChild(li);
})

function agregarAlCarro(cosaIndex){
    carrito.push(cosas[cosaIndex]);
    console.log(carrito);

    const Toast=Swal.mixin({
        toast: true,
        position: 'top-star',
        timmer: 2500,
        timmerProgressBar: true,
        didOpen:(toast)=>{
            toast.addEventListener('mouseenter', Swal.stoptimmer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    toast.fire({
        icon: 'success',
        title: 'agregado al carrito'
    })
    actualizarStorage(carrito);
}

function actualizarStorage(carrito){
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const button = document.getElementsByClassName('botonRespuesta')
button.addEventListener('click', ()=> {
    //esta funcion ejecuta el agregar el carrito con la id del producto
    agregarAlCarro(producto.id)
    // sweet alert luego de agregar productos al carrito
    const Toast = Swal.mixin({
        toast:true,
        position: 'top-star',
        timmer: 2500,
        timerProgressBar: true,
        didOpen: (toast) =>{
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: 'success',
        title: 'agregando al carrito'
    })
} )
 








