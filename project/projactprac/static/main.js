const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 3000;

let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(ture);
const lastClone = slides[slides.length - 1].cloneNode(ture);

firstClone.id = 'first-clone';
lastClone.id = 'last=clone';

slide.append(firstClone);
slide.prepend(lastClone);

const SlideWidth = slide[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

console.log(slides);
