var clickTarget = document.querySelector(".skill_cont h2");
var skills = document.querySelector(".skills")

console.log(clickTarget)

clickTarget.addEventListener("click", function(e){
    if (skills.id === "skills")(
        document.getElementById("skills").id="skills_show",
        console.log(skills.id)
    )
    else(
        document.getElementById("skills_show").id="skills"
    )
}

);

