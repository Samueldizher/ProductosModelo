$(function(){

    $("#sobreNosotros").ready( () => $("#sobreNosotrosP").hide());
    $("#nuestroSueño").ready( () => $("#nuestroSueñoP").hide());
    $("#vidaModelo").ready( () => $("#vidaModeloP").hide());
    $("#sustentabilidad").ready( () => $("#sustentabilidadP").hide());


    $("#sobreNosotros").click(function(){

        $("#sobreNosotrosP").slideToggle(500);
        $("#nuestroSueñoP").hide(500);
        $("#vidaModeloP").hide(500);
        $("#sustentabilidadP").hide(500);

    })

    $("#nuestroSueño").click(function(){

        $("#nuestroSueñoP").slideToggle(500);
        $("#sobreNosotrosP").hide(500);
        $("#vidaModeloP").hide(500);
        $("#sustentabilidadP").hide(500);

    })

    $("#vidaModelo").click(function(){

        $("#vidaModeloP").slideToggle(500);
        $("#sobreNosotrosP").hide(500);
        $("#nuestroSueñoP").hide(500);
        $("#sustentabilidadP").hide(500);

    })

    $("#sustentabilidad").click(function(){

        $("#sustentabilidadP").slideToggle(500);
        $("#nuestroSueñoP").hide(500);
        $("#sobreNosotrosP").hide(500);
        $("#vidaModeloP").hide(500);

    })



})