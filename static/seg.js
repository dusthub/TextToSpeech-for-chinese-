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

});
