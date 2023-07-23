const theme_Toggle = document.getElementById('theme-toggle');
const ball_Toggle = document.getElementById('ball-toggle');
const body = document.querySelector('body');
var thm = 1;

// toggle functionality

theme_Toggle.addEventListener('click', ()=>{
    thm++;
    switch(thm){
        case 2:
            body.classList.add('theme-2');
            ball_Toggle.classList.add('justify-center');
            break;
        case 3:
            body.classList.remove('theme-2');
            body.classList.add('theme-3');
            ball_Toggle.classList.remove('justify-center');
            ball_Toggle.classList.add('justify-end');
            break;
        case 4:
            thm = 1;
            body.classList.remove('theme-3');
            ball_Toggle.classList.remove('justify-end');
            break;
    }


});