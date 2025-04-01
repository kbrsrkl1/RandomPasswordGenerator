const btnEl = document.querySelector(".btn");
const alertEl = document.querySelector(".alert")
const iconEl = document.getElementById("icon")
const inputEl = document.querySelector(".input")

btnEl.addEventListener("click", ()=>{
    randomChars()
})

iconEl.addEventListener("click", ()=> {
    copyPassword();
    if(inputEl.value){
        alertEl.classList.remove("active");
        setTimeout(() => {
            alertEl.classList.add("active")
        }, 2000)
    }
})

function randomChars(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const length = 14
    let password = ""
    for (let index = 0; index < length; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNum, randomNum + 1)
    }
    inputEl.value = password;
    alertEl.innerText = password + "copied";
}


function copyPassword() {
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value)
}
