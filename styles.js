document.addEventListener('DOMContentLoaded',(e)=>{


// switch color mode

let input = document.querySelector("input[type=range]");
let root = document.documentElement;

input.addEventListener('change', ()=>{
    switch (input.value) {
        case '0':
            // background colors
            root.style.setProperty('--back', 'hsl(222, 26%, 31%)');
            root.style.setProperty('--back2', 'hsl(224, 36%, 15%)');
            root.style.setProperty('--back3', 'hsl(223, 31%, 20%)');
            // key colors
            root.style.setProperty('--key', 'hsl(30, 25%, 89%)');
            root.style.setProperty('--key2', 'hsl(225, 21%, 49%)');
            root.style.setProperty('--key3', 'hsl(6, 63%, 50%)');
            // key hover color
            root.style.setProperty('--hover', 'hsl(0, 0%, 100%)');
            root.style.setProperty('--hover2', 'hsl(225, 79%, 81%)');
            root.style.setProperty('--hover3', 'hsl(6, 100%, 69%)');
            // key shadow colors
            root.style.setProperty('--shadow', 'hsl(28, 16%, 65%)');
            root.style.setProperty('--shadow2', 'hsl(224, 28%, 35%)');
            root.style.setProperty('--shadow3', 'hsl(6, 70%, 34%)');
            // text colors
            root.style.setProperty('--text', 'hsl(221, 14%, 31%)');
            root.style.setProperty('--text2', 'hsl(0, 0%, 100%)');
            root.style.setProperty('--text3', 'hsl(0, 0%, 100%)');
            root.style.setProperty('--text4', 'hsl(0, 0%, 100%)');

            break;
        case '50':
            // background colors
            root.style.setProperty('--back', 'hsl(0, 0%, 90%)');
            root.style.setProperty('--back2', 'hsl(0, 0%, 93%)');
            root.style.setProperty('--back3', 'hsl(0, 5%, 81%)');
            // key colors
            root.style.setProperty('--key', 'hsl(45, 7%, 89%)');
            root.style.setProperty('--key2', 'hsl(185, 42%, 37%)');
            root.style.setProperty('--key3', 'hsl(25, 98%, 40%)');
            // key hover color
            root.style.setProperty('--hover', 'hsl(0, 0%, 100%)');
            root.style.setProperty('--hover2', 'hsl(185, 53%, 55%)');
            root.style.setProperty('--hover3', 'hsl(25, 100%, 56%)');
            // key shadow colors
            root.style.setProperty('--shadow', 'hsl(35, 11%, 61%)');
            root.style.setProperty('--shadow2', 'hsl(185, 58%, 25%)');
            root.style.setProperty('--shadow3', 'hsl(25, 99%, 27%)');
            // text colors
            root.style.setProperty('--text', 'hsl(60, 10%, 19%)');
            root.style.setProperty('--text2', 'hsl(60, 10%, 19%)');
            root.style.setProperty('--text3', 'hsl(0, 0%, 100%)');
            root.style.setProperty('--text4', 'hsl(0, 0%, 100%)');

            break;
        case '100':
            // background colors
            root.style.setProperty('--back', 'hsl(268, 75%, 9%)');
            root.style.setProperty('--back2', 'hsl(268, 71%, 12%)');
            root.style.setProperty('--back3', 'hsl(268, 71%, 12%)');
            // key colors
            root.style.setProperty('--key', 'hsl(268, 47%, 21%)');
            root.style.setProperty('--key2', 'hsl(281, 89%, 26%)');
            root.style.setProperty('--key3', 'hsl(176, 100%, 44%)');
            // key hover color
            root.style.setProperty('--hover', 'hsl(268, 45%, 44%)');
            root.style.setProperty('--hover2', 'hsl(281, 85%, 45%)');
            root.style.setProperty('--hover3', 'hsl(176, 100%, 78%)');
            // key shadow colors
            root.style.setProperty('--shadow', 'hsl(290, 70%, 36%)');
            root.style.setProperty('--shadow2', 'hsl(285, 91%, 52%)');
            root.style.setProperty('--shadow3', 'hsl(177, 92%, 70%)');
            // text colors
            root.style.setProperty('--text', 'hsl(52, 100%, 62%)');
            root.style.setProperty('--text2', 'hsl(52, 100%, 62%)');
            root.style.setProperty('--text3', 'hsl(0, 0%, 100%)');
            root.style.setProperty('--text4', 'hsl(198, 20%, 13%)');

            break;
    };
});


// Calculator

let numbers = document.getElementById("screen")
let buttons = document.getElementsByClassName("button")
let reset = document.getElementById("reset")
let equal = document.getElementById("equal")
let firstNumber="";
let firstDone = false;
let operator;
let result;

// reset calculator
reset.addEventListener('click', ()=>{
    numbers.textContent="";
    firstNumber="";
    firstDone = false;
    operator = "";
});

// display solution
equal.addEventListener('click', ()=>{
    // remove commas
    numbers.textContent=numbers.textContent.replace(/,/g, "")
    result=equation(firstNumber, numbers.textContent, operator);
    numbers.textContent=display(result);
    firstNumber=result;
    operator = "";
});

display = (result) => {
    // split before and after decimal
    let string = result.toString().split(".")
    // if large number
    if (string[0].length>10){
        // make exponent
        return result.toExponential(9)
    // if has decimal
    }else if (string.length===2){
        // limit characters after decimal
        result = result.toFixed(10-string[0].length)
        // remove extra "0"s from after decimal
        let notZero = false
        while (notZero === false) {
            if (result.charAt(result.length-1)==="0") {
                result = result.slice(0, -1)
            } else {
                notZero = true
            }
        }
        // add commas if decimal
        if(result.toString().split(".")[0].length>3){
            result=result.toString().split(".")[0].slice(0, -3)+","+result.toString().split(".")[0].slice(-3)+"."+result.toString().split(".")[1]
            }
        if(result.toString().split(".")[0].length>7){
            result=result.toString().split(".")[0].slice(0, -7)+","+result.toString().split(".")[0].slice(-7)+"."+result.toString().split(".")[1]
            }
        return result
    // small whole number
    }else{
        // add commas if no decimal
        if (result.toString().length>3){
            result=result.toString().slice(0, -3)+","+result.toString().slice(-3)
        }
        if (result.toString().length>7){
            result=result.toString().slice(0, -7)+","+result.toString().slice(-7)
        }
        return result
    }
}

// make them numbers and solve
equation = (one,two,op) => {
    switch (op) {
        case "+":
            return parseFloat(one)+parseFloat(two)
        case "-":
            return parseFloat(one)-parseFloat(two)
        case "x":
            return parseFloat(one)*parseFloat(two)
        case "/":
            return parseFloat(one)/parseFloat(two)
    }
}

// make numbers into buttons
for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener('click', ()=>{
        // remove commas
        numbers.textContent=numbers.textContent.replace(/,/g, "")
        // key is a number
        if(parseInt(buttons[index].textContent) || buttons[index].textContent==="." || buttons[index].textContent==="0"){
            // if last key was operator
            if (firstDone){
                numbers.textContent=""
                firstDone=false
            };
            // if number is not already max length
            if(numbers.textContent.length<10){
                // if adding decimal
                if(buttons[index].textContent==="."){
                    // if number does not already have decimal
                    if (numbers.textContent - Math.floor(numbers.textContent)===0 && numbers.textContent.charAt(numbers.textContent.length-1)!=="."){
                        // add commas before decimal
                        if (numbers.textContent.split(".")[0].length>3){
                            numbers.textContent=numbers.textContent.slice(0, -3)+","+numbers.textContent.slice(-3)
                        }
                        if (numbers.textContent.split(".")[0].length>7){
                            numbers.textContent=numbers.textContent.slice(0, -7)+","+numbers.textContent.slice(-7)
                        }
                        // add decimal to number
                        numbers.textContent+=buttons[index].textContent
                    }
                // not a decimal
                } else {
                    // add new number to the number
                    numbers.textContent+=buttons[index].textContent
                    // add commas if no decimal
                    if (numbers.textContent.split(".")[0].length>3 && numbers.textContent.split(".").length===1){
                        numbers.textContent=numbers.textContent.split(".")[0].slice(0, -3)+","+numbers.textContent.split(".")[0].slice(-3)
                    // add commas if decimal
                    }else if(numbers.textContent.split(".")[0].length>3 && numbers.textContent.split(".").length===2){
                        numbers.textContent=numbers.textContent.split(".")[0].slice(0, -3)+","+numbers.textContent.split(".")[0].slice(-3)+"."+numbers.textContent.split(".")[1]
                        }
                    if (numbers.textContent.split(".")[0].length>7 && numbers.textContent.split(".").length===1){
                        numbers.textContent=numbers.textContent.split(".")[0].slice(0, -7)+","+numbers.textContent.split(".")[0].slice(-7)
                    // add commas if decimal
                    }else if(numbers.textContent.split(".")[0].length>7 && numbers.textContent.split(".").length===2){
                        numbers.textContent=numbers.textContent.split(".")[0].slice(0, -7)+","+numbers.textContent.split(".")[0].slice(-7)+"."+numbers.textContent.split(".")[1]
                        }
                }
            }
        // key is delete
        }else if(buttons[index].textContent==="DEL"){
            // remove last character in number
            numbers.textContent=numbers.textContent.slice(0, -1);
        // key is operator
        }else{
            // is a number to operate
            if (numbers.textContent) {
                // if an equation is pending, solve, then add operator
                if (firstNumber && operator) {
                    result=equation(firstNumber, numbers.textContent, operator);
                    numbers.textContent=display(result);
                    firstNumber=result;
                    firstDone = true;
                    operator = buttons[index].textContent;
                // no pending equation, establish first number and operator
                } else {
                    operator = buttons[index].textContent;
                    firstNumber = numbers.textContent;
                    firstDone = true;
                }
            }
        }
    })
};

});