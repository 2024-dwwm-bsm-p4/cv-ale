document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 1223) {
    

    const clickTarget = document.querySelector("#qualitiesTitle");
    const technosTarget = document.querySelector("#technosTitle");
    const skills = document.querySelector(".qualities");
    const technos = document.querySelector(".technos");
    const body = document.getElementsByTagName("body");
    const scrollArrow = document.querySelector(".scroll-button");

    if (localStorage.getItem('mode') !== "dark") {
      body[0].classList.remove("dark-mode")
      body[0].classList.add("light-mode")
    }else{
      body[0].classList.add("dark-mode")
      body[0].classList.remove("light-mode")
    }

    // AJOUT FUNCTION ONCLICK DARK/LIGHT MODE
    const visualMode = document.querySelector(".visual-mode");

    visualMode.addEventListener("click", function (e) {
        body[0].classList.toggle("light-mode");
        body[0].classList.toggle("anim-night");

        if (localStorage.getItem('mode')=== "dark") {
          localStorage.setItem("mode", 'light')
        }else{
          localStorage.setItem("mode", 'dark')
        }

        console.log(localStorage);
        

    });

    visualMode.addEventListener("mouseover", function (e) {
      visualMode.setAttribute("style", "cursor: pointer");
    });
    
    // Extend qualities / technos

    clickTarget.addEventListener("click", function (e) {
      skills.classList.toggle("qualities-show")
    }),


    technosTarget.addEventListener("click", function (e) {
      technos.classList.toggle("technos-show")
    })

    const smoothScroll = () => {
      const main = document.getElementById("main");
      main.scrollIntoView({
        block: 'start',
        behavior: "smooth"
      })
    }

    scrollArrow.addEventListener("click", (e) => {
      smoothScroll()
    })
    

    // Use Intersection Observer to determine if objects are within the viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          return;
        }
        entry.target.classList.remove("in-view");
      });
    });

    // Get all the elements with the .animate class applied
    const allAnimatedElements = document.querySelectorAll(".animate");

    // Add the observer to each of those elements
    allAnimatedElements.forEach((element) => observer.observe(element));

    particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }
});
