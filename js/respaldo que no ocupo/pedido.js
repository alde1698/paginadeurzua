const carro = new carrito();
const carrito = document.getElementByld("carrito");
const productos = document.getElementById("lista-carritos");
const listaProductos = document.querySelector ("#lista-carrito tbody");

cargarEventos();
funcion cargarEventos(){
  productos.addEventListener(´click´ , (e) => {carro.comprarProducto(e)});


  carrito.addEventListener(´click´, (e)=> carrito{carro.eliminarProducto(e)});
}