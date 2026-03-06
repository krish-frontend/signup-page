
console.log("hello")

let firstbutton=document.getElementById("btn")
console.log(firstbutton.innerHTML)


let intro=document.getElementsByClassName("intro")
console.log(introuduction[2].innerText)

let value =document.querySelectorAll(".intro")
console.log(value)

value[2].innerHTML="hi skillians"
console/log(value[2].innerHTML)
let firstbutton=document.getElementById("btn");
firstbutton.addEventListener("click",()=>{
    value.forEach((el)=>{
        el.innerHTML="<strong>my name is krish"
        el.style.color="skyblue"
        el.style.backgroundcolor="black"
    })
})