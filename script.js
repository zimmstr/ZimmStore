window.addEventListener("load",()=>{
document.getElementById("loader").style.display="none"
})

const search=document.getElementById("search")

search.addEventListener("keyup",function(){

let filter=search.value.toLowerCase()
let cards=document.querySelectorAll(".card")

cards.forEach(card=>{
let text=card.innerText.toLowerCase()

card.style.display=text.includes(filter)?"block":"none"
})

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