// JavaScript Document

$(document).ready(function() {
	var n = '#nav'
	$('#nav-menu').click(function() {
		if ($(n).hasClass('nav-open')) {
			$(n).removeClass('nav-open');
		}
		else {
			$(n).addClass('nav-open');
		}
	});
});