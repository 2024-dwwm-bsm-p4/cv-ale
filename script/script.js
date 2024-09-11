if (window.innerWidth > 1223) {

const clickTarget = document.querySelector(".skill_cont h4")
const skills = document.querySelector(".qualities")
const header = document.querySelector(".header")
const switchButton = document.createElement("ion-icon")
const photo = document.createElement("img")
let title = document.querySelectorAll("h1, h2, h3, h4, header li, header ion-icon")
let text = document.querySelectorAll("p, main li")
let container = document.querySelectorAll("header, .skill_cont")
let main = document.querySelectorAll("main, .right_side hr")

console.log(main);



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

let mode = "dark"

visualMode.addEventListener("click", function(e){
    if(mode === "dark"){

        for (let i = 0; i < title.length; i++) {
            title[i].classList.add("title_dark_mode")
        }

        for (let j = 0; j < text.length; j++) {
            text[j].classList.add("text_dark_mode")
        }

        for (let k = 0; k < container.length; k++) {
            container[k].classList.add("container_dark_mode");
        }

        for (let i = 0; i < main.length; i++) {
            main[i].classList.add("bg_dark_mode")
        }

        
        switchButton.classList.add("title_dark_mode")
       

        mode = "light"
    }
    else{
        for (let i = 0; i < title.length; i++) {
            title[i].classList.remove("title_dark_mode")
        }

        for (let j = 0; j < text.length; j++) {
            text[j].classList.remove("text_dark_mode")
        }

        for (let k = 0; k < container.length; k++) {
            container[k].classList.remove("container_dark_mode");
        }

        for (let i = 0; i < main.length; i++) {
            main[i].classList.remove("bg_dark_mode")
        }

        switchButton.classList.remove("title_dark_mode")

        mode = "dark"
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
