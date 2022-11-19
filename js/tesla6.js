const charging = document.querySelector('.charging');
const back = document.querySelector('.back');
const rectanglebox = document.querySelector('.rectangles-box');

const vehicle = document.querySelector('.vehicle');
const back1 = document.querySelector('.back1');
const rectanglebox1 = document.querySelector('.rectangles-box1');

const apparel = document.querySelector('.apparel');
const back2 = document.querySelector('.back2');
const rectanglebox2 = document.querySelector('.rectangles-box2');

const life = document.querySelector('.life');
const back3 = document.querySelector('.back3');
const rectanglebox3 = document.querySelector('.rectangles-box3');

charging.addEventListener('click',() =>{
  rectanglebox.classList.add('active');
  back.classList.add('active');
});

back.addEventListener('click', () =>{
  rectanglebox.classList.remove('active');
  back.classList.remove('active');
});

vehicle.addEventListener('click',() =>{
  rectanglebox1.classList.add('active');
  back1.classList.add('active');
});

back1.addEventListener('click', () =>{
  rectanglebox1.classList.remove('active');
  back1.classList.remove('active');
});

apparel.addEventListener('click',() =>{
  rectanglebox2.classList.add('active');
  back2.classList.add('active');
});

back2.addEventListener('click', () =>{
  rectanglebox2.classList.remove('active');
  back2.classList.remove('active');
});

life.addEventListener('click',() =>{
  rectanglebox3.classList.add('active');
  back3.classList.add('active');
});

back3.addEventListener('click', () =>{
  rectanglebox3.classList.remove('active');
  back3.classList.remove('active');
});