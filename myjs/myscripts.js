let slideIndex = 0;
showSlides();

function showSlides() {
  let i;

  let slides = document.getElementsByClassName("mySlides");

    let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 8000); // Change image every 2 seconds
}

function showStuff() {
  //alert('shilpu');
  var x = document.getElementById("mobile-menu-bar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function hidestuff() {
  //alert('shilpu');
  var x = document.getElementById("mobile-menu-bar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}