const toggleButton = document.querySelector('.menu-toggler');
const mobileMenu = document.querySelector('.nav-menu');

const toggleMenu = () => mobileMenu.classList.toggle('hide');

toggleButton.addEventListener('click', toggleMenu)

const slideValue_1 = document.querySelector("#slidevalue_1");
const inputSlider_1 = document.querySelector("#inputvalue_1");
inputSlider_1.oninput = (()=>{
    let value_1 = inputSlider_1.value;
    slideValue_1.textContent = value_1;
    slideValue_1.style.left = (value_1/2) + "%";
    slideValue_1.classList.add("show");
});
inputSlider_1.onblur = (()=>{
    slideValue_1.classList.remove("show");
});


const slideValue_2 = document.querySelector("#slidevalue_2");
const inputSlider_2 = document.querySelector("#inputvalue_2");
inputSlider_2.oninput = (()=>{
    let value_2 = inputSlider_2.value;
    slideValue_2.textContent = value_2;
    slideValue_2.style.left = (value_2/2) + "%";
    slideValue_2.classList.add("show");
});
inputSlider_2.onblur = (()=>{
    slideValue_2.classList.remove("show");
});


const slideValue_3 = document.querySelector("#slidevalue_3");
const inputSlider_3 = document.querySelector("#inputvalue_3");
inputSlider_3.oninput = (()=>{
    let value_3 = inputSlider_3.value;
    slideValue_3.textContent = value_3;
    slideValue_3.style.left = (value_3/2) + "%";
    slideValue_3.classList.add("show");
});
inputSlider_3.onblur = (()=>{
    slideValue_3.classList.remove("show");
});