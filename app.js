let calculation = localStorage.getItem("calculation") || "";

function updateCalculation(value) {
 displayCalculation();

 calculation += value;
 // console.log(calculation);
 displayCalculation();

 localStorage.setItem("calculation", calculation);

 function displayCalculation() {
  const display = document.querySelector('.display-calculation');
  display.innerHTML = `${calculation}`;
 }



}

