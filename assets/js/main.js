$(document).ready(function() {
    $('.product_slider').slick({
      infinite: true,
      autoplay: false,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: ".p_prev_btn",
      nextArrow: ".p_next_btn",
      responsive: [
        {
          breakpoint: 992,
          settings:{
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings:{
            slidesToShow: 2,
          }
        }
      ]
  });
  $('.selling_slider').slick({
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: ".t_prev_btn",
    nextArrow: ".t_next_btn",
    responsive: [
      {
        breakpoint: 992,
        settings:{
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow: 2,
        }
      }
    ]
  });
  $('.recommended_slider').slick({
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: ".r_prev_btn",
    nextArrow: ".r_next_btn",
    responsive: [
      {
        breakpoint: 992,
        settings:{
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow: 2,
        }
      }
    ]
  });
  $('.logo_slider').slick({
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings:{
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings:{
          slidesToShow: 2,
        }
      }
    ]
  });
/*   $('.counter_no').counterUp({
    delay: 20,
    time: 3000,
  });
 */
  AOS.init({
    offset: 130,
    duration: 2000,
  });
  $('select').niceSelect();
});
/*--------------- Bootstrap tooltip ---------------*/

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/*--------------- Timer_function ---------------*/
const timer = () =>{
  const data = document.querySelectorAll('.timer');
  data.forEach(e => {
      const date = new Date(e.dataset['countdown']);
      const date_difference = date - new Date();
      if (date_difference > 0) {
          const days = Math.floor(date_difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((date_difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((date_difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((date_difference % (1000 * 60)) / 1000);
          const daysElement = e.querySelector('.day');
          const hoursElement = e.querySelector('.hour');
          const minutesElement = e.querySelector('.min');
          const secondsElement = e.querySelector('.sec');

          daysElement.textContent = days < 10 ? '0' + days : days;
          hoursElement.textContent = hours < 10 ? '0' + hours : hours;
          minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;
          secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;
      }
  });
}
setInterval(timer, 1000);
/*--------------- Timer_End ---------------*/

window.addEventListener('scroll', function () {
  const navSticky = document.querySelector('.last_header');
  if (window.scrollY >= 650) {
      navSticky.classList.add('nav_sticky');
  } else {
      navSticky.classList.remove('nav_sticky');
  }
});
/* ------------------ Mobile sticky Nav ------------------------ */
window.addEventListener('scroll', function () {
  const navSticky = document.querySelector('.mid_header');
  if (window.scrollY >= 650) {
      navSticky.classList.add('mobile_sticky');
  } else {
      navSticky.classList.remove('mobile_sticky');
  }
});

/*--------------- Responsive Navbar function ---------------*/
function toggleMenu() {
  const toggleIcon = document.querySelector('.toggle-icon');
  const offcanvas = document.querySelector('.offcanvas-start');
  if(offcanvas.classList.contains('showing')){
    toggleIcon.classList.add('active');
  }
  else{
    toggleIcon.classList.remove('active');
  }
}

/*--------------- products price and Quantity controls ---------------*/
const product_quantity = () =>{
  const plus_btn = document.querySelectorAll('.plus');
  const minus_btn = document.querySelectorAll('.minus');
  
  plus_btn.forEach(e => {
    e.addEventListener('click', () =>{
      let piece = e.parentNode.querySelector('.piece');
      let qty = parseInt(piece.innerText) + 1;
      piece.innerText = qty;
    });
  }); 

  minus_btn.forEach(e => {
    e.addEventListener('click', () =>{
      let piece = e.parentNode.querySelector('.piece');
      if(parseInt(piece.innerText) > 0){
        let qty = parseInt(piece.innerText) - 1;
        piece.innerText = qty;
      }
    });
  }); 
}
product_quantity();

/*--------------- Product picture change Function ---------------*/
const product_img = document.querySelectorAll('.product_detail_img');
product_img.forEach(e => {
  e.addEventListener('click', () =>{
    let big_img = document.querySelector('.bg_img');
    big_img.src = e.src;
  })
});

/*--------------- filter sidebar Function ---------------*/
const product_sidebar = () => {
  let mobile_sidebar = document.querySelector('.mobile_sidebar');
  mobile_sidebar.classList.toggle('sidebar_active');
};

const filter_btn = document.querySelector('.fa-filter');

// Add a click event listener to the filter button
filter_btn.addEventListener('click', (event) => {
  // Prevent the click event from propagating to the document
  event.stopPropagation();
  product_sidebar();
});

// Add a click event listener to the document
document.addEventListener('click', (event) => {
  let mobile_sidebar = document.querySelector('.mobile_sidebar');
  // Check if the click target is not the filter button and not inside the sidebar
  if (!filter_btn.contains(event.target) && !mobile_sidebar.contains(event.target)) {
    mobile_sidebar.classList.remove('sidebar_active');
  }
});
