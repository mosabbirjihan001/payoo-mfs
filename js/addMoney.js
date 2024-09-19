/**
 * 
 * 
 * 
 * 
 * 
 * 
 * */ 

document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    // get money and pin number
    const inputAmount = document.getElementById('input-add-money').value ;
    const inputAmountNumber = parseFloat(inputAmount);
    // console.log(inputAmount);
    const inputPin = document.getElementById('input-pin-number').value;
    // console.log(inputPin);

    if(inputPin === '1234'){
        console.log('adding money to your account');
        // now add balance
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        // new balance
        const newBalance = balanceNumber + inputAmountNumber ;
        console.log(newBalance);

        // update the DOM with new balance
        document.getElementById('account-balance').innerText = newBalance ;

    }
    else{
        alert(' Failed to add money ! please try again later')
    }
})