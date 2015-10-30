var hamburger=document.getElementById("hamburger");
var navigatie=document.getElementById("navigatie");

function klik() {
        var maxHoogte = "auto";
        if (navigatie.style.height==maxHoogte){
            navigatie.style.height="0";
        }
        else {
            navigatie.style.height=maxHoogte;
        }
}

hamburger.addEventListener('click', klik);

var nextStep = document.querySelector('#project');
var nextStep2 = document.querySelector('#stage');
var project = document.querySelector('#knop');
var stage = document.querySelector('#knop1');

nextStep.classList.add('is-visible');
nextStep2.classList.add('is-visible');

function toggle() {
    if (this == project) {
        nextStep.classList.remove('is-visible');
        nextStep2.classList.add('is-visible');
    }
    else if (this == stage) {
        nextStep2.classList.remove('is-visible');
        nextStep.classList.add('is-visible');
    }
}

project.addEventListener('click', toggle);
stage.addEventListener('click', toggle);

console.log('hoi');
