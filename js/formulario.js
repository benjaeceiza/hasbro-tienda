


function mostrarFormulario(opcion) {

    switch (opcion) {
        case 1:
            
            $conteinerFormulario.innerText = "";
            $subtitulo.innerText = "Agregar Producto";
            $inputNombre.placeholder = "Nombre Producto";
            $inputPrecio.placeholder = "Precio Producto";
            $inputImagen.placeholder = "Dirección de imagen";
            $inputStock.placeholder = "Stock De Producto";

            $inputNombre.value = "";
            $inputPrecio.value = "";
            $inputStock.value = "";
            $inputImagen.value = "";
            $conteinerFormulario.appendChild($subtitulo);
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
            $inputNombre.placeholder = "Nombre Producto";
            $subtitulo.innerText = "Eliminar producto";
            $conteinerFormulario.appendChild($subtitulo);
            $conteinerFormulario.appendChild($inputNombre);
            $conteinerFormulario.appendChild($botonEnviar);


            $botonEnviar.onclick = () => buscarPorNombre($inputNombre.value);
           
            break;
        default:
            break;
    }
}


const $subtitulo = document.createElement("h2");
$subtitulo.innerText = "Agregar Producto";
$subtitulo.className = "subtitulo";

const $botonAgregar = document.getElementById("boton-agregar");
const $botonEliminar = document.getElementById("boton-eliminar");


const $conteinerFormulario = document.getElementById("conteiner-formulario");
const $inputNombre = document.createElement("input");
$inputNombre.className = "input-formulario";

const $inputPrecio = document.createElement("input");
$inputPrecio.className = "input-formulario";
$inputPrecio.type = "number";

const $inputStock = document.createElement("input");
$inputStock.type = "number";
$inputStock.className = "input-formulario";

const $inputImagen = document.createElement("input");
$inputImagen.className = "input-formulario";

const $botonEnviar = document.createElement("button");
$botonEnviar.innerText = "Enviar";
$botonEnviar.className = "boton-administrador"


mostrarFormulario(1);

$botonAgregar.onclick = () => mostrarFormulario(1)
$botonEliminar.onclick = () => mostrarFormulario(2)












