$(document).ready(function () {
	var tab = $('a[data-toggle="tab"]');

	tab.on('click', function(event) {
		event.preventDefault();
		$('.active').removeClass('active');
		$(this).parent().addClass('active');
		$($(this).attr('href')).addClass('active');
	});
});