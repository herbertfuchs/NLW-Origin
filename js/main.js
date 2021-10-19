// Começando a desenvolver a função para o menu mobile

// Abre e fecha menu pelo ícone hamburguer e X
const nav = document.querySelector('#header nav'); // Procurou o NAV dentro do #HEADER do HTML
const toggle = document.querySelectorAll("nav .toggle"); // Procurou o TOGGLE dentro do NAV no HTML

for (const element of toggle){ // o Element está pegando o icon-menu e icon-close através do toggle
    element.addEventListener('click', function () {
        //alert('Estou funcionando!')
        nav.classList.toggle('show') // Este método TOGGLE, adiciona o show não estiver presente, e remove se estiver.
    });
}

// quando clicar em um item do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function (){
        nav.classList.remove('show') // Fecha o menu assim que clicamos em uma das opções dentro dele
    });
}

/* SOMBREAMENTO HEADER QUANDO SCROLL */
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){
    if(window.scrollY >= navHeight){
        // scroll maior que a altura do header
        header.classList.add('scroll')
    } else{
        // menor que a altura do header
        header.classList.remove('scroll')
    }
})

/* TESTIMONIALS CAROUSEL */

const swiper = new Swiper('.swiper', {
    slidesPerview: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
  });

/* SCROLL REVEAL API, para revelar elementos esmaecendo ao rolar a página */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 500,
    reset: true
})

scrollReveal.reveal( /* SELECIONANDO O QUE TERÁ A ANIMAÇÃO */
    `#home .text, #home .image, 
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social`
    ,{ interval: 100 })

/* ARROW BACK TO TOP */

const backToTopButton = document.querySelector('.back-to-top')

    window.addEventListener('scroll', function(){
        if(window.scrollY >= 560){
            backToTopButton.classList.add('show')
        }
        else{
            backToTopButton.classList.remove('show')
        }
    });