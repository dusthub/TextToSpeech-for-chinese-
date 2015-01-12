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

    $("#speech-form").submit(function(event) {

        event.preventDefault();

        var $form = $( this );
        var $r = $form.find('#r').val();
        var $f = $form.find('#f').val();
        var $to_cut = $('#cut-text').val();
        var url = $form.attr('action');
        alert($r);

        $.post( url, { 'r' : $r, 'f' : $f, 'to_cut' : $to_cut},
            function(data) {
            }
        );
    });


});
