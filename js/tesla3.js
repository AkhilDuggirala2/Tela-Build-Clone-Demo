const menu = document.querySelector('#menu');
const cross = document.querySelector('.fa-xmark');
const blur = document.querySelector('.blur');
const slide = document.querySelector('.hdn-slide');

menu.addEventListener('click' ,() => {
  blur.classList.add('active');
  slide.classList.add('active');
})
cross.addEventListener('click' ,() => {
  blur.classList.remove('active');
  slide.classList.remove('active');
})