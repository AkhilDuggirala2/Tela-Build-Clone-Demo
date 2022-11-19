const headermenu = document.querySelector('.header-menu');
const cross = document.querySelector('.fa-xmark');
const blur = document.querySelector('.blur-1');
const slide = document.querySelector('.hdn-slide-1');

headermenu.addEventListener('click' ,() => {
  blur.classList.add('active');
  slide.classList.add('active');
})
cross.addEventListener('click' ,() => {
  blur.classList.remove('active');
  slide.classList.remove('active');
})




const leftbtn = document.querySelector(".l-btn");
const rightbtn = document.querySelector(".r-btn");

rightbtn.addEventListener("click", function (event) {
  console.log("done");
  const conent = document.querySelector(".product-shop");
  conent.scrollLeft += 1100;
  event.preventDefault();
});

leftbtn.addEventListener("click", function (event) {
  console.log("done");
  const conent = document.querySelector(".product-shop");
  conent.scrollLeft -= 1100;
  event.preventDefault();
});


