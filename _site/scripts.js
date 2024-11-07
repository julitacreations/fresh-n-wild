// A $( document ).ready() block.
$( document ).ready(function() {
    
    $('.hamburger-button').click(function(){
        $('.mobile-menu').slideToggle();
        $(this).toggleClass('active');
      });

     // Show and hide menu
    $('.menu-reveal').click(function() {
        // Get the menu ID from the clicked button's data-menu attribute
        const menuId = $(this).data('menu');
        
        // Hide the selected menu
        $('.menu-content').hide();
        
        // Show the selected menu
        $('#' + menuId).show();
      });  

      
       // Accordion
    $('.accordion-header').click(function(){
      // Toggle visibility of the content when the header is clicked
      $(this).next('.accordion-content').slideToggle();
      // Toggle active class to highlight active section
      $(this).toggleClass('active');
      // Toggle the + and - buttons
      $(this).find('::after').html($(this).hasClass('active') ? '-' : '+');
      // Hide other content when a new section is opened
      $('.accordion-content').not($(this).next('.accordion-content')).slideUp();
      // Remove active class from other headers
      $('.accordion-header').not(this).removeClass('active');
      // Reset the + and - signs on other headers
      $('.accordion-header').not(this).find('::after').html('+');
    });


});