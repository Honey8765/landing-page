const toggleButton = document.querySelector('.menu-toggler');
const mobileMenu = document.querySelector('.nav-menu');
const toggleMenu = () => mobileMenu.classList.toggle('hide');
toggleButton.addEventListener('click', toggleMenu)


var word1 = ['Creativity', 'Passion', 'Art', 'Fans', 'Followers', 'Community']; 
var word2 = ['$$$', '$$$', '$$$', 'Patrons', 'Patrons', '$$$']; 

var t = setInterval(function() { 

  var randomNumber = Math.round( Math.random() * (word1.length-1) ); 

  $('#change_word_1').html( word1[ randomNumber ] ); 
  $('#change_word_2').html( word2[ randomNumber ] ); 
}, 500);






let res=50, int1=1, int2=1, int3=50;
const result = document.querySelector('#result');
const slideValue_1 = document.querySelector("#slidevalue_1");
const inputSlider_1 = document.querySelector("#inputvalue_1");
inputSlider_1.oninput = (()=>{
    let value_1 = inputSlider_1.value;
    slideValue_1.innerHTML = value_1 + ' k';
    res=res * value_1 / int1;
    result.innerHTML = '&#x20b9; ' + res;
    slideValue_1.classList.add("show");
    int1=value_1;
});
inputSlider_1.onblur = (()=>{
    slideValue_1.classList.remove("show");
});


const slideValue_2 = document.querySelector("#slidevalue_2");
const inputSlider_2 = document.querySelector("#inputvalue_2");
inputSlider_2.oninput = (()=>{
    let value_2 = inputSlider_2.value;
    slideValue_2.innerHTML = value_2 + ' %';
    res=res * value_2 / int2;
    result.innerHTML = '&#x20b9; ' + res;
    slideValue_2.classList.add("show");
    int2=value_2;
});
inputSlider_2.onblur = (()=>{
    slideValue_2.classList.remove("show");
});


const slideValue_3 = document.querySelector("#slidevalue_3");
const inputSlider_3 = document.querySelector("#inputvalue_3");
inputSlider_3.oninput = (()=>{
    let value_3 = inputSlider_3.value;
    slideValue_3.innerHTML = '&#x20b9; '  + value_3;
    res=res * value_3 / int3;
    result.innerHTML = '&#x20b9; ' + res;
    slideValue_3.classList.add("show");
    int3=value_3;
});
inputSlider_3.onblur = (()=>{
    slideValue_3.classList.remove("show");
});





