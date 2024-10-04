function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML =
    <div class="cartao__conteudo">
        <h3>${pergunta}</h3>
        <div class="cartao__conteudo__pergunta">
            <p>${pergunta}</p>
        </div>
        <div class ="cartao__conteudo__resposta">
            <p>${resposta}</p>
        </div>
    </div>
    ,


    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active' , viraCartao)
    }
    cartao.addEventListener('click' , viraCartao)



    container.appendChild(cartao)

}
    

    container.appendChild(cartao)

}