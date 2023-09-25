var btn = document.querySelector(".dropbtn")
var first = document.querySelector("#first_page")
var divsobre = document.querySelector("#sobre div")
var ritzell = document.querySelector(".ritzel")
var projetos = document.querySelector(".p")
var card = document.querySelectorAll(".front")
var cardBack = document.querySelectorAll(".back")
var seta = document.querySelector("#seta_home")
var imgSeta = document.querySelector(".img_seta")
var imgCode = document.querySelector(".all-projects")
var btnSnake = document.querySelector(".btn-play")
var social = document.querySelector(".social_title")
var curri = document.querySelector(".curriculo")
curri.className = `curriculo a031f5a96`
function colorChange(color){
    var select = document.getElementById(color)
    
    select.style.backgroundColor = "#"+btn.id
    select.id = btn.id
    btn.style.backgroundColor = "#"+color
    btn.id = color

    first.style.backgroundColor = "#"+color
    divsobre.style.backgroundColor = "#"+color
    ritzell.style.color = "#"+color
    projetos.style.backgroundColor = "#"+color
    card.forEach(element => {
        element.style.background = `linear-gradient(#000000, ${"#"+color})`
    });
    cardBack.forEach(element => {
        element.style.background = `linear-gradient(#000000, ${"#"+color})`
    });
    console.log(color)
    seta.style.boxShadow = `2px 4px 15px #` + color
    console.log(imgSeta)
    imgSeta.src = `img/${color}.png`

    imgCode.style.backgroundImage = `url(img/${color}1.png)`

    btnSnake.style.color = "#"+color

    social.style.backgroundColor = "#"+color

    curri.style.backgroundColor = "#"+color
    curri.className = `curriculo a${color}`
}