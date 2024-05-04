class Creador {
    constructor(nombre, precio, stock, id) {
        this.nombre = nombre;
        this.precio = precio;
        while (this.precio <= 0) {
            this.precio = prompt("Ingrese un precio positivo");
        }
        this.stock = stock;
        while (this.stock <= 0) {
            this.stock = prompt("Ingrese un stock positivo");
        }
        this.id = id;
    }
}

function cargadoConExito(array) {

    alert("Producto: " + array.nombre + "\nCARGADO EXITOSAMENTE!");
}


let opcion;
let busqueda;
const arrayDeProductos = [
    {
        id: 1,
        nombre: "foco",
        precio: 500,
        stock: 200,
    },
    {
        id: 2,
        nombre: "pelota",
        precio: "1000",
        stock: 50,
    },
    {
        id: 3,
        nombre: "teclado",
        precio: 1500,
        stock: 20,
    }
];

do {
    opcion = parseInt(prompt("Ingrese una opcion\n\n 1. Cargar Producto Nuevo\n 2. Ver productos\n 3. Buscar pruductos\n 4. Publicar productos\n 0. salir"));
    switch (opcion) {
        case 1:
            const nuevoProducto = new Creador(prompt("Ingrese nombre del producto"),
                parseInt(prompt("Ingrese precio del producto")),
                parseInt(prompt("Ingrese el stock del producto")),
                parseInt(prompt("Ingrese el id del producto")));
            arrayDeProductos.unshift(nuevoProducto);
            cargadoConExito(nuevoProducto);
            break;
        case 2:
            arrayDeProductos.forEach(el => alert("Id: " + el.id + "\nNombre del producto: " + el.nombre + "\nprecio: " + el.precio + "\nstock: " + el.stock))
            break;
        case 3:
            busqueda = prompt("Ingrese el nombre del producto a buscar");
            let encontrado = arrayDeProductos.find(el => el.nombre === busqueda);
            if (encontrado == undefined) {
                alert("ese producto no existe");
            } else {
                alert("Producto encontrado : \n\nId: " + encontrado.id + "\nNombre: " + encontrado.nombre + "\nPrecio: " + encontrado.precio)
            }
            break;
        case 4:
            for (let i = 0; i < arrayDeProductos.length; i++) {
                const conteiner = document.getElementById("conteiner-productos");
                const card = document.createElement("div");
                card.className = "card";
                const nombre = document.createElement("p");
                nombre.innerText = arrayDeProductos[i].nombre;
                nombre.className = "nombre-producto"
                const imagen = document.createElement("img");
                imagen.src = "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                imagen.className = "imagen-producto"
                const conteinerPrecioStock = document.createElement("div");
                conteinerPrecioStock.className = "stock-precio";
                const precio = document.createElement("p");
                precio.className ="precio";
                precio.innerText = "$" +arrayDeProductos[i].precio;
                const stock = document.createElement("p");
                stock.className = "stock";
                stock.innerText = arrayDeProductos[i].stock + " U";

                card.appendChild(nombre);
                card.appendChild(imagen);
                card.appendChild(conteinerPrecioStock);
                conteinerPrecioStock.appendChild(precio);
                conteinerPrecioStock.appendChild(stock);
                conteiner.appendChild(card);
            }
            opcion = 0;
            break;
        case 0:
            alert("hasta luego");
            break;
        default:
            alert("Opcion invalida");
            break;
    }
} while (opcion !== 0);


