// скрипт для модального окна
const requestButton = document.querySelector('.request');
const continueButton = document.querySelector('.modal__button');
const modalWindow = document.querySelector('.modal');

requestButton.addEventListener('click', function (event) {
    modalWindow.classList.add('modal-active')
});

continueButton.addEventListener('click', function (ev) {
    modalWindow.classList.remove('modal-active')
});



// скрипт для табов
document.querySelectorAll('.tabs__triggers-item').forEach((item) =>
    item.addEventListener('click', function (eve) {
        eve.preventDefault();
        const id = eve.target.getAttribute('href').replace('#', '');

    document.querySelectorAll('.tabs__triggers-item').forEach(
        (child) => child.classList.remove('tabs__triggers-item_active')
    );

    document.querySelectorAll('.tabs__content-item').forEach(
        (child) => child.classList.remove('tabs__content-item_active')
    );

    item.classList.add('tabs__triggers-item_active');
    document.getElementById(id).classList.add('tabs__content-item_active');
})
);

document.querySelector('.tabs__triggers-item').click();

// инициализация слайдера
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<", ">"],
        responsive: {
            0: {
                items: 1
            },
            479: {
                items: 2
            },
            578: {
                items: 2
            },
            767: {
                items: 3
            },
            991: {
                items: 5
            },
            1200: {
                items: 5
            }
        }
    });
    
    // инициализация fancybox
    $(".gallery").fancybox();

    // маска ввода номера телефона
    $("#phone").mask("+7 (999) 999-99-99");

    // валидация формы
    $(function () {
        $('#form').validate({
            rules: {
                name: {
                    required: true
                },
                phone: {
                    required: true
                },
                comment: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "Поле обязательно к заполнению!"
                },
                phone: {
                    required: "Поле обязательно к заполнению!" 
                },
                comment: {
                    required: "Поле обязательно к заполнению!"
                }
            }
        });
    })

// ajax-скрипт
    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");

            $('form').trigger('reset');
        });
        return false;
    });
});