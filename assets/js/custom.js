$(document).ready(function(){
    // sticky header
      $(window).scroll(function(){
        if($(document).scrollTop() < 1){
            $('.header-area').removeClass('active-man');
        }
         else if($(document).scrollTop() > 300){
            $('.header-area').addClass('active-man');
        }
         else{
            $('.header-area').addClass('fixed');
        }
      });  
    // menu
    $('.menu-icon').click(function(){
        $('.menu-items').slideToggle();
         return false;
    });
    // apps carousel
    $('.apps-carousel').owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
    // mixitup 
    var gallary = document.querySelector('.item-list'); 
    var mixer = mixitup(gallary, {
        load: {
           filter: '.all'
       }
    });
   // magnific popup
   $('.item-list').magnificPopup({
    delegate: 'a', 
    type: 'image',
    
    gallery:{
        enabled:true
    }
    
  });
});

// pricing table
const toggler = document.querySelector('.toggle-check');
const proPrice = document.getElementById('pro-price');
const proYear = document.getElementById('yearly');

toggler.addEventListener("change", () => {
    if(toggler.checked){
        proPrice.innerHTML = '$199';
        proYear.innerHTML = 'Per Year';
    }
    else{
        proPrice.innerHTML = '$9';
        proYear.innerHTML = 'Per Month';
    }
});