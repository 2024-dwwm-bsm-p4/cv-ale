if (window.innerWidth > 1223) {

const clickTarget = document.querySelector(".skill_cont h4")
const skills = document.querySelector(".qualities")
const header = document.querySelector(".header")


clickTarget.addEventListener("click", function(e){
    if (skills.id === "qualities")(
        document.getElementById("qualities").id="qualities_show"
    )
    else(
        document.getElementById("qualities_show").id="qualities"
    )
}
),

clickTarget.addEventListener("mouseover", function(e){
    clickTarget.setAttribute("style", "cursor: pointer")
}
)

const photo = document.createElement("img")
photo.setAttribute("src", "https://picsum.photos/200/200")
photo.setAttribute("style", "border-radius: 50%")
header.prepend(photo)

let headerContent = header.innerHTML

}
