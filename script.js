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

// Badge otomatis TERMAHAL & TERMURAH
let allCards = document.querySelectorAll(".card");
let prices = [];

// Ambil semua harga
allCards.forEach(card => {
  let priceText = card.querySelector("p").innerText.replace(/[^0-9]/g,"");
  let price = parseInt(priceText);
  prices.push({card, price});
});

// Cari harga tertinggi & terendah
let maxPrice = Math.max(...prices.map(p=>p.price));
let minPrice = Math.min(...prices.map(p=>p.price));

// Hapus badge lama jika ada
allCards.forEach(card => {
  let existing = card.querySelector(".badge");
  if(existing) existing.remove();
});

// Tambahkan badge sesuai harga
prices.forEach(p=>{
  let badge = document.createElement("span");
  badge.classList.add("badge");
  if(p.price === maxPrice){
    badge.classList.add("mahal");
    badge.innerText = "TERMAHAL";
  } else if(p.price === minPrice){
    badge.classList.add("murah");
    badge.innerText = "TERMURAH";
  } else {
    return; // selain termahal/termurah tidak perlu badge
  }
  p.card.appendChild(badge);
});