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