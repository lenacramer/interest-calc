document.getElementById('calculator-form').addEventListener('submit', function(e){

    document.getElementById('output').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    setTimeout(calculateResults, 1000);

    e.preventDefault();
})



function calculateResults(){
    console.log("ran");
    const amount = document.getElementById('loan-amt');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    const x = Math.pow(1 + calculatedInterest,calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);
    
    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
        document.getElementById('output').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
    } else showError('please recheck your numbers');

 
}

function showError(error){
    const heading = document.querySelector('#heading');
    const calc = document.querySelector('#calculator')
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert';
    errorDiv.appendChild(document.createTextNode(error));
    calc.insertBefore(errorDiv, heading)
    document.querySelector('.calculate').addEventListener('click', clearError)
    document.getElementById('output').style.display = 'none';
    document.getElementById('loading').style.display = 'none';
}

function clearError(){
    document.querySelector('.alert').remove();
}