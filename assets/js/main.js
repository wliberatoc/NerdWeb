const btnMobile = document.getElementById('hamburguer');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

////swiper
function sizeOfThings(){
    var screenWidth = screen.width;
    var num = 4;
    if (screenWidth < 787 && screenWidth > 600)
        num = 3;
    if (screenWidth < 601)
        num = 1;
    const swiper = new Swiper(".swiper", {
        direction: 'horizontal',
        loop: true,
        centeredSlides: true,
        slidesPerView: num,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
console.log(screenWidth);
};

sizeOfThings();

window.addEventListener('resize', function(){
    sizeOfThings();
});

