// inserting rivews data informations
var slider = document.querySelector(".slider");
for (let i = 0; i < data.length; i++) {
    slider.innerHTML += `<div class="slide">
    <div class="imgdiv">
        <img class="prop" src="chat (2).png" alt="">
        <img class="pic" src="${data[i].imageurl}" alt="">
    </div>
    <h3>${data[i].name}</h3>
    <h4>${data[i].skill}</h4>
    <p>${data[i].message}</p>
</div>`
    
}



// slider logic goes here 

var slides = document.querySelectorAll(".slide");

slides.forEach((slide , index)=>{
    slide.style.left = `${index * 100}%`;
})

var countr = 0;

function sliderslide(){
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(${countr * -100}%)`
    })
}

function prev(){
    if(countr !== 0){
        countr--;
    sliderslide()
    }
}
function next(){
    if(countr !== slides.length-1){
        countr++;
    sliderslide()
    } 
}

