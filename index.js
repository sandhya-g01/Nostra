// pop-up
let popup = document.getElementById("pop-up")
let topclose = document.getElementById("topclose")
topclose.addEventListener("click", ()=> {
    popup.style.display="none"
})


// menu bar
let menuicon = document.getElementById("menuicon")
let sidebar = document.getElementById("sidebar")
let close = document.getElementById("close")
menuicon.addEventListener("click", ()=> {
    sidebar.style.right=0
})

close.addEventListener("click", ()=> {
    sidebar.style.right="-40%"
})


// right arrow
const slider = document.getElementById("slider")
const next = document.getElementById("next")
const prev = document.getElementById("prev")

let currentSlide=0
const totalSlides = slider.children.length

function goToSlide(index){
    slider.style.transform=`translateX(-${index * 100}%)`
}

next.addEventListener("click", () =>{
    currentSlide = (currentSlide + 1) % totalSlides
    goToSlide(currentSlide)
})

prev.addEventListener("click", () =>{
    currentSlide = (currentSlide - 1 + totalSlides)%totalSlides
    goToSlide(currentSlide)
})