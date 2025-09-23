let grabb = document.querySelector("#name")
let em = document.querySelector("#email")
let pass = document.querySelector("#password")
let hi = document.querySelector("#hide")
let but = document.querySelector("#butt")
let fo = document.querySelector("#form")
let crate = document.querySelector("#create")


hi.addEventListener("click", (event)=>{
    event.preventDefault()

    if(pass.type === "password"){
        hi.textContent = "🙈"
        pass.type = "text"
    } else {
        hi.textContent = "👁️"
        pass.type = "password"
    }
})

fo.addEventListener("submit", (event)=>{
    event.preventDefault()
})

but.addEventListener("click", ()=>{
    let isValid = true
//     [grabb, em, pass].forEach(input => {
//     input.style.border = "1px solid #ddd"
// })

// check each field
if(!grabb.value.trim() || grabb.value.length < 8){
    grabb.style.border = "1px solid red"
    isValid = false
} else {
    grabb.style.border = "1px solid green"
}
if(!em.value.trim() || !em.value.includes("@") || !em.value.includes(".com") || !em.value.length > 8){
    em.style.border = "1px solid red"
    isValid = false
} else {
    em.style.border = "1px solid green"
}
if(!pass.value.trim() || pass.value.length < 8){
    pass.style.border = "1px solid red"
    isValid = false
} else {
    pass.style.border = "1px solid green"
}

if(isValid){
    alert("form fill successful")
    window.location.href = "proj.html"
}
})

crate.style.marginBottom = "6%"


grabb.style.height = "35px"
grabb.style.width = "60%"
grabb.style.marginBottom = "3%"
grabb.style.borderRadius = "5px"
grabb.style.border = "1px solid black"

em.style.height = "35px"
em.style.width = "60%"
em.style.marginBottom = "3%"
em.style.borderRadius = "5px"
em.style.border = "1px solid black"

pass.style.height = "35px"
pass.style.width = "60%"
pass.style.marginBottom = "3%"
pass.style.borderRadius = "5px"
pass.style.border = "1px solid black"

hi.style.border = "none"
hi.style.marginLeft = "-7%"
hi.style.backgroundColor = "white"

but.style.height = "35px"
but.style.width = "61%"
but.style.borderRadius = "5px"
but.style.border = "1px solid black"
but.style.color = "white"
but.style.backgroundColor = "orange"