let destinos =
{
    "0":{
        "imagen":"https://www.recordrentacar.com/images/beforefooter/destinos/alquiler-coches-madrid.jpg",
        "nombre":"Madrid",
        "validez":"lunes a jueves",
        "Hospedaje":"Hotel",
        "Paquete":"individual",
        "Vuelo":"Ida",
        "precio":"6,000",
        "moneda":"MXN",
        "precioAnterior":"9,000"
    },
    "1":{
        "imagen":"https://www.recordrentacar.com/images/beforefooter/destinos/alquiler-coches-madrid.jpg",
        "nombre":"Madrid",
        "validez":"lunes a jueves",
        "Hospedaje":"Hotel",
        "Paquete":"individual",
        "Vuelo":"Ida",
        "precio":"6,000",
        "moneda":"MXN",
        "precioAnterior":"9,000"
    },
    "2":{
        "imagen":"https://www.recordrentacar.com/images/beforefooter/destinos/alquiler-coches-madrid.jpg",
        "nombre":"Madrid",
        "validez":"lunes a jueves",
        "Hospedaje":"Hotel",
        "Paquete":"individual",
        "Vuelo":"Ida",
        "precio":"6,000",
        "moneda":"MXN",
        "precioAnterior":"9,000"
    }
    
};


var creaDestinos = function(clave, valor) {
    let nuevoDestino = '<div class="panel panel-default panel-default-ofertas col-md-4">'+
      '<div class="panel-body panel-body-ofertas">'+
        '<div class="img-ofertas col-xs-3 col-md-12 ">'+
          '<img src="'+valor.imagen+'" alt="destinos">'+
        '</div>'+
        '<div class="info-ofertas col-xs-6 col-md-9">'+
            '<div class="row titulo-oferta col-xs-12">'+
              '<h4>'+valor.nombre+'</h4>'+
           ' </div>'+
            '<div class="row col-xs-12">'+
              '<p>'+valor.validez+'</p>'+
            '</div>'+
            '<div class="row icon-info col-xs-12">'+
              '<div class=" p-span col-xs-12">'+
                '<div class="col-xs-6 p-span">'+
                  '<p><span class="glyphicon glyphicon-home icon-span " aria-hidden="true"></span>'+valor.Hospedaje+'</p>'+
                '</div>'+
                '<div class="col-xs-6 p-span">'+
                  '<p><span class="glyphicon glyphicon-user icon-span " aria-hidden="true"></span>'+valor.Paquete+'</p>'+
                '</div>'+
                
              '</div>'+
              '<div class="row  col-xs-12">'+
                  '<p><span  class="glyphicon glyphicon-plane icon-span" aria-hidden="true"></span>'+valor.Vuelo+'</p>'+
             ' </div>'+
            '</div>'+
        '</div>'+
        '<div class="precio-ofertas col-xs-3 col-md-3">'+
          '<s><p>'+valor.precioAnterior+'</p></s>'+
            '<big><strong><p>'+valor.precio+'</p></strong></big>'+
            '<h4>+'+valor.moneda+'</h4>'+
        '</div>'+
      '</div>'+
    '</div>'
    
    $('.Ofertas-sol').append(nuevoDestino);
}

// $.getJSON('js/lista.json',function(datos){
    $.each(destinos, function(clave, valor){
        creaDestinos(clave, valor);
    });
   
// });

// let scroll = {
//     'CulturalHistorico':{
//         "id":"Ofertas-Cul",
//         "href":"Ofertas-Cultural"
//     },
//     'NaturalExotico':{
//         "id":"Ofertas-Nat",
//         "href":"Ofertas-Naturall"
//     },
//     'Metropolitano':{
//         "id":"Ofertas-metro",
//         "href":"Ofertas-metropolitano"
//     },
//     'solPlaya':{
//         "id":"Ofertas-so",
//         "href":"Ofertas-sol"
//     }
// }

// $('#Ofertas-Nat').on("click", function(){
//     var posicion = $(" #Ofertas-sol").offset().top;
//     $("html, body").animate({
//         scrollTop: posicion
//     }, 1000); 
// });