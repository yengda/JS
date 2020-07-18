var num1 = "";
var num2 = "";
var operator = "";

var objNum = {
    48 : 0,
    49 : 1,
    50 : 2,
    51 : 3,
    52 : 4,
    53 : 5,
    54 : 6,
    55 : 7,
    56 : 8,
    57 : 9
}

var objOperator = {
    189 : '-',
    187 : '+',
    56 : '*'
}

var count = 1;

function fetchNUmber(number) {
    if (count%2 != 0) {
        num1 = number;
    }
    else 
    num2 = number;
    count++;
}

function fetchOperator(operand) {
    operator = operand;
}

function mathFunc() {
 document.getElementById("result").value=eval(num1+operator+num2);
//    eval(num1+operator+num2)
}

document.addEventListener("keyup", function(event) {
    if(event.keyCode == 13) {
        mathFunc();
    }

    else if(event.keyCode >=49 && event.keyCode <=57) {
        fetchNUmber(objNum[event.keyCode]);
    }

    else if (event.keyCode == 189 || event.keyCode == 187 || event.keyCode == 56) {
            fetchOperator(objOperator[event.keyCode])
    }


})


