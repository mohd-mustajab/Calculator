// let str="1+5*2";
// let result=eval(str);
// console.log(result);

let input = document.getElementById("input");
let btns = document.querySelectorAll('button');
let string = "";
let arr = Array.from(btns);
arr.forEach(button => {
    button.addEventListener("click", (e))
});
function e(event) {
    if (event.target.innerHTML == '=') {
        string = eval(string);
        input.value = string;
    } else if (event.target.innerHTML == 'AC') {
        string = "";
        input.value = string;
    }
    else if (event.target.innerHTML == 'DEL') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    }
    else {
        string += event.target.innerHTML;
        input.value = string;
    }
}