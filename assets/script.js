const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
"use strict";
const bannerSection = document.getElementById('banner');
let slideNumber = 0;
const createElements = () => {
	const nbItems = slides.length
	let dotContent = '<ul class="dots">';
	let bannerText = '<p>';
	let bannerImg = `<img class="banner-img" src="./assets/images/slideshow/${slides[slideNumber].image}" alt="image">`;
	for(let i=0 ;i<nbItems;i++){
		 dotContent += `<li class="dot${i === 0 ? ' dot_selected' : ''}"></li>`;	
	}
	bannerText += slides[slideNumber].tagLine;
	bannerText += '</p>';
	dotContent += "</ul>";
	bannerSection.insertAdjacentHTML("beforeend", dotContent);
	bannerSection.insertAdjacentHTML("beforeend", bannerImg);
	bannerSection.insertAdjacentHTML("beforeend", bannerText);
}
createElements();
const bannerImg = bannerSection.querySelector('.banner-img');
const bannerTxt = bannerSection.querySelector('p');

const displaySlider = (slideNumber) => {
	bannerTxt.innerHTML = slides[slideNumber].tagLine;
	bannerImg.src = `./assets/images/slideshow/${slides[slideNumber].image}`;
}


const right_Arrow = document.querySelector(".arrow_right")
const left_Arrow = document.querySelector(".arrow_left")

right_Arrow.addEventListener("click", () => {
    document.querySelector('.dot_selected').classList.remove('dot_selected');  
    slideNumber = (slideNumber + 1) % slides.length;
    document.querySelectorAll('.dot')[slideNumber].classList.add('dot_selected'); 
    displaySlider(slideNumber);
});

  left_Arrow.addEventListener("click", () =>{
	document.querySelector('.dot_selected').classList.remove('dot_selected');  
    slideNumber = (slideNumber - 1 + slides.length) % slides.length;
    document.querySelectorAll('.dot')[slideNumber].classList.add('dot_selected'); 
    displaySlider(slideNumber);
})

