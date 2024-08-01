  $(document).ready(function() {
    $('.foot').hide(); 

    $(window).on('scroll', function() {
      if ($(window).scrollTop() === 0) {
        $('.foot').fadeOut();
      } else {
        $('.foot').fadeIn(1000); // Display with fade effect
      }
    });
  });

  // $(document).ready(function() {
  //   $('foot').fadeOut(); // Hide the element with the id "test" when the page is loaded for the first time [[1]](https://poe.com/citation?message_id=224366152214&citation=1).
    
  //   $(window).on('scroll', function() {
  //     if ($(window).scrollTop() === 0) {
  //       $('foot').fadeOut();
  //     } else {
  //       $('foot').fadeIn(1000); // Display with fade effect
  //     }
  //   });
  // });