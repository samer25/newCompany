// MOBILE FRIENDLY NAVIGATION BAR
function switchClass(i) {
    const lis = $('#hero-box > div');
    lis.eq(i).removeClass('hero_header_on');
    lis.eq(i).removeClass('hero_header_out');
    lis.eq(i = ++i % lis.length).addClass('hero_header_on');
    lis.eq(i = ++i % lis.length).addClass('hero_header_out');
    setTimeout(function () {
        switchClass(i);
    }, 3500);
}

switchClass(-1);

// Project image effects
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $('.project img').animate({height: '100%'}, 1000);
    }
     if ($(window).scrollTop() >= 1600) {
        $('.service').animate({marginLeft: '0'}, 1000);
    }
});


// slider effect testimonial
// let slideIndex = 0;
// showSlides();
// function showSlides() {
//     let i;
//     const slides = document.getElementsByClassName("mySlides");
//     const dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {
//         slideIndex = 1
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//     setTimeout(showSlides, 8000); // Change image every 2 seconds
// }