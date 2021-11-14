$(function(){
    $('#azul').click(function(){
        $('p').css("background-color", "blue")
        .fadeOut()
        .delay(1000)
        .fadeIn();
    });

    $('#vermelho').click(function(){
        $('p').css("background-color", "red");
        $('#mensagem').text("Cor alterada com sucesso")
        .css({color: 'red', border: '1px solid red'})
        .delay(3000)
        .addClass('green');

        $('button').removeClass('red');
    })

    $('#l1').click(function(){
        $('#img1').show();
        $('#img2').hide();
        $('#img3').hide();
        $('#img4').hide();
    });

    $('#l2').click(function(){
        $('#img1').hide();
        $('#img2').show();
        $('#img3').hide();
        $('#img4').hide();
    });

    $('#l3').click(function(){
        $('#img1').hide();
        $('#img2').hide();
        $('#img3').show();
        $('#img4').hide();
    });

    $('#l4').click(function(){
        $('#img1').hide();
        $('#img2').hide();
        $('#img3').hide();
        $('#img4').show();
    });
});