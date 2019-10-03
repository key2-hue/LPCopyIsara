$(function(){
  $('.flow-js > img, .flow-js > p').on('click' , function(){
    var twoParent = $(this).parent().parent();
    if(twoParent.find('div:last-child').is(':hidden')){
      $('.display-main').slideUp(300);
      $('.display-main').removeClass('display-main');
      twoParent.find('div:last-child').addClass('display-main').slideDown(300)
      $(this).parent().find('p').addClass('border');
    } else {
      twoParent.find('div:last-child').slideUp(300);
    }
  });
});