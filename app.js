const number = document.querySelectorAll('.item');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
const display = document.querySelector('.output');

let num = Array.from(number);
let num1 = '';
let num2 = '';
let answer;

function add(a,b){
    answer = parseFloat(a) + parseFloat(b);
    return answer.toString();
}

function subtract(a,b){
    answer = parseFloat(a) - parseFloat(b);
    return answer.toString();
}

function divide(a,b){
    answer = parseFloat(a) / parseFloat(b);
    return answer.toString();
}

function multiply(a,b){
    answer = parseFloat(a) * parseFloat(b);
    return answer.toString();
}

num.forEach((i) => {
    i.addEventListener('click', () => {

        if(num1.includes('+')){
            num2 += i.value;
            display.textContent = num2;
            if(num2.includes('=')){
                display.textContent = add(num1,num2)
                num1 = add(num1,num2)
                num2 = '';
            }
        } else if(num1.includes('-')){
            num2 += i.value;
            display.textContent = num2;
            if(num2.includes('=')){
                display.textContent = subtract(num1,num2)
                num1 = subtract(num1,num2)
                num2 = '';
            }
        } else if(num1.includes('/')) {
            num2 += i.value;
            display.textContent = num2;
            if(num2.includes('=')){
                display.textContent = divide(num1,num2)
                num1 = divide(num1,num2)
                num2 = '';
            }
        } else if(num1.includes('*')){
            num2 += i.value;
            display.textContent = num2;
            if(num2.includes('=')){
                display.textContent = multiply(num1,num2)
                num1 = multiply(num1,num2)
                num2 = '';
            }
        } else {
        num1 += i.value;
        display.textContent = num1;
        }

    })
})

function clearDisplay(){
    display.textContent = '';
    num1 = '';
    num2 = '';
}


clear.addEventListener('click', clearDisplay);

//toFixed(5) -> returns answer rounded to 5 decimal places