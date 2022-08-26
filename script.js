class Cafes{
    constructor(id,imagen,nombre,descripcion,precio){
        this.id = id
        this.imagen = imagen
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
    }
}

class CapsulaCafe{
    constructor(id,imagen,nombre,descripcion,precio){
        this.id = id
        this.imagen = imagen
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
    }
}

let americano = new CapsulaCafe(4,"multimedia/capsula-americano.jpg","Americano","Cafe rico dulce y tostado",450)
let cortado = new CapsulaCafe(5,"multimedia/capsula-cortado.jpg","Gortado","Cafe rico dulce y tostado",450)
let ginseng = new CapsulaCafe(6,"multimedia/capsula-ginseng.jpg","Ginseng","Cafe rico dulce y tostado",450)



class ElementosCarrito{
    constructor(producto,cantidad){
        this.producto = producto
        this.cantidad = cantidad
    }
}





// arrays donde vamos a guardar nuetros productoss
const listaDeProductos = []
let productosCarrito = []




let expresso = new Cafes(1,"multimedia/cafemolido-expresso.jpg","Expresso","Cafe rico dulce y tostado",500)
let houseBlend = new Cafes(2,"multimedia/cafemolido-HouseBlend.jpg","House Blend","Cafe rico dulce y tostado",500)
let mocha = new Cafes(3,"multimedia/cafemolido-mocha.jpg","Mocha","Cafe rico dulce y tostado",500)



const tarjetas = document.getElementsByClassName("todo")[0]
const contenedorCarritoCompras = document.getElementById("items")
const footerCarrito = document.getElementById("footer")





// Definicion de funciones

    // Con esta funcion agregamos los productos al array lista de productos
function agregarProductos(){
    listaDeProductos.push(expresso)
    listaDeProductos.push(houseBlend) 
    listaDeProductos.push(mocha)
    listaDeProductos.push(americano)
    listaDeProductos.push(cortado)
    listaDeProductos.push(ginseng)
    
}

    // con esta funcion agregamos un producto de elemento carrito al array productos carrito
function agregarACarrito(){
    
}


    // con esta funcion vamos a mostrar en el HTML el o los productos que esten en el array productosCarrito
function ProductosEnCarrito(){
    
    let acumuladorPrecios = 0

    contenedorCarritoCompras.innerHTML=""
    productosCarrito.forEach(
        (elemento)=>{
            let renglonesCarrito = document.createElement("tr")
            renglonesCarrito.innerHTML =`
                
                    <td>${elemento.producto.id}</td>
                    <td>${elemento.producto.nombre}</td>
                    <td>${elemento.producto.descripcion}</td>
                    <td><input id= "cantidad-producto-${elemento.producto.id}" type="number" value="${elemento.cantidad}" min="1" max="1000" style="width: 50px"></td>
                    <td>$${elemento.producto.precio}</td>
                    <td>$${elemento.producto.precio*elemento.cantidad}</td>
                    <td><button id="eliminar-producto-${elemento.producto.id}" type="button" class="btn btn-danger">X</button></td>
                
                `

            contenedorCarritoCompras.append(renglonesCarrito)
            
            acumuladorPrecios+= elemento.producto.precio*elemento.cantidad


            let inputCantidadProducto = document.getElementById(`cantidad-producto-${elemento.producto.id}`)    
            inputCantidadProducto.addEventListener("change", cambiar)
            function cambiar(){
                let nuevaCantidad = inputCantidadProducto.value;
                elemento.cantidad = nuevaCantidad;
                ProductosEnCarrito();
            }
    


            let eliminarProducto = document.getElementById(`eliminar-producto-${elemento.producto.id}`)
            eliminarProducto.addEventListener("click",eliminar)
            function eliminar(){
                eliminarElemento(elemento)
                ProductosEnCarrito()
            }





            // recuperacion de datos del carrito
            // if(localStorage.getItem("Carrito De Compras")!=null){
            //     productosCarrito=JSON.parse(localStorage.getItem("Carrito De Compras"))
                
            // }






            // const objetoAJson = JSON.stringify(elemento.producto) // pasamos el objeta a formato json
            
            // localStorage.setItem("Carrito De Compras",objetoAJson)

            // let traidoDelStorage =localStorage.getItem("Carrito De Compras")
            // const jsonAobjeto = JSON.parse(traidoDelStorage) 
            // console.log(jsonAobjeto)
            
        }


    )
    
    if(productosCarrito == 0) {
        footerCarrito.innerHTML = `
            <th scope="row" colspan="5">Carrito vacío</th>
        `;
    } else {
        footerCarrito.innerHTML = `
            <th scope="row" colspan="5">Total de la compra: $${acumuladorPrecios}</th>
        `;
    }
    

    
}

function eliminarElemento(elementoAEliminar){
    let productosQueNoSeBorran = productosCarrito.filter((elemento)=>elementoAEliminar.producto.id != elemento.producto.id)
    productosCarrito.length = 0;

    productosQueNoSeBorran.forEach((elemento) => productosCarrito.push(elemento));
}



    // con esta funcion vamos a crear nuestras cartas que van a contener los productos
function crearCarta(ProductoDeLaLista){

    let boton = document.createElement("button")
    boton.className = "btn btn-primary"
    boton.innerText = "Agregar al Carrito"


    let cuerpoDeCarta = document.createElement("div")
    cuerpoDeCarta.className="card-body text-center"
    cuerpoDeCarta.innerHTML=`
        <h5 class="card-title">${ProductoDeLaLista.nombre}</h5>
        <p class="card-text">${ProductoDeLaLista.descripcion}</p>
        <h4>$${ProductoDeLaLista.precio}</h4>`

    cuerpoDeCarta.append(boton)    


    let contenedorCarta = document.createElement("div")
    contenedorCarta.className= "card align-self-center"
    contenedorCarta.innerHTML=`
        <img src="${ProductoDeLaLista.imagen}" class="card-img-top" alt="...">
    `

    contenedorCarta.append(cuerpoDeCarta)

    
    boton.addEventListener("click",agregar)
    function agregar(){

        let existe = productosCarrito.find((elemento)=>elemento.producto.id == ProductoDeLaLista.id)

        if(existe){
            existe.cantidad+=1
        }else{
            let elementoCarrito = new ElementosCarrito(ProductoDeLaLista,1)
            productosCarrito.push(elementoCarrito)
        }

        
        ProductosEnCarrito()

        alert("agregaste el "+ProductoDeLaLista.nombre+" al carrito")
    }
    
    




    return contenedorCarta
}


    // dentro de esta funcion vamos a recorrer cada producto guaradado en el array de listaDeProductos y al ejecutar la funcion crear carta vamos a ir creando una carta por cada producto que hay y se va a ir mostrando en el HTMl
function TodosLosProductos(){
    listaDeProductos.forEach(
        (producto)=>{
            let TodasLasCartas = crearCarta(producto)
            tarjetas.append(TodasLasCartas)
        }
    )
}






// ejecucion funciones


agregarProductos()
// console.log(listaDeProductos)
agregarACarrito()
// console.log(productosCarrito)

ProductosEnCarrito()

TodosLosProductos()
