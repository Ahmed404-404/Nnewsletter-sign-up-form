let email = document.querySelector("#email")
let submitBtn = document.querySelector("#submit")
let dissmissBtn = document.querySelector("#dissmiss")
let label = document.querySelector("label")
let span = document.querySelector("span")
let seccessSec = document.querySelector(".seccess")
let signSec = document.querySelector(".sign-up")
let reg = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
let state = null

email.value = ""
email.addEventListener("blur",()=>{
    validate()
})
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    validate()
    if(state){
        signSec.classList.add("hide")
        span.textContent = email.value
        seccessSec.classList.remove("hide")
        state = false
    }

})
dissmissBtn.addEventListener("click",()=>{
    seccessSec.classList.add("hide")
    signSec.classList.remove("hide")
    email.value = ""
})


function validate(){
    if(email.value !== ""){
        if(reg.test(email.value)){
            console.log("true")
            email.classList.remove("not-valid")
            label.removeAttribute("data-valid")
            state = true
        }else{
            email.classList.add("not-valid")
            label.setAttribute("data-valid","valid email required")
            state = false
            console.log("false")
        }
    }
}