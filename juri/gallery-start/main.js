var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');
var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

for (var i = 1; i<5; i++) {
var newImage = document.createElement('img');
newImage.setAttribute('src', i);
thumbBar.appendChild(newImage);
newImage.onclick = function () {
  displayedImage.src =
 };


  btn.onclick = function() {
   if (btn === "dark") {
   btn.setAttribute('class', 'light');
   btn.textContent = "Cветлее";
   overlay.style.backgroundColor = "rgba (0,0,0,0.5)";
   } else {
   btn.setAttribute('class', 'dark');
   btn.textContent = "Темнее";
   overlay.style.backgroundColor = "rgba (0,0,0,0)";
  }
};

