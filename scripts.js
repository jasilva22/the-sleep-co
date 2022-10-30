$( document ).ready(function() {
    
    $(".hamburger-button").click(function(){

        $(this).toggleClass('active');
        $(".mobile-menu").fadeToggle();
    })

    //inititalize animate on scroll
    AOS.init({
        duration: 500 //values from 0 to 3000, with steps 50ms
    });

});

lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false,
    escKey: true
  });

lightGallery(document.getElementById('lightgallery-2'), {
    speed: 500,
    download: false,
    escKey: true
  });