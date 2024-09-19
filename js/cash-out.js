// 

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    console.log('hi');

    const inputCashOut = document.getElementById('input-cash-out').value;
    const inputCashOutNumber = parseFloat(inputCashOut);

    const inputPin = document.getElementById('input-cash-out-pin').value;
    // console.log(inputCashOutNumber, inputPin);

    if(inputPin === '1234'){
        console.log('Cash Out Successful.');

        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        const newBalance = balanceNumber - inputCashOutNumber;
        console.log(newBalance);

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to Cash Out . Try Again')
    }
})