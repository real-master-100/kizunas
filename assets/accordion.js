// $(document).ready(function() {
//     $(".btn").click(function() {
//       $(this).closest(".fadein").find(".answer").slideUp("slow");
//     });
//   });


//   $(document).ready(function() {
//     $(".btn").click(function() {
//       $(this).closest(".fadein").find(".answer").slideToggle("slow");
//       $(this).closest(".fadein").find(".close").attr("src", "./assets/image/seventh_v/spread_plus.svg");
//     });
//   });

$(document).ready(function() {
  $(".answer").css("display", "none");


    $(".btn").click(function() {
      var $answer = $(this).closest(".fadein").find(".answer");
      $answer.slideToggle("slow");
      var $closeImage = $(this).closest(".fadein").find(".close");
      var newSrc = $closeImage.attr("src") === "./assets/image/seventh_v/spread_plus.svg" ? "./assets/image/seventh_v/spread_minus.svg" : "./assets/image/seventh_v/spread_plus.svg";
      $closeImage.attr("src", newSrc);
    });
  });