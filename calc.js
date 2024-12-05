
let display= document.getElementById('displays');

function append(value){
    display.value += value;
}
function calculate(){
    display.value = eval(display.value);
}
function clear1(){
    display.value='';
}