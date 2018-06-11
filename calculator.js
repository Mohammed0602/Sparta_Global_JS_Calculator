
    // get the user inputs
    var value1 = prompt('Enter First Value');
    var value2 = prompt('Enter Second Value');
    var choice = prompt('Choose your action (A)dd (S)ubtract (M)ultiply (D)ivide') || "A";
// run and return the calculation

if (choice == 'A') {
    console.log(value1 + " + " +  value2 + " = " +  addition(value1, value2));
    alert(value1 + " + " +  value2 + " = " +  addition(value1, value2));
  }else if (choice == 'S') {
    console.log(value1 + " - " +  value2 + " = " +  substraction(value1, value2));
    alert(value1 + " - " +  value2 + " = " +  substraction(value1, value2));
  }else if (choice == 'M') {
    console.log(value1 + " x " +  value2 + " = " +  multiplication(value1, value2));
    alert(value1 + " x " +  value2 + " = " +  multiplication(value1, value2));
  }else if (choice == 'D') {
    console.log(value1 + " / " +  value2 + " = " +  division(value1, value2));
    alert(value1 + " / " +  value2 + " = " +  division(value1, value2));
  }
  


  function addition(number_a, number_b){
    return number_a + number_b;
  }

  function substraction(number_a, number_b){
    return number_a - number_b;
  }

  function multiplication(number_a, number_b){
    return number_a * number_b;
  }

  function division(number_a, number_b){
    return number_a / number_b;
  }
