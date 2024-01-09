// Navigation
// Når der bliver scrollet, gå til funktionen showBG
window.addEventListener("scroll", showBg);

// Headeren får en baggrundsfarve
function showBg() {
    console.log(showBg);
    document.querySelector("header").classList.add("bg_color");
}

// Illustrationer (class="aktiv") vises, når man scroller på skærmen
window.addEventListener("scroll", reveal);
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("aktiv");
      } else {
        reveals[i].classList.remove("aktiv");
      }
    }
}

// Illustrationer (class="aktiv") vises, når man scroller på skærmen
window.addEventListener("scroll", reveal2);
function reveal2() {
    var reveals = document.querySelectorAll(".reveal2");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("aktiv2");
      } else {
        reveals[i].classList.remove("aktiv2");
      }
    }
}