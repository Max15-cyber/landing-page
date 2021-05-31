'use strict'
const calculator = document.getElementById('calculator');
calculator.addEventListener('click', calculate);
function calculate(){
    let data = prompt('Привет! Я Калькулятор! Введите то, что хотите посчитать.');
    console.log(data);
    if(data === null){
        alert('Вы отменили ввод');
    } else{
        data = data.replace(/,/g, '.');
        try{
            let result = eval(data);
            if(data === ''){
                alert('Вы ничего не ввели');
            } else if(result === Infinity || result === -Infinity){
                alert('На нуль делить нельзя');
            } else if(isNaN(result)){
               showMessageError();
            }else{
                alert(`Результат: ${result}`);
            }
        } catch{
            showMessageError();
        }
    }
}
function showMessageError(){
    alert('Введите корректное выражение');
}