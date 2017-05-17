// This is where it all goes :)

$(document).ready(function() {
  $('.toggle-menu').on('click touchstart',  function(e) {
    e.preventDefault();
    $('.menu').toggleClass('is-visible');
    $('.content__overflow').toggleClass('hidden');
  });
});
