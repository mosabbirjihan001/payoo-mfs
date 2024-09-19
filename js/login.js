// console.log('hi ');

// step -1 : set event handler

document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    // step 2 : prevent default behavior - reloading browser
    event.preventDefault();
    // console.log("login button clicked");

 
    //  step 3 : get the phone number 
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    console.log(phoneNumber, pinNumber);

    if(phoneNumber === '019' && pinNumber === '1234'){
        console.log('you are logged in');
        window.location.href = '/home.html'
    }
    else{
      alert('wrong phone number or pin ');
    }
  });
