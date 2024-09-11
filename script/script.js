if (window.innerWidth > 1223) {

const clickTarget = document.querySelector(".skill_cont h4")
const skills = document.querySelector(".qualities")
const header = document.querySelector(".header")
let stylesheet = document.querySelector("link")
const switchButton = document.createElement("ion-icon")
const photo = document.createElement("img")

// CREATION BUTTON SWITCH LIGH/DARK

switchButton.setAttribute("name", "contrast-outline")
switchButton.setAttribute("class", "visual_mode")
header.append(switchButton)


//CREATION PHOTO DESKTOP MODE
photo.setAttribute("src", "https://picsum.photos/75/75")
photo.setAttribute("style", "border-radius: 50%")
photo.setAttribute("alt", "photo de profil")
header.prepend(photo)

// AJOUT FUNCTION ONCLICK DARK/LIGHT MODE
const visualMode = document.querySelector(".visual_mode")

visualMode.addEventListener("click", function(e){
    if(stylesheet.getAttribute("href") === "style/style.css"){
        stylesheet.setAttribute("href", "style/dark.css")
    }
    else{
        stylesheet.setAttribute("href", "style/style.css")
    }
})

visualMode.addEventListener("mouseover", function(e){
    visualMode.setAttribute("style", "cursor: pointer")
}
)


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



}
