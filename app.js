//Liste for Submit
document.getElementById('loan-form').addEventListener('submit', calculateResult);

function calculateResult(e) {
  // UI Variables

  const amount = document.getElementById('amount');
  const intrest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedIntrest = parseFloat(intrest.value) /100 /12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Monthly Payments 
  const x = Math.pow(1 + calculatedIntrest, calculatedPayments);
  const monthly = (principal * x * calculatedIntrest)/(x-1);

  if (isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
  }else {
    showError ('Please enter correct numbers'); 
  }
  e.preventDefault();
}

function showError(error) {
  //Create a div
  const errorDiv = document.createElement('div');

  //Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  //Add class
  errorDiv.className = 'alert alert-danger';

  //create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  //Insert Error above heading
  card.insertBefore(errorDiv, heading);

  //Clear error after 2 seconds
  setTimeout(clearError, 2000);
}

function clearError(){
  document.querySelector('.alert').remove();
}