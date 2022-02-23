var figures = ["rectangulo", "cuadrado", "circulo", "rombo"];
var random = figures[Math.floor(Math.random()*figures.length)];

$("#figura").text(random);

$(".figura").click(function(){
  $(".figura").removeClass( "selected" );
  $(this).addClass( "selected" );
});


$( "form" ).submit(function( event ) {
  event.preventDefault();
 
  $( "mensaje" ).remove( ".pl" );
  
  if( $(".figura.selected").attr( "nombre" ) != random ){
    $( ".mensaje" ).html( "<h3 class='pl'>Selecciona la figura correcta</h3>" ).show(); 
  }else{
    $('#cmodal').modal();
      $("input[type='text']").each(function(){
           var id = $(this).attr( "id" );
           var val = $(this).val();
            if( val === ""){
              val = ("No capturado"); 
            }
          $( "#datos" ).append( "<li> <strong>"+ id + ": </strong>"+ val +"</li>" );
        });
        var valmensaje = $("textarea").val();
          if( valmensaje === ""){
             valmensaje = ("Sin mensaje"); 
           }
        $( "#datos" ).append( "<li> <strong>"+ $("textarea").attr( "id" ) + ": </strong> "+ valmensaje +"</li>" );
    
  }
});

$('#cmodal').on('hidden.bs.modal', function (e) {
  $("#datos li").remove();
})


