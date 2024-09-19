// add money to the account
// step 1 - add event handler to the btn
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // step 2 - prevent default reloading
    event.preventDefault();
    // console.log('add money clicked');

    // step - 3 - get the input amount
    const inputAmount = document.getElementById("input-add-money").value;
    console.log(inputAmount);

    //   step -4 - get the input pin number
    const inputPin = document.getElementById("input-pin-number").value;
    console.log(inputPin);

    //    step -5 - verify pin number

    if (inputPin === "1234") {
      console.log("adding money to your account");

      const balance = document.getElementById("account-balance").innerText;
      console.log(balance);

      //    step 6 - add inputAmount with balance
      const inputAmountNumber = parseFloat(inputAmount);
      const balanceNumber = parseFloat(balance);
      const newBalanceNumber = inputAmountNumber + balanceNumber;
      console.log(newBalanceNumber);

      //    step 7 - update the balance in the UI/ DOM
      document.getElementById('account-balance').innerText = newBalanceNumber;
    } 
    else {
      alert("failed to add money ! please try again");
    }
  });
