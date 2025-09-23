let emm = document.querySelector("#emma")
let wor = document.querySelector("#word")
let showw = document.querySelector("#sho")
let log = document.querySelector("#login")
let forms = document.querySelector("#forr")
let login = document.querySelector("#log")

showw.addEventListener("click", (event)=>{
    event.preventDefault()

    if(wor.type === "password"){
        showw.textContent = "🙈"
        wor.type = "email"
    } else {
        showw.textContent = "👁️"
        wor.type = "password"
    }
})

forms.addEventListener("click", (event)=>{
    event.preventDefault()
})

log.addEventListener("click", ()=>{
    let isTrue = true
    if(!emm.value.trim() || !emm.value.includes("@") || !emm.value.includes(".com") || !emm.value.length > 8){
        emm.style.border = "1px solid red"
        isTrue = false
    } else {
        emm.style.border = "1px solid green"
    }
    if(!wor.value.trim() || !wor.value.length > 8){
        wor.style.border = "1px solid red"
        isTrue = false
    } else {
        wor.style.border = "1px solid green"
    }
    if(isTrue){
        alert("form fill successful")
        window.location.href = "homepage.html"
    }
})

login.style.marginBottom = "6%"


emm.style.height = "35px"
emm.style.width = "60%"
emm.style.marginBottom = "3%"
emm.style.borderRadius = "5px"
emm.style.border = "1px solid black"


wor.style.height = "35px"
wor.style.width = "60%"
wor.style.marginBottom = "3%"
wor.style.borderRadius = "5px"
wor.style.border = "1px solid black"

showw.style.border = "none"
showw.style.marginLeft = "-7%"
showw.style.backgroundColor = "white"

log.style.height = "35px"
log.style.width = "61%"
log.style.borderRadius = "5px"
log.style.border = "1px solid black"
log.style.color = "white"
log.style.backgroundColor = "orange"