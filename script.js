// SmoothScroll({
//     // Время скролла 400 = 0.4 секунды
//     animationTime: 800,
//     // Размер шага в пикселях 
//     stepSize: 75,

//     // Дополнительные настройки:

//     // Ускорение 
//     accelerationDelta: 30,
//     // Максимальное ускорение
//     accelerationMax: 2,

//     // Поддержка клавиатуры
//     keyboardSupport: true,
//     // Шаг скролла стрелками на клавиатуре в пикселях
//     arrowScroll: 50,

//     // Pulse (less tweakable)
//     // ratio of "tail" to "acceleration"
//     pulseAlgorithm: true,
//     pulseScale: 4,
//     pulseNormalize: 1,

//     // Поддержка тачпада
//     touchpadSupport: true,
// })

// const button_menu = document.querySelector('#menu-btn')
const menu = document.querySelector('.header_container_nav');
const contant_left = document.querySelector('.contant_left');
const contant_right = document.querySelector('.contant_right');
const line = document.querySelector('.line');
const gif = document.querySelector('.gif');
const main = document.querySelector('main')

// button_menu.addEventListener('click', function (e) {
//     e.preventDefault();
//     if (button_menu.classList.contains('open')) {
//         button_menu.classList.remove('open');
//         button_menu.classList.add('close');
//     } else {
//         button_menu.classList.remove('close');
//         button_menu.classList.add('open');
//     }
//     menu.classList.toggle('activator_menu')
//     setTimeout(containerLeftActive, 450);
//     setTimeout(containerRightActive, 850);
//     setTimeout(gifActive, 400)
//     line.classList.toggle('activator_line')
//     main.classList.toggle('activator_main')
// });

// function containerLeftActive() {
//     contant_left.classList.toggle('activator_navblock');
//     console.log('Да')
// }
// function containerRightActive() {
//     contant_right.classList.toggle('activator_navblock');
// }
// function gifActive() {
//     gif.classList.toggle('activator_gif')
// }


// const date = new Date();
// const monthName = date.toLocaleString('default', { month: 'long' });
// const now_month = monthName.charAt(0).toUpperCase() + monthName.slice(1)
// const now_day = date.getDate();
// const data_block = document.querySelector('.now_data');
// data_block.innerHTML = '';
// data_block.innerHTML = now_day + ' ' + now_month + 'а';
console.log('Да')
// const wrapper_about = document.querySelector('.wrapper_about');

// wrapper_about.addEventListener('mousemove', e => {
//     const x = e.clientX;
//     const y = e.clientY;
//     wrapper_about.style.background = `radial-gradient(circle at ${x}px ${y}px, rgb(66 65 65), #0f172a)`;
// });
const choice_block_one = document.querySelector('#first_block');


const choice_block_line_one = choice_block_one.querySelector('.line');
const choice_block_text_one = choice_block_one.querySelector('a');

choice_block_line_one.classList.add('line_active');
choice_block_text_one.classList.add('text_active');

const choice_block_two = document.querySelector('#second_block');

const choice_block_line_two = choice_block_two.querySelector('.line');
const choice_block_text_two = choice_block_two.querySelector('a');

const choice_block_three = document.querySelector('#third_block');

const choice_block_line_three = choice_block_three.querySelector('.line');
const choice_block_text_three = choice_block_three.querySelector('a');


choice_block_one.addEventListener('click', () => {
    choice_block_line_one.classList.add('line_active');
    choice_block_text_one.classList.add('text_active');

    choice_block_line_two.classList.remove('line_active');
    choice_block_text_two.classList.remove('text_active');
    choice_block_line_three.classList.remove('line_active');
    choice_block_text_three.classList.remove('text_active');
})

choice_block_two.addEventListener('click', () => {
    choice_block_line_two.classList.add('line_active');
    choice_block_text_two.classList.add('text_active');

    choice_block_line_one.classList.remove('line_active');
    choice_block_text_one.classList.remove('text_active');
    choice_block_line_three.classList.remove('line_active');
    choice_block_text_three.classList.remove('text_active');
})

choice_block_three.addEventListener('click', () => {
    choice_block_line_three.classList.add('line_active');
    choice_block_text_three.classList.add('text_active');

    choice_block_line_two.classList.remove('line_active');
    choice_block_text_two.classList.remove('text_active');
    choice_block_line_one.classList.remove('line_active');
    choice_block_text_one.classList.remove('text_active');
})



// Получаем нужный элемент
const text_about = document.querySelector('.container_our_works .container_content p');
const knowledge_block = document.querySelector('.container_our_works .container_content .lists_block');
const projects_block = document.querySelector('.container_our_works .container_content .projects_block');

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
var topText = function (target) {
    var targetPosition = {
        top: window.scrollY + target.getBoundingClientRect().top,
        bottom: window.scrollY + target.getBoundingClientRect().bottom
    }
    let height = targetPosition.top;
    return height
}
const height_history = topText(text_about)
let container_content = document.querySelector('.container_our_works .container_content')
var Visible_text = function (target) {
    var targetPosition = {
        top: window.scrollY + target.getBoundingClientRect().top,
        bottom: window.scrollY + target.getBoundingClientRect().bottom
    }
    // console.log("Элемен :", Math.round(targetPosition.top), "Блок:", Math.round(height_history))
    if(Math.round(targetPosition.top) >= Math.round(height_history)){
        choice_block_line_one.classList.add('line_active');
        choice_block_text_one.classList.add('text_active');
        return false
    }else{
        if (Math.round(targetPosition.top) <= Math.round(height_history) &&
        Math.round(targetPosition.bottom) > Math.round(height_history)) {
            choice_block_line_one.classList.add('line_active');
            choice_block_text_one.classList.add('text_active');
        } else {
            choice_block_line_one.classList.remove('line_active');
            choice_block_text_one.classList.remove('text_active');
        };
    }
    
    if (choice_block_line_one.classList.contains('line_active') && choice_block_text_one.classList.contains('text_active')) {
        choice_block_line_two.classList.remove('line_active');
        choice_block_text_two.classList.remove('text_active');
    } else {
        choice_block_line_two.classList.add('line_active');
        choice_block_text_two.classList.add('text_active');
    }
};
container_content.addEventListener('scroll', function () {
    Visible_text(text_about);
});
Visible_text(text_about);
let lists_block = document.querySelector('.container_our_works .lists_block');
var bottomText = function (target) {
    var targetPosition = {
        top: window.scrollY + target.getBoundingClientRect().top,
        bottom: window.scrollY + target.getBoundingClientRect().bottom
    }
    let height = targetPosition.bottom;
    return height
}
const height_list = bottomText(lists_block)
console.log(height_list, height_history)



var Visible_text = function (target) {
    var targetPosition = {
        top: window.scrollY + target.getBoundingClientRect().top,
        bottom: window.scrollY + target.getBoundingClientRect().bottom
    }
    // console.log("Элемен :", Math.round(targetPosition.top), "Блок:", Math.round(height_history))
    if(Math.round(targetPosition.top) >= Math.round(height_history)){
        choice_block_line_one.classList.add('line_active');
        choice_block_text_one.classList.add('text_active');
        return false
    }else{
        if (Math.round(targetPosition.top) <= Math.round(height_history) &&
        Math.round(targetPosition.bottom) > Math.round(height_history)) {
            choice_block_line_one.classList.add('line_active');
            choice_block_text_one.classList.add('text_active');
        } else {
            choice_block_line_one.classList.remove('line_active');
            choice_block_text_one.classList.remove('text_active');
        };
    }
    
    if (choice_block_line_one.classList.contains('line_active') && choice_block_text_one.classList.contains('text_active')) {
        choice_block_line_two.classList.remove('line_active');
        choice_block_text_two.classList.remove('text_active');
    } else {
        choice_block_line_two.classList.add('line_active');
        choice_block_text_two.classList.add('text_active');
    }
};

lists_block.addEventListener('scroll', function () {
    Visible_text(lists_block);
});
Visible_text(lists_block);