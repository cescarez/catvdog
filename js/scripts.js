$(document).ready(function() {
  $("img#dog").click(function() {
    $("div#woof").text("Woof!");
    $("div#meow").text("Hsss!!");
    });

  $("img#cat").click(function() {
    $("div#meow").text("Meow!");
    $("div#woof").text("Grrrrr.");
  });
});
