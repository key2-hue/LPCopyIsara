$(function(){
  $('.flow-js > img, .flow-js > p').on('click' , function(){
    var twoParent = $(this).parent().parent();
    var width = $(window).width();
    var slide = 769;
    if(width < slide ) {
      if(twoParent.find('div:last-child').is(':hidden')){
        $('.display-main').slideUp(300);
        $('.display-main').parent().find('div:first-of-type > p:last-of-type').text('v');
        $('.display-main').removeClass('display-main');
        twoParent.find('div:last-child').addClass('display-main').slideDown(300)
        $(this).parent().find('p:last-of-type').text('^');
        // $(this).parent().find('p').addClass('border');
      } else {
        twoParent.find('div:last-child').slideUp(300);
        // $(this).parent().find('p').removeClass('border');
        $(this).parent().find('p:last-of-type').text('v');
      }
    } 
    
  });
  $('.fourteenth-section').not('.flow-js > img, .flow-js > p').on('click', function(){
    $('.display-main').parent().find('div > p:first-of-type').removeClass('border');
  });

  $('.title').on('click', function(){
    var parent = $(this).parent();
    if(parent.find('div:last-child').is(':hidden')){
      parent.find('div:last-child').slideDown(300);
      parent.find('.title > p:last-of-type').text('^');
      parent.find('.title > p:last-of-type').removeClass('after-first');
      parent.find('.title > p:last-of-type').addClass('after-second');
      // $(this).find('p').addClass('border');
    } else {
      parent.find('div:last-child').slideUp(300);
      parent.find('.title > p:last-of-type').text('v');
      parent.find('.title > p:last-of-type').removeClass('after-second');
      parent.find('.title > p:last-of-type').addClass('after-first');
    }

    var width = $(window).width();
    var slide = 769;

    if (width < slide ) {
      if($('.question-firstTitle > p:last-of-type').hasClass('after-second') ){
        $('.question-firstTitle > p:last-of-type').css({'margin-bottom': '10px'});
      }
  
      if($('.title-notFirst').hasClass('after-first')) {
        $('.title-notFirst').css({'margin-top': '5px'});
      }
    }

    

  });

  if($('body')[0].scrollHeight < 100) {
    $('.footer-four > p').css({'display': 'none'});
  }

  $('.footer-four > p').on('click', function(){
    $("html,body").animate({scrollTop: 0 });
  });

  // var x = $(window).width();
  // var y = 769;
  // if( x > y ){
  //   $('.document-demand').addClass('.document-demand');
  // } else {
  //   $('.document-demand').removeClass('.document-demand');
  // }
});