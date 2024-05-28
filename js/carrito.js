class Carrito {
    constructor( contadorCarrito,nombre,precio,cantidad,imagen){
        this.id =contadorCarrito;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.imagen = imagen;
        this.total = (precio*cantidad) 
      
      
        localStorage.setItem("contadorCarrito", contadorCarrito);
    }
}


let contadorCarrito = localStorage.getItem("contadorCarrito") || 0;

let total = JSON.parse(localStorage.getItem("total"))||0;

let arrayCarrito;




if(JSON.parse(localStorage.getItem("arrayCarrito"))){
    arrayCarrito = JSON.parse(localStorage.getItem("arrayCarrito"))
    mostrarCarrito(arrayCarrito)
   
}else{
    arrayCarrito = [];

    const $conteinerCompras = document.getElementById("conteiner-compras");
    const $carritoVacio = document.createElement("h2");
    $carritoVacio.innerText = "Carrito Vacío"
    $carritoVacio.className = "carrito-vacio"
    $conteinerCompras.appendChild($carritoVacio);

}

function eliminarProductoCarrito(id){
    Swal.fire({
        title: "Está seguro?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
          
            const nuevoArrayCarrito = arrayCarrito.filter(el => el.id !== id);
            arrayCarrito = nuevoArrayCarrito;
            localStorage.setItem("arrayCarrito", JSON.stringify(arrayCarrito));
            
           
        
            if(arrayCarrito == ""){
               localStorage.removeItem("arrayCarrito");
               const $conteinerCompras = document.getElementById("conteiner-compras");
            $conteinerCompras.innerText = "";
             
            const $carritoVacio = document.createElement("h2");
            $carritoVacio.innerText = "Carrito Vacío"
            $carritoVacio.className = "carrito-vacio"
            $conteinerCompras.appendChild($carritoVacio);
            const $pago = document.getElementById("pago");
            $pago.innerText="";
             
            contadorCarrito = 0;
            localStorage.setItem("contadorCarrito",contadorCarrito);
            }else{
                
                total = JSON.parse(localStorage.getItem("total"))
                mostrarCarrito(arrayCarrito)
            }
          Swal.fire({
            title: "Producto eliminado!",
            icon: "success"
          });
        }
      });
    

    


}




function cargarCarrito(nombre,precio,cantidad,imagen) {
    contadorCarrito=(contadorCarrito+1);
    Toastify({

        text: "Producto Agregado a Carrito",
        destination: "./carrito.html",

        duration: 3000
        
        }).showToast();
    const carritoNuevo = new Carrito (contadorCarrito,nombre,precio,cantidad,imagen);
    arrayCarrito.unshift(carritoNuevo);
     
    localStorage.setItem("arrayCarrito", JSON.stringify(arrayCarrito));


    
    mostrarCarrito(arrayCarrito);

    
     
         

   
}


function pagar(){
    Swal.fire({
        title: "Se realizó el pago!",
        text: "Gracias por confiar en nosotros",
        icon: "success"
      });
 

    const $conteinerCompras = document.getElementById("conteiner-compras");
    $conteinerCompras.innerText = "";
    
    const $carritoVacio = document.createElement("h2");
    $carritoVacio.innerText = "Carrito Vacío"
    $carritoVacio.className = "carrito-vacio"
    $conteinerCompras.appendChild($carritoVacio);
    const $pago = document.getElementById("pago");
    $pago.innerText="";
    

    localStorage.removeItem("arrayCarrito",arrayCarrito);
}




function mostrarCarrito(arrayCarrito){

    

    const $conteinerCompras = document.getElementById("conteiner-compras");
    $conteinerCompras .innerText = "";
    
    
      
     const $pago = document.getElementById("pago");
     arrayCarrito.forEach(el=> {total = total + el.total});

     arrayCarrito.forEach(el => {
        $pago.innerText="";

        const $contenedorCard = document.createElement("div");
        $contenedorCard.className ="contenedor-card"

         const $cardCarrito = document.createElement("div");
         $cardCarrito.className = "card-total";
     
         const $nombreImagen = document.createElement("div");
         $nombreImagen.className = "img-nombre";

         const $imagenCardCarrito = document.createElement("img");
         $imagenCardCarrito.className = "img-carrito";
         $imagenCardCarrito.src = el.imagen;

         const $nombreProductoCarrito = document.createElement("p");
        $nombreProductoCarrito.className = "nombre-producto-carrito";
        $nombreProductoCarrito.innerText =el.nombre;
     
         const $cantidadProductoCarrito = document.createElement("p");
         $cantidadProductoCarrito.className = "cantidad-carrito";
         $cantidadProductoCarrito.innerText = "X " + el.cantidad;
     
         const $precioProducto = document.createElement("p");
         $precioProducto.className = "total-producto";
         $precioProducto.innerText = "$" + (el.precio * el.cantidad);
          
         const $tachito = document.createElement("img");
         $tachito.src = "../recursos/eliminar.png";
         $tachito.className = "tachito";
         
     
         const $conteinerPago = document.createElement("div");
         $conteinerPago.className = "pagar";
     
         const $compraTotal = document.createElement("p");
     
         $compraTotal.className = "precio-total";
         $compraTotal.innerText = "TOTAL: $" + total;
         
     
         const $botonPagar = document.createElement("button");
         $botonPagar.className = "boton-pagar";
         $botonPagar.innerText ="Pagar"

         $botonPagar.onclick = () => pagar()
         
         $tachito.onclick = () => eliminarProductoCarrito(el.id);
        
         $nombreImagen.appendChild($imagenCardCarrito);
         $nombreImagen.appendChild($nombreProductoCarrito);
         $cardCarrito.appendChild($nombreImagen);
         $cardCarrito.appendChild($precioProducto);
         $cardCarrito.appendChild($cantidadProductoCarrito);
         $contenedorCard.appendChild($cardCarrito);
         $contenedorCard.appendChild($tachito);
         $conteinerCompras.appendChild($contenedorCard);

        
         $conteinerPago.appendChild($compraTotal);
         $conteinerPago.appendChild($botonPagar);
         $pago.appendChild($conteinerPago);
         

     })   

}