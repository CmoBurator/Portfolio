let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');

});

document.querySelectorAll('a[href^="#"]').forEach(linnk => {
    linnk.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = 70;
        const offsetPosition = scrollTarget.getBoundingClientRect().top - topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


// -----------скрол до верха----------------
const scrollBtn = document.querySelector('.isShowBtn')
window.onscroll = () => {
    if (window.scrollY > 700) {
        scrollBtn.classList.remove('isShowBtn_hide');
        
    } else if(window.scrollY < 700){
        scrollBtn.classList.add('isShowBtn_hide');
    }
};

scrollBtn.onclick = () => {
    window.scrollTo(0, 0)
};

// -----------слайдер----------------


$(document).ready(function(){
    $('.skroll__body').slick({
        // стрелки
        arows: true,
        // нижние точки  
        dots: true,
        // прижимает к верху картинку(еще в css указать align-items: flex-start;)
        adaptiveHeight: true,
        // колличество показываемых блоков
        slidesToShow: 3,
        // колличество скрола блокаов 
        slidesToScroll: 3,
        // скорость скрола
        speed:900,
        // бесконечный скрол
        infinite: true,
        // свайп мышко на пк 
        draggable: false,
        //при нажатии отменяется анимация и быстрей скролится (нужнго отключить)
        waitForAnimate: true,
        // блоки слайда по центру
        centerMode:false,
        responsive:[
            {
                breakpoint:500,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // variableWidth: true,
                }
            }
        ]
    });
});


// ---------------------------



const play = document.querySelector('.play');
const video = document.querySelector('.video__play video');

play.addEventListener('click',() => {
    video.play();
    video.setAttribute('controls', 'controls');
    play.classList.add('play--hidden');
});



