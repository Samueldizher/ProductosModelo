        //Modales de funciones para comprobar datos
        var modalErrorGuardadoSKU = document.getElementById("modalErrorGuardadoSKU");
        var modalErrorGuardadoNombre = document.getElementById("modalErrorGuardadoNombre");
        var modalErrorGuardadoPeso = document.getElementById("modalErrorGuardadoPeso");
        var modalErrorGuardadoNull = document.getElementById("modalErrorGuardadoNull");
        var modalErrorInputVacio = document.getElementById("modalErrorInputVacio");

            function botonSKUError(){
                modalErrorGuardadoSKU.classList.remove("invisible")
            }
        
            function botonNombreError(){
                modalErrorGuardadoNombre.classList.remove("invisible")
            }
        
            function botonPesoError(){
                modalErrorGuardadoPeso.classList.remove("invisible")
            }
            function botonNullError(){
                modalErrorGuardadoNull.classList.remove("invisible")
            }
        
            //Cerrar modal de errores
        
            var botonAceptarErrorNull = document.getElementById("botonAceptarErrorNull");
                botonAceptarErrorNull.addEventListener("click", cerrarModalError)
        
            var botonAceptarErrorSKU = document.getElementById("botonAceptarErrorSKU");
                botonAceptarErrorSKU.addEventListener("click", cerrarModalError);
        
            var botonAceptarErrorNombre = document.getElementById("botonAceptarErrorNombre");
                botonAceptarErrorNombre.addEventListener("click", cerrarModalError);
        
            var botonAceptarErrorPeso = document.getElementById("botonAceptarErrorPeso");
                botonAceptarErrorPeso.addEventListener("click", cerrarModalError);

            var botonAceptarErrorInputVacio = document.getElementById("botonAceptarErrorInputVacio");
                botonAceptarErrorInputVacio.addEventListener("click", cerrarModalError);

            var botonAceptarProductoRepetido = document.getElementById("botonAceptarProductoRepetido");
            botonAceptarProductoRepetido.addEventListener("click", cerrarModalError)
        
        
        
            function cerrarModalError(){
                modalErrorGuardadoSKU.classList.add("invisible");
                modalErrorGuardadoNombre.classList.add("invisible");
                modalErrorGuardadoPeso.classList.add("invisible");
                modalErrorGuardadoNull.classList.add("invisible");
                modalErrorInputVacio.classList.add("invisible");
                modalErrorProductoRepetido.classList.add("invisible");
            }
        
        
        
            //llamar modal confirmar
        var ModalConfirmar = document.getElementById("modalProductoConfirmado");
        var modalProductoConfirmadoCarrito = document.getElementById("modalProductoConfirmadoCarrito");
        
        function llamarModalConfirmar(){
            ModalConfirmar.classList.remove("invisible")  
        }
        function llamarModalConfirmarCarrito(){
            modalProductoConfirmadoCarrito.classList.remove("invisible")
        }
        
        
            //llamar botones aceptar
            var botonAceptar = document.getElementById("botonAceptar");
            botonAceptar.addEventListener("click", cerrarModalConfirmar);

            var botonAceptarCarrito = document.getElementById("botonAceptarCarrito");
            botonAceptarCarrito.addEventListener("click", cerrarModalConfirmarCarrito);
        
        
            function cerrarModalConfirmar(){
                ModalConfirmar.classList.add("invisible")
        
                cerrarModalAgregar();
            }

            function cerrarModalConfirmarCarrito(){
                modalProductoConfirmadoCarrito.classList.add("invisible")
        
            }
        
        //llamar modal error repetido

    var modalErrorProductoRepetido = document.getElementById("modalErrorProductoRepetido");

    function llamarModalProductoRepetido(){
        modalErrorProductoRepetido.classList.remove("invisible");
    }


            
        

            //boton cancelar con su evento
        var botonCancelar = document.getElementById("botonCancelar");
        botonCancelar.addEventListener("click", cerrarModalAgregar);
        
        
            function cerrarModalAgregar(){
                ModalAgregar.classList.add("invisible");
            }
        

            //llamamos al carrito

        var ModalCarrito = document.getElementById("carrito");


        var botonCarritoProd = document.getElementById("botonCarritoProd");
        botonCarritoProd.addEventListener("click", abrirCarrito);

            function abrirCarrito(){
                ModalCarrito.classList.remove("invisible")
            }

            //cerrar en boton carrito
        var botonCerrarCarrito = document.getElementById("botonCerrarCarrito");
        botonCerrarCarrito.addEventListener("click", cerrarCarrito)

            function cerrarCarrito(){
                ModalCarrito.classList.add("invisible")
            }


            //modal error para agregar a carrito
            function AbrirmodalErrorInputVacio(){
                modalErrorInputVacio.classList.remove("invisible");
            }

            //Abrir modal producto agregado carrito.

            //cerrar modal producto agregado carrito

            //modal Agregar vuelve a blanco
            function resetearModalAgregar(){
                sku.value = "";
                nombreProducto.value = "";
                pesoProducto.value = "";
            }
    

        
