$(function () {
    console.log('running');
    $('#body-fade-container').fadeTo(0, 0).fadeTo(100, 1);

    $('#enter-duration').fadeTo(0, 0).delay(800).fadeTo(400, 1);
    $('.duration').fadeTo(0, 0).delay(1000).fadeTo(400, 1);
    $('#start').fadeTo(0, 0).delay(1200).fadeTo(400, 1);
});

$('#start').bind('click', function () {
    $("#start").unbind("click");
    $('#enter-duration').fadeTo(400, 0);
    $('.duration').delay(200).fadeTo(400, 0);
    $('#start').delay(400).fadeTo(400, 0);
    $('#timer').css('display', 'table');

    setTimeout(function () {
        $('#start').css('display', 'none');
    }, 800);

    $('#black').fadeTo(0, 0).delay(600).fadeTo(400, 1);
    $('.top').delay(800).fadeTo(400, 1);
    $('.bottom').delay(1000).fadeTo(400, 1);
    $('#white').delay(1200).fadeTo(400, 1);
});



$('#top-pause').bind('click', function () {
    
});

$('#top-pause').bind('click', function () {

});