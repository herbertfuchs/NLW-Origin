// Começando a desenvolver a função para o menu mobile

const nav = document.querySelector('#header nav'); // Procurou o NAV dentro do #HEADER do HTML
const toggle = document.querySelectorAll("nav .toggle"); // Procurou o TOGGLE dentro do NAV no HTML

for (const element of toggle){ // o Element está pegando o icon-menu e icon-close através do toggle
    element.addEventListener('click', function () {
        //alert('Estou funcionando!')
        nav.classList.toggle('show') // Este método TOGGLE, adiciona o show não estiver presente, e remove se estiver.
    })
}