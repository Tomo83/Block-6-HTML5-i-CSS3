$(document).ready(function () {
    /*slider*/
    var slideIndex = 0;
    slider();

    function slider() {
        var i;
        var slide = document.getElementsByClassName('slide');

        for (i = 0; i < slide.length; i++) {
            slide[i].style.display = 'none';
        }

        slideIndex++;
        if (slideIndex > slide.length) {
            slideIndex = 1;
        }
        slide[slideIndex - 1].style.display = 'block';
        setTimeout(slider, 6000);
    }

    /*side menu*/
    $('.fa').click(function () {
        $('.side-menu').toggleClass('active');
        $('i.fa').toggleClass('fa-bars').toggleClass('fa-times');
        open = false;
    });

});