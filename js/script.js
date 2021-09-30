/* JavaScript */

//micromodal

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

//copylight

document.getElementById('thisYear').innerHTML = (new Date()).getFullYear();

/* jQuery */

$(function(){

const toTop = $('#to-top');
const scrlbtn = $('#g-nav>ul a');


//navigation smooth-scroll

$(scrlbtn).on('click',function(){
const scrltgt = $(this).attr('href');
$('html,body').animate({scrollTop:$(scrltgt).offset().top - 80},600);
return false;
});

//to-top btn

$(toTop).on('click',function(){
$('html,body').animate({scrollTop:0},400);
return false;
});

/* scroll events */

$(window).scroll(function(){

//to-top btn

if($(this).scrollTop() > 399){
$(toTop).fadeIn();
}else{
$(toTop).hide();
}

//ul current display

const scrl = $(this).scrollTop();
const pos01 = Math.round($('#about').offset().top - 160);
const pos02 = Math.round($('#work').offset().top - 160);
const pos03 = Math.round($('#skill').offset().top - 160);
const pos04 = Math.round($('#contact').offset().top - 160);

  // 0 < scrl < about

  if(0<=scrl && scrl<pos01){
  $('#ls-0').addClass('current').siblings('li').removeClass('current');}

  // about < scrl < work

  else if(scrl >= pos01 && scrl<pos02 ){
  $('#ls-1').addClass('current').siblings('li').removeClass('current');}

  // work < scrl < skill

  else if(scrl>=pos02 && scrl<pos03 ){

  $('#ls-2').addClass('current').siblings('li').removeClass('current');}

  // skill < scrl < contact

  else if(scrl>=pos03  && scrl<pos04 ){
  $('#ls-3').addClass('current').siblings('li').removeClass('current');}

  // scrl => contact
  else{
  $('#ls-4').addClass('current').siblings('li').removeClass('current');}

});

});