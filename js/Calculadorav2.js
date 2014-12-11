//TODO: 
//solve undefined values

var num1, num2, operator, result;

//initial setup and reset option
function reset() {
  num1 = num2 = operator = result = " ";  
  $("#showResult input:text").val("");   
}

$(document ).ready(function() {
        reset();
});
//deal with numbers and operators input
$('.numbers').click(function(e) {
    //if it is a number and it is the first operand
    if (operator ===  " " ){
            console.log(e.target.textContent)  ; 
            num1 += e.target.textContent;
            
            $("#showResult input:text").val(num1);   
        
    //if it is a number and it is the second operand
    }   else if (operator !== ""){
            num2 += e.target.textContent;
            $("#showResult input:text").val(num2);   
            } else {
            //if it is an error   
            $("#showResult input:text").val("Please input a legit operation");   
    }
});

//if it is an operator
$('.operators').on("click", function (e) {
    operator = e.target.textContent;
    $("#showResult input:text").val(operator);        
});

function doOperation (e) {
    //e.preventDefault();
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (num1 === "" || num2 === "" || operator === "") {
        $("#showResult input:text").val("Please input a legit operation"); 
    } else {
        switch (operator) {
            case "+":
            result = num1 + num2;
            break;
    
            case "-":
            result = num1 - num2;
            break;
    
            case "*":
            result = num1 * num2;
            break;
    
            case "/":
            result = num1 / num2;
            break;
    
            default:
            result = "Please input a legit operation";
        }
        $('#result').val(result);
        num1, num2, operator = null;
    }    
}

//when the "equal" or submit button is pressed
$('#equal').on("click",  doOperation);
$('#showResult').on("submit", doOperation);

//when any other operator is pressed to perform more calculations
//previous result = first operand
$('#operators').on('click', function(e) {
    if (num1 !== null && num2 !== null && operator !== null) {
        doOperation;
        num1 = result;
        $("#showResult input:text").val(num1); 
        operator = e.target;
        $("#showResult input:text").val(operator); 
    }
});

$('#cc').on("click", reset);