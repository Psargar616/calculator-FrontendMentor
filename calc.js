const resetButton = document.getElementById('reset-button');
const equalButton = document.getElementById('equal-button');
const deleteButton = document.getElementById('delete-button');
const screen = document.getElementById('screen');
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operator');
const theme_Toggle = document.getElementById('theme-toggle');
const ball_Toggle = document.getElementById('ball-toggle');
const body = document.querySelector('body');
// global variables
var variables = ['', ''];
var operator = '';
var id = 0;

// reset function
function reset() {
    variables = ['', ''];
    operator = '';
    id = 0;
    updateScreen();
}

// update function

function updateScreen() {
    if(variables[id] === ''){
        screen.innerText = '0';
    } else {
        screen.innerText = variables[id];
    }
}

// delete function

function del() {
    if(variables[id].length > 0){
        variables[id] = variables[id].substr(0, variables[id].length-1);
        updateScreen();
    }
}

// calculator function

function calculate(){
    var res = eval(variables[0] + operator + variables[1]);
    operator = '';
    variables[1] = '';
    variables[0] = res;
    id = 0;
    updateScreen();
    variables[0] = '';
    // here i'm using screen as temporary variable
}

resetButton.addEventListener('click', reset);
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        // validation inputs
        const regexp = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;

        if( regexp.test(variables[id]+button.innerText) ){
            variables[id] += button.innerText;
            updateScreen();
        }

    });
});

deleteButton.addEventListener('click', del);

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(variables[0] === '' && screen.innerText !== '0'){
            variables[0] = screen.innerText;
        
        }

        id++;
        switch(button.innerText){
            case '+':
            case '-':
            case '/':
                operator = button.innerText;
                break;
            case 'x':
                operator = '*';
        }

        console.log('variables: ', variables, ' id: ', id, ' operator: ', operator);
    });
});

equalButton.addEventListener('click', calculate);



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