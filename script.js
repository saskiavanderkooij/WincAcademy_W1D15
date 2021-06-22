var button = document.querySelector('#mybutton');

//opdracht 1
button.addEventListener('click', function () {
    alert("button clicked");
}, false);

//opdracht 2
//var secondButton = document.querySelector('#mysecondbutton');
//var mybody = document.body;
//secondButton.addEventListener('click', function () {
//    mybody.classList.add("red-background"); 
//}, false);

//opdracht 3
var secondButton = document.querySelector('#mysecondbutton');
var toggleBody = document.body;
secondButton.addEventListener('click', function () {
    toggleColor(toggleBody);
}, false);

function toggleColor(toggleBody) {
    toggleBody.classList.toggle("red-background");   
}