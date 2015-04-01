function parallax(){
 var section = document.getElementById('parallax1');
 
 section.style.top = -(window.pageYOffset / 10)+'px';
}
window.addEventListener("scroll", parallax, false);