   
   //productos ya existentes y nuevos productos(constructor)

    class pesosProductos {
        constructor(nombreProducto, pesoProducto, sku) {
            this.nombreProducto = nombreProducto;
            this.pesoProducto = pesoProducto;
            this.sku = sku;
        }
    }

    const listaProductos = [];

    listaProductos.push(new pesosProductos ("Barril 29 lts", 40, 202108001));
    listaProductos.push(new pesosProductos ("Carton Mega 1.2 lts 12 botellas", 50, 202108002));
    listaProductos.push(new pesosProductos ("Carton familiar 940ml 12 botellas", 45, 202108003));
    listaProductos.push(new pesosProductos ("Carton Botella 355ml 24 botellas", 58, 202108004));
    listaProductos.push(new pesosProductos ("Carton Botella 210ml 24 botellas", 58, 202108005));
    listaProductos.push(new pesosProductos ("Charola Laton 473ml 24 latas", 58, 202108006));
    listaProductos.push(new pesosProductos ("Charola Lata victoria 355ml 24 latas", 58, 202108007));
    listaProductos.push(new pesosProductos ("Charola Lata ModeloEsp 355ml 24 latas", 58, 202108008));
    listaProductos.push(new pesosProductos ("Tarima", 5,202108000));



    //function agregar producto a lista.

    function agregarALista(){
        listaProductos.push(new pesosProductos (nombreProducto.value, parseInt(pesoProducto.value), parseInt(sku.value)));
    }
    
var item = 8;
var totalArrayPesoCarrito = 0;
var totalArrayCantidadCarrito = 0;




    //boton llamar agregar producto con su evento

var botonAgregar = document.getElementById("botonAgregarProducto");
    botonAgregar.addEventListener("click", llamarModalAgregar);  

var ModalAgregar = document.getElementById("modalAgregarproducto");

    function llamarModalAgregar(){
        ModalAgregar.classList.remove("invisible")
    }



    //boton para guardar datos del modal
    var botonGuardar = document.getElementById("botonGuardar");
    botonGuardar.addEventListener("click", comprobarDatosProductoNuevo);


        //Funcion para comprobar si los inputs no vienen vacios, ademas buscamos en el array si hay alguno repetido para que no se vuelva a crear
    function comprobarDatosProductoNuevo(){

        let comprobarSku = listaProductos.find(elemento => elemento.sku == sku.value);
        let comprobarNombre = listaProductos.find(elemento => elemento.nombreProducto == nombreProducto.value);

        if(nombreProducto.value == "" || sku.value == "" || pesoProducto.value == ""){
            botonNullError();
        }
        else if(comprobarSku != undefined || comprobarNombre != undefined){
                if(comprobarSku != undefined){

                    llamarModalProductoRepetido()

                }
                else if(comprobarNombre != undefined){
                
                    llamarModalProductoRepetido()
                }
            }
        else if(sku.value.length != 9){
            botonSKUError();
        }
        else if(pesoProducto.value.length != 2){
            botonPesoError();
        }
        else if(nombreProducto.value.length > 70){
            botonNombreError();
        }
        else{
            guardarAgregarProducto();
        }
    }





                //el programa solo permite agregar 8 items mas, aqui esta la validacion-
    function guardarAgregarProducto(){

        if(item == 16){
            alert("No puede agregar mas de 8 productos");
        }
        else{
        //traemos los datos
        var nombreProducto = document.getElementById("nombreProducto");
        var sku = document.getElementById("sku");
        var pesoProducto = document.getElementById("pesoProducto")
    


        //Despues que pasa las validaciones llamamos a estas funciones
        agregarDiv();
        cerrarModalAgregar();
        llamarModalConfirmar();
        agregarALista();
        resetearModalAgregar();

        //sumamos 1 al contador
        item++;
        
        //llamar para que actualice los nuevos botones
        actualizarArrayBotones();
        
        }
    }


        //funcion para agregar productos con DIV

    function agregarDiv(){
     

        //Treamos el contenedor donde crearemos los productos
         var divGrid = document.getElementById("grid");

         //creamos el contenedor
         var nuevoDivGrid = document.createElement("div")
         nuevoDivGrid.classList.add("gridEspacio")
         divGrid.appendChild(nuevoDivGrid)


            //Creamos contenido de la tarjeta

            var nuevaImagenProducto = document.createElement("img")
            nuevoDivGrid.appendChild(nuevaImagenProducto)
            nuevaImagenProducto.setAttribute("src", "../imagenes/Ejemplo.png")

            var nuevoSKUProducto = document.createElement("h2")
            nuevoDivGrid.appendChild(nuevoSKUProducto)
            nuevoSKUProducto.innerText = (sku.value)

            var nuevoNombreProducto = document.createElement("h3")
            nuevoDivGrid.appendChild(nuevoNombreProducto)
            nuevoNombreProducto.innerText = (nombreProducto.value)

            var nuevaCantidadProducto = document.createElement("h5")
            nuevoDivGrid.appendChild(nuevaCantidadProducto)
            nuevaCantidadProducto.innerText = ("Cantidad")

            var nuevoTextoKilos = document.createElement("h4")
            nuevoDivGrid.appendChild(nuevoTextoKilos)
            nuevoTextoKilos.innerText = ("Peso K:")

            var nuevoPesoProducto = document.createElement("h6")
            nuevoDivGrid.appendChild(nuevoPesoProducto)
            nuevoPesoProducto.innerText = (pesoProducto.value)



                //creamos el input
                var nuevoInputProducto = document.createElement("div")
                nuevoDivGrid.appendChild(nuevoInputProducto)
                nuevoInputProducto.classList.add("inputGrid")

                var nuevoInputCantidad = document.createElement("input")
                nuevoInputProducto.appendChild(nuevoInputCantidad)
                nuevoInputCantidad.setAttribute("type", "number")
                nuevoInputProducto.classList.add("cantidadInput")


                //Creamos el boton agregar
                var nuevoBotonAgregar = document.createElement("div")
                nuevoDivGrid.appendChild(nuevoBotonAgregar)
                nuevoBotonAgregar.classList.add("botonAgregar")
                nuevoBotonAgregar.setAttribute("id", "botonAgregar")

                var nuevoh4BotonAgregar = document.createElement("h4")
                nuevoBotonAgregar.appendChild(nuevoh4BotonAgregar)
                nuevoh4BotonAgregar.innerText = ("Agregar")
                nuevoh4BotonAgregar.classList.add("textoBotonAgregar")
    }








                        //CARRITO

                        //array con productos del carrito
        class ListaProductosCarrito {
            constructor(nombreProducto, pesoProducto, sku, cantidad) {
                this.nombreProducto = nombreProducto;
                this.pesoProducto = pesoProducto;
                this.sku = sku;
                this.cantidad = cantidad;
            }
        }

        const listaCarrito = [];
        console.log(listaCarrito);


        //llamamos a los botones al cargar la pagina
window.onload = actualizarArrayBotones();



        //funcion para darle eventos a los nuevos botones de los nuevos DIV's
function actualizarArrayBotones(){

    botoneraAgregarAcarrito = document.querySelectorAll(".botonAgregar");
                    
    botoneraAgregarAcarrito.forEach(botonAgregarProducto => {

        botonAgregarProducto.addEventListener("click", agregarProductoCarrito)

    });

    inputsCantidad = document.querySelectorAll(".cantidadInput");

}



        //funcion para darle eventos a los nuevos botones de basurero de los nuevos elementos del carrito

function actualizarArrayBotonesCarrito(){

    botoneraBasureroCarrito = document.querySelectorAll(".basureroCarrito");

    botoneraBasureroCarrito.forEach(botonBasurero => {

        botonBasurero.addEventListener("click", eliminarElementoCarrito)

    })
}


//Llamamos al div de productos de carrito
const divCarrito = document.getElementById("productosCarrito");


//variables de totales en carrito
var divTotalCantidad = document.getElementById("totalCantidad");
var divTotalPeso = document.getElementById("totalPeso");

//FUNCION PARA AGREGAR PRODUCTOS AL CARRITO

function agregarProductoCarrito(event){


        //buscamos los elementos mas cercanos al boton seleccionado de los productos
        const botonAdd = event.target;
        const divAddInfo = botonAdd.closest(".gridEspacio");

        var divAddSku = divAddInfo.querySelector("h2").innerText;
        var divAddNombre = divAddInfo.querySelector("h3").innerText;
        var divAddPeso = divAddInfo.querySelector("h6").innerText;
       
        var divAddCantidad = divAddInfo.querySelector("input").value;

        var pesoSumado = 0;

        const nombresDivCarrito = divCarrito.getElementsByClassName("nombreProductoCarrito");

                //buscamos si el producto ya existe en el carrito para agregar el nuevo peso y la nueva cantidad
                for(let i=0; i < nombresDivCarrito.length; i++){
                    if (nombresDivCarrito[i].textContent == divAddNombre){

                    let cantidadDelElemento = nombresDivCarrito[i].parentElement.querySelector(".cantidadProductoCarrito");

                    let pesoDelElemento = nombresDivCarrito[i].parentElement.querySelector(".pesoProductoCarrito");

                            //sacamos el peso a sumar
                        pesoSumado = (Number.parseInt(divAddCantidad * divAddPeso))

                                //sumamos pesos al total
                    divTotalPeso.textContent = (Number.parseInt(divTotalPeso.textContent) + (Number.parseInt(pesoSumado)));
                    divTotalCantidad.textContent = (Number.parseInt(divTotalCantidad.textContent)) + (Number.parseInt(divAddCantidad))      

                            //sumamos el peso anterior con el peso y cantidad nuevos
                    cantidadDelElemento.textContent = (Number.parseInt(cantidadDelElemento.textContent) + Number.parseInt(divAddCantidad));
                    pesoDelElemento.textContent = (Number.parseInt(pesoDelElemento.textContent) + pesoSumado);

                            //buscamos si existe en el array del carrito para camionizar
                let modificarArrayCarrito = listaCarrito.find(elemento => elemento.nombreProducto == nombresDivCarrito[i].textContent);

                            //Si encuentra coincidencias, lo evalua y suma los pesos.
                    if(modificarArrayCarrito != undefined){

                        modificarArrayCarrito.pesoProducto = (Number.parseInt(modificarArrayCarrito.pesoProducto) + Number.parseInt(pesoSumado));
                        modificarArrayCarrito.cantidad = (Number.parseInt(modificarArrayCarrito.cantidad) + Number.parseInt(divAddCantidad));
                        console.log(listaCarrito);
                    }


                    llamarModalConfirmarCarrito();
                    resetearModalAgregar();
            
                    return;
                    }
                }

                //validamos que exista un valor en el input.
        if(divAddCantidad == 0 || divAddCantidad == ""){

        AbrirmodalErrorInputVacio();
        //creamos contenedor
        }
            //si existe, creamos el contenedor

        else{

        var nuevoDivProduct = document.createElement("div");
        nuevoDivProduct.classList.add("producto")
        divCarrito.appendChild(nuevoDivProduct)

        var nombreProductoCarrito = document.createElement("h3");
        nombreProductoCarrito.innerText = (divAddNombre)
        nombreProductoCarrito.classList.add("nombreProductoCarrito")
        nuevoDivProduct.appendChild(nombreProductoCarrito)

        var SKUproductoCarrito = document.createElement("h4");
        SKUproductoCarrito.innerText = (divAddSku)
        nuevoDivProduct.appendChild(SKUproductoCarrito)

        var pesoProductoCarrito = document.createElement("h5");
        pesoProductoCarrito.innerText = (divAddPeso * divAddCantidad)
        pesoProductoCarrito.classList.add("pesoProductoCarrito")
        nuevoDivProduct.appendChild(pesoProductoCarrito)

        var cantidadProductoCarrito = document.createElement("h6");
        cantidadProductoCarrito.innerText = (divAddCantidad)
        cantidadProductoCarrito.classList.add("cantidadProductoCarrito")
        nuevoDivProduct.appendChild(cantidadProductoCarrito)

        var basureroCarrito = document.createElement("img");
        basureroCarrito.setAttribute("src", "../imagenes/basurero.png")
        basureroCarrito.classList.add("basureroCarrito")
        nuevoDivProduct.appendChild(basureroCarrito)


        
        //sumamos pesos al total
        
        divTotalPeso.textContent = (Number.parseInt(divTotalPeso.textContent) + (Number.parseInt(pesoProductoCarrito.textContent)));
        divTotalCantidad.textContent = (Number.parseInt(divTotalCantidad.textContent)) + (Number.parseInt(divAddCantidad))      

        //Agregar al array de carrito

        listaCarrito.push(new ListaProductosCarrito (divAddNombre, parseInt(pesoProductoCarrito.textContent), divAddSku, parseInt(divAddCantidad)));
        console.log(listaCarrito);

        llamarModalConfirmarCarrito();
        resetearModalAgregar();

        //llamamos a la funcion para refrescar los botones de eliminar en carrito
        actualizarArrayBotonesCarrito();
        }
}



function eliminarElementoCarrito(event){

    const botonRemove = event.target;
    const divRemoveInfo = botonRemove.closest(".producto");
    const divRemoveNombre= botonRemove.closest(".nombreProductoCarrito");

    divRemoveInfo.remove();

    //let eliminarArrayCarrito = listaCarrito.find(elemento => elemento.nombreProducto == divRemoveInfo(h3).textContent);



    console.log(divRemoveInfo);
    console.log(divRemoveNombre);
}


var botonCamionizar = document.getElementById("botonCamionizar");
botonCamionizar.addEventListener("click", camionizar)





function camionizar(){

    totalArrayPesoCarrito = 0;
    totalArrayCantidadCarrito = 0;

    for(let n = 0; n < (listaCarrito.length); n++ ){
        totalArrayPesoCarrito = totalArrayPesoCarrito + listaCarrito[n].pesoProducto;
        totalArrayCantidadCarrito = totalArrayCantidadCarrito + listaCarrito[n].cantidad;
    }

    if(totalArrayPesoCarrito == 0 || totalArrayPesoCarrito == ""){

        alert("No tiene productos agregados al carrito para camionizar")
    }
        else if(totalArrayPesoCarrito > 0 && totalArrayPesoCarrito <= 6000){
            alert("usted necesita un camion de carga mediano")
        }
            else if (totalArrayPesoCarrito > 6001 && totalArrayPesoCarrito <= 15000){
                alert("Usted necesita un CAMION UNITARIO C2")
            }
                else if (totalArrayPesoCarrito > 15001 && totalArrayPesoCarrito <= 25000){
                    alert("Usted necesita un CAMION UNITARIO C3")
                }
                    else if (totalArrayPesoCarrito > 25001 && totalArrayPesoCarrito <= 35000){
                        alert("Usted necesita un TRACTO CAMION T2 - S2")
                    }
                        else if (totalArrayPesoCarrito > 35001 && totalArrayPesoCarrito <= 45000){
                            alert("Usted necesita un TRACTO CAMION T3 - S2")
                        }
                            else if (totalArrayPesoCarrito > 45001 && totalArrayPesoCarrito <= 80000){
                                alert("Usted necesita un TRACTO CAMION T3 - S2")
                            }
                                else{
                                    alert("Parece que necesitara mas de un camion.")
                                }
}