$(document).ready(function() {
    $("div.wwd1").click(function() {
      $(".des-show").toggle();
      $(".des-hide").toggle();
    });
    $("div.wwd2").click(function() {
      $(".dev-show").toggle();
      $(".dev-hide").toggle();
    });
    $("div.wwd3").click(function() {
      $(".prod-show").toggle();
      $(".prod-hide").toggle();
    });
    $('textarea#message').keypress(function (e) {
      if (e.which == 13) {
        $('form#feedback').submit();
        var feedname= $('#name').val();
        alert(feedname + ". Thanks for your feedback. It's highly appreciated.");
        return false;    //<---- Add this line
      }
    });
    $('div.card').hover(function() {
      $(this).find('div.overlay').fadeIn();
      }, function() {
      $(this).find('div.overlay').fadeOut();
      });
  });