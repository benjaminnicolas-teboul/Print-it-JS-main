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
const right_Arrow = document.querySelector(".arrow_right")
const left_Arrow = document.querySelector(".arrow_left")

const createElements = () => {
	const nbItems = slides.length
	let dotContent = '<ul class="dots">';
	let bannerText = '<p>';
	let bannerImg = `<img class="banner-img">`;
	for(let i=0 ;i<nbItems;i++){
		 dotContent += `<li data-id=${i} class="dot"></li>`;	
	}
	bannerText += '</p>';
	dotContent += "</ul>";
	bannerSection.insertAdjacentHTML("beforeend", dotContent);
	bannerSection.insertAdjacentHTML("beforeend", bannerImg);
	bannerSection.insertAdjacentHTML("beforeend", bannerText);
}
createElements();

const displaySlider = (slideNumber) => {
	const bannerImg = bannerSection.querySelector('.banner-img');
	const bannerTxt = bannerSection.querySelector('p');
	const dots = bannerSection.querySelectorAll('.dots li');
	bannerTxt.innerHTML = slides[slideNumber].tagLine;
	bannerImg.src = `./assets/images/slideshow/${slides[slideNumber].image}`;
	bannerImg.alt = `${slides[slideNumber].tagLine}`;
	dots.forEach((dot,index) => {
		if(index === Number(slideNumber)){
			dot.classList.add('dot_selected');
		}
		else{
			dot.classList.remove('dot_selected'); 
		}
	});
}
displaySlider(slideNumber);
right_Arrow.addEventListener("click", () => {    
    slideNumber = (slideNumber + 1) % slides.length;
    displaySlider(slideNumber);
});

  left_Arrow.addEventListener("click", () =>{
    slideNumber = (slideNumber - 1 + slides.length) % slides.length;
    displaySlider(slideNumber);
})

const dots = bannerSection.querySelectorAll('.dots li')

for (let dot of dots) {
	dot.addEventListener('click',(event) => {
		const slideId = event.target.dataset.id;
		displaySlider(slideId);	
	})
}