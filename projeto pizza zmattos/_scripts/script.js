var quantidade = $('div#testemunhos ul').length;
var limite = (quantidade * 336) * -1;
var largura = limite + 336;
var view_largura = $('section#testemunha div#testemunha-centro').width();

$('div#testemunhos').css('width', limite * -1);


$('div#testemunha-direita').click(function(){
    //TESTES FEITOS

    //$('div#teste').html('clicou no botão da direita');
    //$('div#testemunhos').animate({left:-884.333}, 1000);
    
    //---------------------------------------------------------

    posicao_atual = $('div#testemunhos').position().left;
    nova_posicao = posicao_atual - view_largura;
    

    if( limite < posicao_atual - view_largura ){
        $('div#testemunhos').animate({left:nova_posicao}, 1000);
              
    }

    if (limite > (nova_posicao - view_largura)){
        $('div#testemunha-direita ion-icon').css('opacity', 0.5);
        $('div#testemunha-direita ion-icon').css('cursor', 'not-allowed');
    }

    $('div#testemunha-esquerda ion-icon').css('opacity', 1);
    $('div#testemunha-esquerda ion-icon').css('cursor', 'pointer');

})

$('div#testemunha-esquerda').click( function() {
    posicao_atual   = $('div#testemunhos').position().left;

    if ( posicao_atual + view_largura <= 0 ) {
        nova_posicao = posicao_atual + view_largura;
        $('div#testemunhos').animate({left:nova_posicao},1000);
    }

    if ( nova_posicao == 0 ) {
        $('div#testemunha-esquerda ion-icon').css('opacity',0.5);
        $('div#testemunha-esquerda ion-icon').css('cursor','not-allowed');        
    }

    $('div#testemunha-direita ion-icon').css('opacity',1);
    $('div#testemunha-direita ion-icon').css('cursor','pointer');      
})

//------------------------------------------
//testando botão de click para assinar

$('div#planos-bottom-ouro').click(function(){
    alert('Você escolheu o plano Ouro');
})

$('div#planos-bottom-platinium').click(function(){
    alert('Você escolheu o plano Platinium');
})

$('div#planos-bottom-black').click(function(){
    alert('Você escolheu o plano Black');
})

//---------------------------------------------

