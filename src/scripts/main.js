document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    const quenstions = document.querySelectorAll('[data-faq-question]')

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    // Seção de atrações, programação das abas
    for (let i =0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__lists--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }

    //Seção FAQ, accordion
    for(let i = 0; i < quenstions.length; i++) {
        quenstions[i].addEventListener('click', abreOuFechaResposta);
    }

    function abreOuFechaResposta(elemento) {
        const classe = 'faq__questions__item--is-open';
        const elementoPai = elemento.target.parentNode;


        elementoPai.classList.toggle(classe);
    }

    function removeBotaoAtivo() {
        const buttons = document.querySelectorAll('[data-tab-button]');
        for (let i = 0; i < buttons.length; i++){
            buttons[i].classList.remove('shows__tabs__button--is-active')
        }
    }

    function escondeTodasAbas() {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');

        for (let i = 0; i <tabsContainer.length; i++){
            tabsContainer[i].classList.remove('shows__lists--is-active')
        }
    }
})