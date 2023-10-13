function getResult(firstNumber, secondNumber, operation) {

    switch (operation) {
      case "+":
          return (parseInt(firstNumber) + parseInt(secondNumber));
      case "-":
          return (parseInt(firstNumber) - parseInt(secondNumber));      
      case "*":
          return  (parseInt(firstNumber) * parseInt(secondNumber));
      case "/":
          return (parseInt(firstNumber) / parseInt(secondNumber));
      case "":
          return Math.sqrt(parseInt(firstNumber) / parseInt(secondNumber));   
      case "":
          return Math.pow(parseInt(firstNumber) / parseInt(secondNumber)); 
      }
  }
  export default getResult;