// get input from input field on change 
// calculate fizzbuzz 
// if the input is devided by 3 result is equal to fizz else if the input is devided by 5 the result is buzz else if the input is devided by both 3 & 5 the result is fizzbuzz else if the input is neither devided by 3 nor 5 the result is no fizz no buzz
// display result

function FizzBuzz() {
    const number = document.getElementById("Input").value;
    if (number % 3 === 0 && number % 5 === 0){
      document.getElementById("result").innerHTML = "FizzBuzz";
    }
    else if (number % 3 === 0){
      document.getElementById("result").innerHTML = "Fizz";
    }
    else if (number % 5 === 0) {
      document.getElementById("result").innerHTML = "Buzz";
    }
    else {
      document.getElementById("result").innerHTML = "No Fizz, No Buzz";
    }
  }


