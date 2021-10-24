/* JavaScript */

// micromodal
MicroModal.init({
  //onShow: modal => console.info(`${modal.id} is shown`), // [1]
  //onClose: modal => console.info(`${modal.id} is hidden`), // [2]
  //openTrigger: 'data-custom-open', // [3]
  //closeTrigger: 'data-custom-close', // [4]
  //openClass: 'is-open', // [5]
  disableScroll: true, // [6]
  disableFocus: true, // [7]
  //awaitOpenAnimation: false, // [8]
  //awaitCloseAnimation: false, // [9]
  //debugMode: true // [10] */
});

// copylight
document.getElementById('thisYear').innerHTML = (new Date()).getFullYear();

/* jQuery */
$(function(){

// navigation smooth-scroll
const scrlbtn = $('#g-nav>ul a');

$(scrlbtn).on('click',function(){
const scrltgt = $(this).attr('href');
$('html,body').animate({scrollTop:$(scrltgt).offset().top},400,'swing');
return false;
});

// ham-btn
const gnav = $('#g-nav');
const hamBtn = $('#ham-btn');

$(hamBtn).on('click',function(){
$(this).not(':animated').toggleClass('is-active');
$(gnav).not(':animated').toggleClass('is-active');
});

$('#g-nav a').on('click',function(){
$(this).not(':animated').toggleClass('is-active');
$(gnav).not(':animated').toggleClass('is-active');
$(hamBtn).not(':animated').toggleClass('is-active');
});

// to-top-btn
const toTop = $('#to-top');

$(toTop).on('click',function(){
$('html,body').animate({scrollTop:0},400);
return false;
});

// open codepen
const cdpen = $('#codepen');
const cpWrap = $('#codepen-wrapper');
let cdpenFlg = 'off';

$(cdpen).on('click',function(){

$(this).toggleClass('open')
$(cpWrap).toggleClass('open');

  // #codepen テキストきりかえ
  if(cdpenFlg === 'off'){
  $(cdpen).text('＞とじる');
  cdpenFlg = 'on';

  }else{

  $(cdpen).text('＞表示する');
  cdpenFlg = 'off';
  }

});

// scroll events
$(window).scroll(function(){

  // to-top btn
if($(this).scrollTop() > 399){
$(toTop).fadeIn();
}else{
$(toTop).hide();
}

});

});