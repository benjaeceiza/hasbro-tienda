let arrayDeProductos;

if (localStorage.getItem("arrayDeProductos")){
    arrayDeProductos = JSON.parse(localStorage.getItem("arrayDeProductos"));
    mostrar(arrayDeProductos);
  
 
}else{

    arrayDeProductos = [
        {
            nombre:"Monopoly",
            precio:1000,
            stock:50,
            imagen:"../recursos/img-producto/monopoly.webp",
        },
        {
            nombre:"Baby Alive",
            precio:3000,
            stock:20,
            imagen:"../recursos/img-producto/baby.webp",
        },
        {
            nombre:"Transformer",
            precio:4500,
            stock:20,
            imagen:"../recursos/img-producto/transformer.webp",
        },
        {
            nombre:"Operando",
            precio:1000,
            stock:50,
            imagen:"../recursos/img-producto/operando.webp",
        },
    ];
    localStorage.setItem("arrayDeProductos",JSON.stringify(arrayDeProductos));
    mostrar(arrayDeProductos);
   
}





class Creador {
    constructor(nombre, precio, stock, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;

        $inputNombre.value = "";
        $inputPrecio.value = "";
        $inputStock.value = "";
        $inputImagen.value = "";
    }
}







function control(nombre, precio, stock, imagen) {
    if (nombre == "") {
        alert("Ingrese un nombre")
    } else if (imagen == "") {
        alert("Ingrese una imagen")
    } else if (precio <= 0 && stock <= 0) {
        alert("ingrese un numero positivo");
        $inputPrecio.value = "";
        $inputStock.value = "";
    } else if (precio <= 0 || stock <= 0) {
        alert("inrese un numero positivo");
        $inputPrecio.value = "";
        $inputStock.value = "";
    } else if (isNaN(precio) && isNaN(stock)) {
        alert("Ingrese precio y stock con números");
        $inputPrecio.value = "";
        $inputStock.value = "";
    } else if (isNaN(precio) || isNaN(stock)) {
        alert("Ingrese precio y stock con números");
        $inputPrecio.value = "";
        $inputStock.value = "";
    } else {
       
        alert("Producto cargado con exito!");
        cargar($inputNombre.value, $inputPrecio.value,$inputStock.value,$inputImagen.value);
        
    }

}

function cargar(nombre, precio, stock,imagen) {
    const nuevoProducto = new Creador(nombre, precio, stock,imagen);
    arrayDeProductos.unshift(nuevoProducto);
    localStorage.setItem("arrayDeProductos",JSON.stringify(arrayDeProductos));
    mostrar(arrayDeProductos);
}


function mostrar(arrayDeProductos) {
    const conteiner = document.getElementById("conteiner-productos");
    conteiner.innerText = "";
    arrayDeProductos.forEach(el => {
        const card = document.createElement("div");
        card.className = "productos__card";
        const nombre = document.createElement("p");
        nombre.innerText = el.nombre;
        nombre.className = "productos__nombre"
        const imagen = document.createElement("img");
        imagen.src = el.imagen;
        imagen.className = "productos__img"
        const conteinerPrecioStock = document.createElement("div");
        conteinerPrecioStock.className = "productos__stock-container";
        const precio = document.createElement("p");
        precio.className = "productos__precio";
        precio.innerText = "$" + el.precio;
        const stock = document.createElement("input");
        stock.className = "productos__stock";
        stock.placeholder= "1";
        stock.type = "number"
        const $botonCarrito = document.createElement("button");
        $botonCarrito.className = "productos__boton"
        $botonCarrito.innerText = "Enviar a Carrito"
        
        card.appendChild(nombre);
        card.appendChild(imagen);
        conteinerPrecioStock.appendChild(precio);
        conteinerPrecioStock.appendChild(stock);
        conteinerPrecioStock.appendChild($botonCarrito)
        card.appendChild(conteinerPrecioStock);
        conteiner.appendChild(card);

    })
}


function buscarPorNombre(nombre){
    const nuevoArrayDeProductos = arrayDeProductos.filter(el => el.nombre !== nombre);
    arrayDeProductos = nuevoArrayDeProductos;
    localStorage.setItem("arrayDeProductos",JSON.stringify(arrayDeProductos));
}

function mostrarFormulario(opcion) {

    switch (opcion) {
        case 1:
          
            $conteinerFormulario.innerText = "";
            $inputNombre.value = "";
            $inputPrecio.value = "";
            $inputStock.value = "";
            $inputImagen.value = "";
            $conteinerFormulario.appendChild($inputNombre);
            $conteinerFormulario.appendChild($inputPrecio);
            $conteinerFormulario.appendChild($inputStock);
            $conteinerFormulario.appendChild($inputImagen);
            $conteinerFormulario.appendChild($botonEnviar);

            $botonEnviar.onclick = () => control($inputNombre.value, parseInt($inputPrecio.value), $inputStock.value, $inputImagen.value);
            break;
        case 2:
            $conteinerFormulario.innerText = "";
            $inputNombre.value = "";
            $conteinerFormulario.appendChild($inputNombre);
            $conteinerFormulario.appendChild($botonEnviar);
            $botonEnviar.onclick = () => buscarPorNombre($inputNombre.value);
            console.log($inputNombre.value);
            break;
        case 3:
            $conteinerFormulario.innerText = "";
            $inputNombre.value = "";
            $inputPrecio.value = "";
            $inputStock.value = "";
            $inputImagen.value = "";
            $conteinerFormulario.appendChild($inputNombre);
            $conteinerFormulario.appendChild($inputPrecio);
            $conteinerFormulario.appendChild($inputStock);
            $conteinerFormulario.appendChild($inputImagen);
            $conteinerFormulario.appendChild($botonEnviar);
            break;
        default:
            break;
    }
}


const $botonAgregar = document.getElementById("boton-agregar");
const $botonEliminar = document.getElementById("boton-eliminar");
const $botonEditar = document.getElementById("boton-editar");

const $conteinerFormulario = document.getElementById("conteiner-formulario")
const $inputNombre = document.createElement("input");
$inputNombre.placeholder = "Nombre Producto";
$inputNombre.className = "input-formulario";

const $inputPrecio = document.createElement("input");
$inputPrecio.placeholder = "Precio Producto";
$inputPrecio.className = "input-formulario";

const $inputStock = document.createElement("input");
$inputStock.placeholder = "Stock De Producto";
$inputStock.type = "number";
$inputStock.className = "input-formulario";

const $inputImagen = document.createElement("input");
$inputImagen.placeholder = "Dirección de imagen";
$inputImagen.className = "input-formulario";

const $botonEnviar = document.createElement("button");
$botonEnviar.innerText = "Enviar";
$botonEnviar.className = "boton-administrador"

$botonAgregar.onclick = () => mostrarFormulario(1)
$botonEliminar.onclick = () => mostrarFormulario(2)
$botonEditar.onclick = () => mostrarFormulario(3)













