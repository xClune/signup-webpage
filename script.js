const pwInput = document.querySelector('#password');
const pwCheck = document.querySelector('#confirm-pw');
const pwNot = document.querySelector('.pw-not');

pwCheck.addEventListener("keyup", (event) => {
    if (event){
        console.log(pwInput.value);
        console.log(pwCheck.value);
        if(pwInput.value == pwCheck.value){
            pwCheck.style.outlineColor = "green";
            pwNot.innerText = "Passwords match";
            pwNot.style.color = "green";
        } else {
            pwCheck.style.outlineColor = "red";
            pwNot.style.color = "red";
            pwNot.innerText = "*Passwords do not match";
        }
    }
})