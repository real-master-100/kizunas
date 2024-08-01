$(document).ready(function() {
    $("#hundred").css("display", "block");
    $("#family").css("display", "none");

    $(".que_btn").on('click', function() {
      $("#hundred").css("display", "block");
      $("#family").css("display", "none");
    });
  
    $(".fam_btn").on('click', function() {
        $("#family").css("display", "block");
        $("#hundred").css("display", "none");
    });

    $(".que_btn").on('click', () => {
    });


    $(".que_btn").on('click', function() {
        $(this).removeClass("hid").addClass("show"); // 
        $(".fam_btn").removeClass("show").addClass("hid");
    });
    $(".fam_btn").on('click', function() {
        $(this).removeClass("hid").addClass("show"); // 
        $(".que_btn").removeClass("show").addClass("hid");
    });


  });