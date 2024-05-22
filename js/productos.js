




class Creador {
    constructor(contador,nombre, precio, stock, imagen,) {
       
       
        this.id = contador;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
 

        $inputNombre.value = "";
        $inputPrecio.value = "";
        $inputStock.value = "";
        $inputImagen.value = "";
        localStorage.setItem("contador", contador);
    
        
    }
}


let contador = localStorage.getItem("contador") || 4;

let arrayDeProductos;

if (localStorage.getItem("arrayDeProductos")) {
    arrayDeProductos = JSON.parse(localStorage.getItem("arrayDeProductos"));
    mostrar(arrayDeProductos);


} else {

    arrayDeProductos = [
        {
            id: 4,
            nombre: "Monopoly",
            precio: 1000,
            stock: 50,
            imagen: "../recursos/img-producto/monopoly.webp",
        },
        {
            id: 3,
            nombre: "Baby Alive",
            precio: 3000,
            stock: 20,
            imagen: "../recursos/img-producto/baby.webp",
        },
        {
            id: 2,
            nombre: "Transformer",
            precio: 4500,
            stock: 20,
            imagen: "../recursos/img-producto/transformer.webp",
        },
        {
            id: 1,
            nombre: "Operando",
            precio: 1000,
            stock: 50,
            imagen: "../recursos/img-producto/operando.webp",
        },
    ];
    localStorage.setItem("arrayDeProductos", JSON.stringify(arrayDeProductos));
    mostrar(arrayDeProductos);

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
     
        
        cargar($inputNombre.value, $inputPrecio.value, $inputStock.value, $inputImagen.value);        

    }

}

function cargar(nombre, precio, stock, imagen) {
    contador++
    const nuevoProducto = new Creador(contador,nombre, precio, stock, imagen);
    arrayDeProductos.unshift(nuevoProducto);
    localStorage.setItem("arrayDeProductos", JSON.stringify(arrayDeProductos));
    mostrar(arrayDeProductos);
}




function buscarPorNombre(nombre) {

    if (nombre === "") {
        alert("Ingrese un nombre");

    } else {
        const nuevoArrayDeProductos = arrayDeProductos.filter(el => el.nombre === nombre);
        if (nuevoArrayDeProductos == "") {
            alert("Ese producto no existe, ingrese nuevamente");
            $inputNombre.value = "";
        } else {
            const nuevoArrayDeProductos = arrayDeProductos.filter(el => el.nombre !== nombre);
            arrayDeProductos = nuevoArrayDeProductos;
            localStorage.setItem("arrayDeProductos", JSON.stringify(arrayDeProductos));
            alert("Producto Eliminado con éxito!")
            $inputNombre.value = "";
        }

    }


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
        stock.value = 1;
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
        $botonCarrito.onclick = () => cargarCarrito(el.nombre, el.precio, stock.value, el.imagen);


    })
}