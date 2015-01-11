/**
 * Created by dust2 on 15-1-11.
 */
$(document).ready(function(){

    $('#currYear').empty().append(new Date().getFullYear())

    $("#seg-form").submit(function(event) {

        event.preventDefault();

        var $form = $( this );
        var term = $form.find( 'textarea' ).val();
        var url = $form.attr( 'action' );

        $.post( url, { 'text' : term},
            function( data ) {
                $('#cut-text').empty().append(data);
            }
        );

    });


});
