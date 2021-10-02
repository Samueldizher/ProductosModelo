   /*
        //traemos el div en blanco
        var divNuevo = document.getElementById(`disponible${i}`);
    
        //traemos elementos a crear
        var nuevoSKU = document.createElement("h2")
        var nuevoNombre = document.createElement("h3")
        var letreroCantidad = document.createElement("h5")
        var nuevoPeso = document.createElement("h6")
    
        //traemos elementos a agregar CLASES
        var divCantidad = document.getElementById(`cantidad${i}`); 
        var imagenProductos = document.getElementById(`imagenGrid${i}`);
        var nuevoBotonAgregar = document.getElementById(`botonAgregarNuevo${i}`);
        
        //agregarmos valores
        nuevoSKU.innerText = (`SKU: ${sku.value}`);
        nuevoNombre.innerText = nombreProducto.value;
        nuevoPeso.innerText = (`Peso: ${pesoProducto.value} K`);
        letreroCantidad.innerText = ("cantidad");
        divNuevo.appendChild(nuevoSKU);
        divNuevo.appendChild(nuevoNombre);
        divNuevo.appendChild(letreroCantidad)
        divNuevo.appendChild(nuevoPeso)
    
    
        //clases a agregar
        divNuevo.classList.add("gridEspacio")
        divCantidad.classList.replace("invisible", "show")
        imagenProductos.classList.remove("invisible")
        nuevoBotonAgregar.classList.replace("invisible", "show")
    
        //Agregamos uno al contador
         i++;*/



   

        if(comprobarSku == true)

                else if(sku.value.length != 9){
                    botonSKUError();
                }
                else if(comprobarSku.sku == sku.value || comprobarNombre.nombreProducto == nombreProducto.value){
                    alert("El sku ya existe")
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

        else if{

        }