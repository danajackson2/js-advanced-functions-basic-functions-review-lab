function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = 'go to the office'){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(style = "*") {
    return function(word = "special"){
        return `You are ${style}${word}${style}!` 
    }
}

let Calculator = {
    add : function(num1, num2){return num1 + num2},
    subtract : function(num1, num2){return num1 - num2},
    multiply : function(num1, num2){return num1 * num2},
    divide : function(num1, num2){return num1 / num2}   
}

function actionApplyer(num, arr){
    if (arr.length === 0){
        return num
    } else {
        return arr[2](arr[1](arr[0](num)))
    }
}