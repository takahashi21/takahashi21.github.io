/* jQuery */

$(function(){

//hamburger

const gnav = $('#g-nav');
const hamBtn = $('#ham-btn');

$(hamBtn).on('click',function(){

$(this).not(':animated').toggleClass('is-active');
$(gnav).not(':animated').toggleClass('is-active');

});

$('#g-nav a').on('click',function(){

$(gnav).toggleClass('is-active');
$(hamBtn).toggleClass('is-active');

});

//to-top btn

const btnWrp = $('#btn-wrapper');
$(btnWrp).hide();

$(window).scroll(function(){

if($(this).scrollTop() > 199){
$(btnWrp).fadeIn();}else{$(btnWrp).hide();
}

});

$('#to-top').on('click',function(){

$('html,body').animate({scrollTop:0},600);
return false;

});

$('#to-btm').on('click',function(){

$('html,body').animate({scrollTop:($($(this).attr('href')).offset().top)},600);
return false;

});

//info

const infoList = $('#info-list');
const infoBtn = $('#info-btn');
let infoFlg = 'off';

$(infoList).load('info.txt');

$(infoBtn).on('click',function(){

//listの表示きりかえ

$(infoList).toggleClass('is-active');

//info-btnのテキストきりかえ

if(infoFlg === 'off'){

$(infoBtn).text('元に戻す');
infoFlg = 'on';

}else{

$(infoBtn).text('お知らせをもっと見る');
infoFlg = 'off';

}

});

//resize

$(window).on('resize',function(){

if(window.matchMedia('(max-width:767px)').matches){

$(gnav).removeClass('is-active');
$(hamBtn).removeClass('is-active');

}else{

$(gnav).removeClass('is-active');
$(hamBtn).removeClass('is-active');

}

});

});

/* JavaScript */

//footer copyright

document.getElementById('this-year').innerHTML = (new Date()).getUTCFullYear();