/* ---------------- mobile nav -------------------------- */

function mobileNav() {
    // Mobile nav button
    const navBtn = document.querySelector('.mobile-nav-btn');
    const nav = document.querySelector('.mobile-nav');
    const menuIcon = document.querySelector('.nav-icon');

    // Функция для закрытия меню
    function closeNav() {
        nav.classList.remove('mobile-nav--open');
        menuIcon.classList.remove('nav-icon--active');
        document.body.classList.remove('no-scroll');
    }

    navBtn.onclick = function () {
        nav.classList.toggle('mobile-nav--open');
        menuIcon.classList.toggle('nav-icon--active');
        document.body.classList.toggle('no-scroll');
    };

    // Получаем все ссылки внутри меню
    const navLinks = document.querySelectorAll('.mobile-nav a');

    // Добавляем обработчик события для каждой ссылки
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            closeNav(); // Закрываем меню при клике на ссылку
        });
    });
}

mobileNav();


/* ----------------------- Swiper -----------------------------*/

function swiperFunc() {
    const swiper = new Swiper('.swiper', {
        loop: false,
        slidesPerView: 3,
        grid: {
            rows: 2,
        },
        spaceBetween: 26,
        // Navigation arrows
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
        breakpoints: {
            1370: {
                slidesPerView: 3,
                spaceBetween: 21,
            },

            1100: {
                slidesPerView: 2,
                spaceBetween: 21,
            },


            350: {
                slidesPerView: 2,
                spaceBetween: 19,
            },


        }
    });
}

swiperFunc()