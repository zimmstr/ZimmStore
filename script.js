window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none"

},3000)

})


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



let imgs=document.querySelectorAll(".zoom")
let modal=document.getElementById("imgModal")
let modalImg=document.getElementById("modalImg")

imgs.forEach(img=>{

img.onclick=()=>{

modal.style.display="flex"
modalImg.src=img.src

}

})

modal.onclick=()=>{
modal.style.display="none"
}



let buys=document.querySelectorAll(".buy")
let buyer=document.getElementById("buyer")
let count=20

buys.forEach(btn=>{

btn.onclick=()=>{

count++
buyer.innerHTML=count+"+<br>Pembeli"

}

})