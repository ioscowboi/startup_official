function parallax(){
 var section = document.getElementById('parallax1');
 
 var section2 = document.getElementById('parallax2');
 
 var section3 = document.getElementById('parallax-transparent');
 
 section.style.top = (window.pageYOffset * 2)+'px';
 
 section2.style.top = -(window.pageYOffset / 6)+'px';
 
 section3.style.top = -(window.pageYOffset / 6)+'px';
 
}
window.addEventListener("scroll", parallax, false);

  parallax();
