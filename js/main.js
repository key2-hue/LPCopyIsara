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
      // $(this).parent().find('p').removeClass('border');
    }
  });
  $('.fourteenth-section').not('.flow-js > img, .flow-js > p').on('click', function(){
    $('.display-main').parent().find('div > p:first-of-type').removeClass('border');
  });

  $('.title').on('click', function(){
    var parent = $(this).parent();
    if(parent.find('div:last-child').is(':hidden')){
      parent.find('div:last-child').slideDown(300);
      // $(this).find('p').addClass('border');
    } else {
      parent.find('div:last-child').slideUp(300);
    }
  });

  // var x = $(window).width();
  // var y = 769;
  // if( x > y ){
  //   $('.document-demand').text('お問い合わせ / 資料請求はこちら');
  // } else {
  //   $('.document-demand').text('資料請求');
  // }
});