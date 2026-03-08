window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none"

},5000)

})


const darkToggle=document.getElementById("darkToggle")

darkToggle.onclick=()=>{
document.body.classList.toggle("light")
}



let faqBtn=document.querySelectorAll(".faqBtn")

faqBtn.forEach(btn=>{

btn.onclick=()=>{

let text=btn.nextElementSibling

text.style.display=
text.style.display==="block"
?"none":"block"

}

})



let topBtn=document.getElementById("topBtn")

window.onscroll=()=>{

if(document.documentElement.scrollTop>200){
topBtn.style.display="block"
}else{
topBtn.style.display="none"
}

}

topBtn.onclick=()=>{
window.scrollTo({top:0,behavior:"smooth"})
}