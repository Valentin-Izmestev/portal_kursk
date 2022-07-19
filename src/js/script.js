@@include('choices.min.js'); 
"use scrict";

const arCastomSelect = document.querySelectorAll('.castom-select');

arCastomSelect.forEach(select=>{
    choices = new Choices(select, {
        searchEnabled: false,
        itemSelectText: ''
    });
});
 

