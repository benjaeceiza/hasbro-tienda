class Carrito {
    constructor(nombre,precio,cantidad,imagen,total){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.imagen = imagen;
        this.total = (precio*cantidad) 

        
    }
}



let arrayCarrito;

let total = JSON.parse(localStorage.getItem("total"))||0;

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




function cargarCarrito(nombre,precio,cantidad,imagen) {

    const carritoNuevo = new Carrito (nombre,precio,cantidad,imagen);
    arrayCarrito.unshift(carritoNuevo);
     
    localStorage.setItem("arrayCarrito", JSON.stringify(arrayCarrito));

    mostrarCarrito(arrayCarrito);

   
}


console.log(total);




function mostrarCarrito(arrayCarrito){

    

    const $conteinerCompras = document.getElementById("conteiner-compras");
    $conteinerCompras .innerText = "";

     const $pago = document.getElementById("pago");
    
     arrayCarrito.forEach(el=> {total = total + el.total});

     arrayCarrito.forEach(el => {
        $pago.innerText="";
         const $cardCarrito = document.createElement("div");
         $cardCarrito.className = "card-total";
     
         const $imagenCardCarrito = document.createElement("img");
         $imagenCardCarrito.className = "img-carrito";
         $imagenCardCarrito.src = el.imagen;
     
         const $cantidadProductoCarrito = document.createElement("p");
         $cantidadProductoCarrito.className = "cantidad-carrito";
         $cantidadProductoCarrito.innerText = "X " + el.cantidad;
     
         const $precioProducto = document.createElement("p");
         $precioProducto.className = "total-producto";
         $precioProducto.innerText = "$" + (el.precio * el.cantidad);

         
     
         const $conteinerPago = document.createElement("div");
         $conteinerPago.className = "pagar";
     
         const $compraTotal = document.createElement("p");
     
         $compraTotal.className = "precio-total";
         $compraTotal.innerText = "TOTAL: $" + total;
         
     
         const $botonPagar = document.createElement("button");
         $botonPagar.className = "boton-pagar";
         $botonPagar.innerText ="Pagar"
         
         $cardCarrito.appendChild($imagenCardCarrito);
         $cardCarrito.appendChild($cantidadProductoCarrito);
         $cardCarrito.appendChild($precioProducto);
         $conteinerCompras.appendChild($cardCarrito);

        
         $conteinerPago.appendChild($compraTotal);
         $conteinerPago.appendChild($botonPagar);
         $pago.appendChild($conteinerPago);
         

     })   

}