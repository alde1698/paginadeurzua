class carrito{

    //añade el producto a carrito
compraProducto(e){
   e.preventDefault();
   if(e.target.classlist.contains(´agregar-carrito´)){
       const producto = e.target.parentElement.parentElement;
      // this.leerDtosProducto(producto);
console.log(producto);


   }
}
leerDatos,producto(prpoducto){
    const infoproducto = {

        imagen : this.producto.querySelector("img").src,
        titulo : producto.querySelector("h4").textContent,
        precio : this.producto.querySelector(".precio span").textContenet,
        id : this.producto.querySelector("a").getAttribute("data-id"),
        cantidad : 1

    }
     

    this.insertarCarrito(infoProducto);
}

         insertarCarrito(producto){

            const row = document.createElement("tr");
            row.innerHTML= ´
            <td>
                <img src="#(producto.img)" width >
                </td>

                <td>$(producto.titulo)</td>
                <td>$(producto.precio)</td>
                <td><a href="a" class="borrar-producto fas fa-times-circle" data-id="$(producto.id)"></a></td>
             ´;
             listaProductos.appendchild(row);
         }

         eliminarProduto(e){
             e.proventDefault();
             let producto, productoID;
             if(e.target.classlist.contrains(´borrar = producto´)){
                 e.target.parentElement.parentElement.remove();
                 producto = e.target.parentElement.parentElement;
                 productoID = producto.querySelector(´a´).getAttribute(´data-id´);
             }
         }
}