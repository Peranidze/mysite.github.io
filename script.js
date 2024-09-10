const menu_btn = document.querySelector('.burger');
const header_container_content = document.querySelector('.header_block .container_content');
const header_block = document.querySelector('.header_block');
menu_btn.addEventListener('click', ()=>{
    header_block.classList.toggle('activatior_header');
    header_container_content.classList.toggle('active')
})




// const button_menu = document.querySelector('#menu-btn')
const menu = document.querySelector('.header_container_nav');
const contant_left = document.querySelector('.contant_left');
const contant_right = document.querySelector('.contant_right');
const line = document.querySelector('.line');
const gif = document.querySelector('.gif');
const main = document.querySelector('main')



// const date = new Date();
// const monthName = date.toLocaleString('default', { month: 'long' });
// const now_month = monthName.charAt(0).toUpperCase() + monthName.slice(1)
// const now_day = date.getDate();
// const data_block = document.querySelector('.now_data');
// data_block.innerHTML = '';
// data_block.innerHTML = now_day + ' ' + now_month + 'а';
const choice_block_one = document.querySelector('#first_block');


const choice_block_line_one = choice_block_one.querySelector('.line');
const choice_block_text_one = choice_block_one.querySelector('h2');

choice_block_line_one.classList.add('line_active');
choice_block_text_one.classList.add('text_active');

const choice_block_two = document.querySelector('#second_block');

const choice_block_line_two = choice_block_two.querySelector('.line');
const choice_block_text_two = choice_block_two.querySelector('h2');

const choice_block_three = document.querySelector('#third_block');

const choice_block_line_three = choice_block_three.querySelector('.line');
const choice_block_text_three = choice_block_three.querySelector('h2');


// choice_block_one.addEventListener('click', () => {
//     choice_block_line_one.classList.add('line_active');
//     choice_block_text_one.classList.add('text_active');

//     choice_block_line_two.classList.remove('line_active');
//     choice_block_text_two.classList.remove('text_active');
//     choice_block_line_three.classList.remove('line_active');
//     choice_block_text_three.classList.remove('text_active');
// })

if (choice_block_line_one.classList.contains('line_active') && choice_block_text_one.classList.contains('text_active')) {
    choice_block_line_two.classList.remove('line_active');
    choice_block_text_two.classList.remove('text_active');
    choice_block_line_three.classList.remove('line_active');
    choice_block_text_three.classList.remove('text_active');
}

// choice_block_two.addEventListener('click', () => {
//     choice_block_line_two.classList.add('line_active');
//     choice_block_text_two.classList.add('text_active');

//     choice_block_line_one.classList.remove('line_active');
//     choice_block_text_one.classList.remove('text_active');
//     choice_block_line_three.classList.remove('line_active');
//     choice_block_text_three.classList.remove('text_active');
// })

if (choice_block_two.classList.contains('line_active') && choice_block_two.classList.contains('text_active')) {
    choice_block_text_three.classList.remove('line_active');
    choice_block_text_three.classList.remove('text_active');
    choice_block_line_one.classList.remove('line_active');
    choice_block_text_one.classList.remove('text_active');
}

// choice_block_three.addEventListener('click', () => {
//     choice_block_line_three.classList.add('line_active');
//     choice_block_text_three.classList.add('text_active');

//     choice_block_line_two.classList.remove('line_active');
//     choice_block_text_two.classList.remove('text_active');
//     choice_block_line_one.classList.remove('line_active');
//     choice_block_text_one.classList.remove('text_active');
// })

if (choice_block_line_three.classList.contains('line_active') && choice_block_text_three.classList.contains('text_active')) {
    choice_block_line_two.classList.remove('line_active');
    choice_block_text_two.classList.remove('text_active');
    choice_block_line_one.classList.remove('line_active');
    choice_block_text_one.classList.remove('text_active');
}

const text_about = document.querySelector('.container_our_works .container_content p');
const knowledge_block = document.querySelector('.container_our_works .container_content .lists_block');
const projects_block = document.querySelector('.container_our_works .container_content .projects_block');
const height_text = text_about.clientHeight;
const height_knowledge = knowledge_block.clientHeight;
const height_projects = projects_block.clientHeight;


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



var bottomText = function (target) {
    var targetPosition = {
        top: window.scrollY + target.getBoundingClientRect().top,
        bottom: window.scrollY + target.getBoundingClientRect().bottom
    }
    let height = targetPosition.bottom;
    return height
}
const check_point_kn = Math.round(height_history - height_text - height_knowledge - 135)
const check_point_h = Math.round(height_history - height_text);




var Visible_text = function (target) {
    var targetPosition = {
        top: window.scrollY + target.getBoundingClientRect().top,
        bottom: window.scrollY + target.getBoundingClientRect().bottom
    }
    console.log(targetPosition.top, check_point_h, check_point_kn)
    if (Math.round(targetPosition.top) >= Math.round(check_point_h)) {
        choice_block_line_one.classList.add('line_active');
        choice_block_text_one.classList.add('text_active');
    }
    if (Math.round(targetPosition.top) <= Math.round(check_point_h)) {
        choice_block_line_one.classList.remove('line_active');
        choice_block_text_one.classList.remove('text_active');
        choice_block_line_two.classList.add('line_active');
        choice_block_text_two.classList.add('text_active');
    } else {
        choice_block_line_one.classList.add('line_active');
        choice_block_text_one.classList.add('text_active');
        choice_block_line_two.classList.remove('line_active');
        choice_block_text_two.classList.remove('text_active');
    }
    if (choice_block_line_one.classList.contains('line_active') && choice_block_text_one.classList.contains('text_active')) {
        choice_block_line_two.classList.remove('line_active');
        choice_block_text_two.classList.remove('text_active');
    } else {
        choice_block_line_two.classList.add('line_active');
        choice_block_text_two.classList.add('text_active');
    }
    if (targetPosition.top <= check_point_h) {
        if (targetPosition.top >= check_point_kn) {
            choice_block_line_two.classList.add('line_active');
            choice_block_text_two.classList.add('text_active');
        } else {
            choice_block_line_two.classList.remove('line_active');
            choice_block_text_two.classList.remove('text_active');
        }
    }

    if (choice_block_line_two.classList.contains('line_active') && choice_block_text_two.classList.contains('text_active') || choice_block_line_one.classList.contains('line_active') && choice_block_text_one.classList.contains('text_active')) {
        choice_block_line_three.classList.remove('line_active');
        choice_block_text_three.classList.remove('text_active');
    } else {
        choice_block_line_three.classList.add('line_active');
        choice_block_text_three.classList.add('text_active');
    }

};
container_content.addEventListener('scroll', function () {
    Visible_text(text_about);
});
Visible_text(text_about);
