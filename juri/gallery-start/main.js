var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');
var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

var displayedImageHandler = function (e) {
  e.stopPropagation();
  displayedImage.src = e.target.src;
 }; 

document.querySelector('.thumb-bar-par').addEventListener('click',displayedImageHandler);

for (var i = 1; i<=5; i++) {
var newImage = document.createElement('img');
newImage.setAttribute('src','images/pic'+ i +'.jpg');
thumbBar.appendChild(newImage);
}

btn.onclick = function() {
   if (btn.getAttribute('class') === "dark") {
   btn.setAttribute('class', 'light');
   btn.textContent = "Cветлее";
   overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
   } else {
   btn.setAttribute('class', 'dark');
   btn.textContent = "Темнее";
   overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
};

