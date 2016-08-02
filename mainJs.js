/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    'use strict'; 
$('.header-tex').click(function () {
	var s = $('.dropdown').css('display');
	if(s === 'none') {
		$('.dropdown').slideDown();
	} else {
		$('.dropdown').slideUp();
	}
});

 $('span').click(function () {
        var a = $(this).text();
        if (a === 'ABOUT') {
            $(".dropdown").slideUp();
            $('html, body').animate({
                scrollIntoView: $(".about").offset().top
            }, 700);
        }
        if (a === 'PORTFOLIO') {
            $(".dropdown").slideUp();
            $('html, body').animate({
                scrollTop: $(".portfolio").offset().top
            }, 700);
            console.log($('.portfolio').offset().top);
        }
        if (a === 'CONTACT') {
            $(".dropdown").slideUp();
            $('html, body').animate({
                scrollTop: $(".contact").offset().top
            }, 700);
        }
    });
});
