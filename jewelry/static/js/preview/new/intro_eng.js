$(function () {
    $.get('/getIntroduction_eng/', function (introduction) {
        var intro = introduction;
        //alert(len)
        $("#intro").append('<pre>' + intro.intro + '</pre>');
        $("#exper").append('<pre>' + intro.exper + '</pre>');
    })
});
