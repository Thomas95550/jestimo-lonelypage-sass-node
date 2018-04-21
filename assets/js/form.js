$(document).ready(function(){

    $('input[type="radio"]#customRadioInline1').click(function() {
        $('#immeuble').show("slow");
    });

    $('input[type="radio"]#customRadioInline2').click(function() {
        $('#immeuble').hide("slow");
    });
});