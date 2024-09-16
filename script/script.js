document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 1223) {ctor("#qualities_title");
    const technosTarget = document.querySelector("#technos_title");
    const skills = document.querySelector(".qualities");
    const technos = document.querySelector(".technos");
    const body = document.getElementsByTagName("body");

    // AJOUT FUNCTION ONCLICK DARK/LIGHT MODE
    const visualMode = document.querySelector(".visual_mode");

    visualMode.addEventListener("click", function (e) {
      body[0].classList.toggle("light_mode");
    });

    visualMode.addEventListener("mouseover", function (e) {
      visualMode.setAttribute("style", "cursor: pointer");
    });

    console.log();
    

    // Extend qualities / technos

    clickTarget.addEventListener("click", function (e) {
      if (skills.id === "qualities")
        document.getElementById("qualities").id = "qualities_show";
      else document.getElementById("qualities_show").id = "qualities";
    }),
      technosTarget.addEventListener("click", function (e) {
        if (technos.id === "technos")
          document.getElementById("technos").id = "technos_show";
        else document.getElementById("technos_show").id = "technos";
      }),
      clickTarget.addEventListener("mouseover", function (e) {
        clickTarget.setAttribute("style", "cursor: pointer");
      });

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
  } else {
    window.addEventListener("resize", (e) => {
      location.reload();
    });
  }
});
