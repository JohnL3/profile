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
var wid = $('body').width();
$('.wid').text(wid);
});
