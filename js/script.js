/* JavaScript */
MicroModal.init({
/*   onShow: modal => console.info(`${modal.id} is shown`), // [1]
  onClose: modal => console.info(`${modal.id} is hidden`), // [2]
  openTrigger: 'data-custom-open', // [3]
  closeTrigger: 'data-custom-close', // [4]
  openClass: 'is-open', // [5]
  disableScroll: true, // [6]
  disableFocus: false, // [7]
  awaitOpenAnimation: false, // [8]
  awaitCloseAnimation: false, // [9]
  debugMode: true // [10] */
});

/* jQuery */
$(function(){

//navigation smooth-scroll
var scrlbtn = $('#g-nav>ul a');
$(scrlbtn).on('click',function(){
var scrltgt = $(this).attr('href');
$('html,body').animate({scrollTop:$(scrltgt).offset().top - 80},600);
return false;
});

//to-top btn
var toTop = $('#to-top');
$(toTop).on('click',function(){
$('html,body').animate({scrollTop:0},600);
return false;
});

/* scroll events */
$(window).scroll(function(){
//to-top btn
if($(this).scrollTop() > 499){
$(toTop).fadeIn();
}else{
$(toTop).hide();
}
//ul current display
var scrl = $(this).scrollTop();
var pos01 = Math.round($('#about').offset().top - 80);
var pos02 = Math.round($('#work').offset().top - 80);
var pos03 = Math.round($('#skill').offset().top - 80);
var pos04 = Math.round($('#contact').offset().top - 80);
  // 0 < scrl < about
  if(0<=scrl && scrl<pos01){
  $('#ls-0').addClass('current').siblings('li').removeClass('current');}
  //about < scrl < work
  else if(scrl>=pos01 && scrl<pos02){
  $('#ls-1').addClass('current').siblings('li').removeClass('current');}
  //work < scrl < skill
  else if(scrl>=pos02 && scrl<pos03){
  $('#ls-2').addClass('current').siblings('li').removeClass('current');}
  //skill < scrl < contact
  else if(scrl>=pos02 && scrl<pos03){
  $('#ls-3').addClass('current').siblings('li').removeClass('current');}
  //scrl => contact
  else{$('#ls-4').addClass('current').siblings('li').removeClass('current');}
});

});