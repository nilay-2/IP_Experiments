const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const result = document.querySelector('.result')
const add = document.querySelector('.add')
const sub = document.querySelector('.sub')
const mul = document.querySelector('.mul')
const div = document.querySelector('.div')

add.addEventListener('click', function(){
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
    result.value = n1 + n2;
})
sub.addEventListener('click', function(){
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
    result.value = n1 - n2;
})
mul.addEventListener('click', function(){
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
    result.value = n1 * n2;
})
div.addEventListener('click', function(){
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
    result.value = n1 / n2;
})
