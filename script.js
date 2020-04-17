$('#contact').on("click", function () {
  $('form').animate({ top: 0 }, 200 );
});

$('.close').on('click', function(){
  $('form').animate({ top: '-100vh' }, 200 );
});