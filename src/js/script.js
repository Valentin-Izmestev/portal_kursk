@@include('choices.min.js'); 
"use scrict";

const arCastomSelect = document.querySelectorAll('.castom-select');

arCastomSelect.forEach(select=>{
    choices = new Choices(select, {
        searchEnabled: false,
        itemSelectText: ''
    });
});
 

let haron = document.querySelector('.haron');
let haronGoTopBtn = document.querySelector('.haron__go-top');
let haronGoBottomBtn = document.querySelector('.haron__go-bottom');
let header = document.querySelector('header.header');
let footer = document.querySelector('footer.footer');



haronGoTopBtn.addEventListener('click', function(){
    window.scrollBy({
        top: header.getBoundingClientRect().top,
        behavior: 'smooth'
      });
});
haronGoBottomBtn.addEventListener('click', function(){
    window.scrollBy({
        top: footer.getBoundingClientRect().top,
        behavior: 'smooth'
      });
});
document.addEventListener('scroll', ()=>{
   console.log( );
   if(document.documentElement.scrollTop > 145){
    haron.classList.add('haron--show');
   }else{
    if(haron.classList.contains('haron--show')){
        haron.classList.remove('haron--show');
    }
   }
})
 
 