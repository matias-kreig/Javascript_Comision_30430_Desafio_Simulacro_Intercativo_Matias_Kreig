//Productos del Super(Objects mediante API de Mercado Libre)

let contenedor = document.getElementById("container");
const supermercado =[]
supermercado.forEach((supermercado,index)=>{
    let supermercadoLi = document.createElement("li");
    supermercadoLi.id = supermercado.id;
    supermercado.innerHTML= `<div class="container-fluid d-flex justify-content-center me-2">
    <div class="row ">
        <div class="col-11 col-lg-11 col-md-11 mt-1 mb-2 d-flex justify-content-center ">
            <h5 class="h5Id " > ID: ${supermercado.id}<\h5>
            <img src="./imagenes/PlaceHolder 400x200.png" class="shadow p-3 mb-5 bg-body rounded" alt="...">
            
        </div>
        
        <div class="col-11 col-lg-11 col-md-11 m-1 shadow p-3 mb-5 bg-body rounded d-flex justify-content-center">
            
            <h3 class="" > Producto: ${supermercado.title}<\h3>              
            
        </div>
        
        <div class="col-11 col-lg-11 col-md-11 m-1 shadow p-3 mb-5 bg-body rounded d-flex justify-content-center">
                        
            <h3 class="" > $ ${supermercado.price}<\h3>
           
        </div>
        
        <div class="col-11 col-lg-11 col-md-11 m-1 shadow p-3 mb-5 bg-body rounded d-flex justify-content-center">
            
            <h4 class="" > Stock: ${supermercado.available_quantity}<\h4>
            
        </div>
        
        <div class="col-11 col-lg-11 col-md-11 mt-1 mb-3 d-flex justify-content-center ">
            
            <button class="botonRespuesta btn btn-success btn-lg " id="btn-${supermercado?.title}" onclick="agregarAlCarro(${index})"> <h4>COMPRAR</h4>  </button>
        </div>
    
    </div>
</div>`;
contenedor.appendChild(li);


})
const botonB = document.getElementById("botonBuscador")

const traerInfo = async()=>{
   const buscador= document.getElementById("buscador")

    let response = await fetch(`http://api.mercadolibre.com/sites/MLA/search?q=${buscador.value}`) 
    console.log(response);
    let data = await response.json()
    
    supermercado.push(...data.results)
}

botonBuscador.addEventListener("click", e=>traerInfo())

//agregar al carrito
function agregarAlCarro(_supermercadoIndex){
    carrito.push(supermercados[_supermercadoIndex]);
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
    Toast.fire({
        icon: 'success',
        title: 'agregado al carrito'
    })
    actualizarStorage(carrito);
}

function actualizarStorage(carrito){
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

export {supermercado};