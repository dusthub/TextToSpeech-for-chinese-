/**
 * Created by dust2 on 15-1-11.
 */
$(document).ready(function(){

    //站点脚注时间
    $('#currYear').empty().append(new Date().getFullYear())

    //异步发送post请求，发送需截词文本
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

    //追加截词后文本在表单域中
    $("#speech-form").submit(function(event) {
        var $form = $( this );
        $(document).find('#selected-cut-speech').empty().append($(document).find('#cut-text').text());
        //alert($(document).find('#selected-cut-speech').val());
    });


    $('#about').click(function(){
        $('#info').remove();
        $("<div class='row info' id='info'> <div class='col-md-8 col-md-offset-2'> <div class='alert alert-info row' role='alert'> <button class='close' type='button' data-dismiss='alert'></button>Text To Speech </div> </div> </div>")
            .insertAfter($('#title'));
        setTimeout("$('#info').slideUp('slow')", 5000);
    });


});
