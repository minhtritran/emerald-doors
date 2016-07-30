$(document).ready(function() {
	$("#header").load("header.html", function() {
		$('#nav-door-dropdown').hover(function() {
			$(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(0);
		}, function() {
			$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(100);
		});
	});
});

