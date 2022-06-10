const menuBtn= document.querySelector('#menuBtn')
const nav= document.querySelector('#nav')
const navItem= document.querySelectorAll('#navItem')
var menuOpen= false;

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('navbar-open')
    navItem.forEach(item =>{
           item.classList.toggle('nav__item')
    })
   if(!menuOpen){
       menuBtn.classList.add('open')
        menuOpen= true
    }else{
       menuBtn.classList.remove('open')
       menuOpen= false
       }
})


window.addEventListener("scroll", function() {
    nav.classList.add("nav-bg", window.scrollY > 0)
  })
  
  if(window.scrollY > 0){
    nav.classList.add("nav-bg")
  }
  
if(screen.width > 768){
    navItem.forEach(item =>{
        item.classList.add('nav__item-pc')
    })
}
if(screen.width < 768){
    navItem.forEach(item =>{
        item.classList.remove('nav__item-pc')
    })
}

// FUNCION DEL HEADER

const headerText= document.querySelector('#headerTxt')
const letterBg= document.querySelector('#letterBg')

const secondPage= 'Escala Tu negocio'
const thirdPage= 'Reseñas'
const fourthPage= 'Contacto'

const changeHeader= (page, texto, claseFondo) =>{
    if(window.location.href.match(page)){
        headerText.innerText= texto
        letterBg.classList.add('common-bg')
        letterBg.classList.toggle(claseFondo)
        headerText.classList.add('common-title')
        headerText.classList.remove('maintext')
    }
    
}

changeHeader('escalatuneg', secondPage, 'letter-bg-2')
changeHeader('resen', thirdPage, 'letter-bg-3')
changeHeader('contacto', fourthPage, 'letter-bg-4')






//VALIDACION CAPTCHA 
if(location.pathname.match("contacto")){
const captchaImage= document.createElement('img')
const captchaImgContainer= document.querySelector('#imgContainer')

let randNum= Math.floor(Math.random() * (8 - 1) + 1);

let randomImage= () =>{
    captchaImage.src = `/imagenes/captcha/captcha${randNum}.png`
    captchaImgContainer.appendChild(captchaImage)
    captchaImage.classList.toggle('imgcaptcha')
}

randomImage()

}


// //TABLE
// const roiSem= document.querySelector('#roiSemana')
// const roiMes= document.querySelector('#roiMes')
// const roiAño= document.querySelector('#roiAño')

// const productForm= document.querySelector('#productForm')
// const budget= document.querySelector('#pBudget')

// if (budget){
//     roiSem.textContent= 12000;
//     roiMes.textContent=  40000;
//     roiAño.textContent=  490000;
    
// }