/**
 * Created by PC on 20/04/2018.
 */
$(document).ready(function(){
    var layout = $('#layout-background-animated');
    var layoutInformation = $('#layout-information');
    var layoutBottomBorder = $('.bordered-animated');

    setTimeout(function(){
        layoutInformation.show();
        layoutInformation.animate({
            opacity: 1
        }, 2000, function() {
            layoutBottomBorder.animate({
                'width': 95+'%',
            }, 200, function() {
                // Animation complete.
            });
        // Animation complete.
        });
    }, 600);
});