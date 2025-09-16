// Utilise jQuery via CDN
$(document).ready(function () {
  $('#magicBtn').click(function () {
    $('body').css('background-color', '#1e1b4b');
    $(this).text('Glitch activé !');
  });
});
