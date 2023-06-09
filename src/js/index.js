/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente 
*/
//passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
    //passo 2 - dar um jeito de identificar o clique do usuário no botão
    botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', ()=>{

        //passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        //passo 4 - marcar o botão clicado como se estivesse selecionada
        selecionarBotao(botao);

        //passo 5 - esconder a imagem anterior
        esconderImageAtiva();

        //passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        mostarImagemFundo(indice);

    })
} )

function mostarImagemFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotao(botao) {
    botao.classList.add('selecionado');
}

function esconderImageAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
