




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


let contador = localStorage.getItem("contador") || 8;

let arrayDeProductos;

if (localStorage.getItem("arrayDeProductos")) {
    arrayDeProductos = JSON.parse(localStorage.getItem("arrayDeProductos"));
    mostrar(arrayDeProductos);


} else {

    arrayDeProductos = [
        
        {
            id: 8,
            nombre: "Play-doh",
            precio: 2000,
            stock: 30,
            imagen: "../recursos/img-producto/play-doh.jfif",
        },
        {
            id: 7,
            nombre: "Auto HotWheels",
            precio: 1000,
            stock: 50,
            imagen: "../recursos/img-producto/autito.jfif",
        },
        {
            id: 6,
            nombre: "Pelota Adidas",
            precio: 5000,
            stock: 5,
            imagen: "../recursos/img-producto/pelota.jfif",
        },
        {
            id: 5,
            nombre: "Nerf",
            precio: 80000,
            stock: 10,
            imagen: "../recursos/img-producto/nerf.webp",
        },
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
        Toastify({

            text: "Ingrese un nombre",
            position: "center",
            duration: 3000,
            style: {
                background: "linear-gradient(to right, rgb(241, 82, 82), rgb(241, 82, 82))",
              },
            
            }).showToast();
    } else if (imagen == "") {
        Toastify({

            text: "Ingrese una dirección de imagen",
            position: "center",
            duration: 3000,
            style: {
                background: "linear-gradient(to right, rgb(241, 82, 82), rgb(241, 82, 82))",
              },
            
            }).showToast();
    } else if (precio <= 0 && stock <= 0) {
        Toastify({

            text: "Ingrese números positivos",
            position: "center",
            duration: 3000,
            style: {
                background: "linear-gradient(to right, rgb(241, 82, 82), rgb(241, 82, 82))",
              },
            
            }).showToast();
        $inputPrecio.value = "";
        $inputStock.value = "";
    } else if (precio <= 0 || stock <= 0) {
        Toastify({

            text: "Ingrese números positivos",
            position: "center",
            duration: 3000,
            style: {
                background: "linear-gradient(to right, rgb(241, 82, 82), rgb(241, 82, 82))",
              },
            
            }).showToast();
        $inputPrecio.value = "";
        $inputStock.value = "";
    }  else {

        Swal.fire({
            title: "Cargado con éxito!",
            text: "Se ha cargado el producto!",
            icon: "success"
          });
     
        
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
        Toastify({

            text: "Ingrese un nombre",
            position: "center",
            duration: 3000,
            style: {
                background: "linear-gradient(to right, rgb(241, 82, 82), rgb(241, 82, 82))",
              },
            
            }).showToast();

    } else {
        const nuevoArrayDeProductos = arrayDeProductos.filter(el => el.nombre === nombre);
        if (nuevoArrayDeProductos == "") {
            Toastify({

                text: "Ese producto no existe, intente nuevamente",
                position: "center",
                duration: 3000,
                style: {
                    background: "linear-gradient(to right, rgb(241, 82, 82), rgb(241, 82, 82))",
                  },
                
                }).showToast();
    
            $inputNombre.value = "";
        } else {
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
                    const nuevoArrayDeProductos = arrayDeProductos.filter(el => el.nombre !== nombre);
                    arrayDeProductos = nuevoArrayDeProductos;
                    localStorage.setItem("arrayDeProductos", JSON.stringify(arrayDeProductos));
                    
                    $inputNombre.value = "";

                  Swal.fire({
                    title: "Producto eliminado!",
                    icon: "success"
                  });
                }
              });

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