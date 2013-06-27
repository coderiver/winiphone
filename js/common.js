$(document).ready(function() {

	var clock = new FlipClock($('.your-clock'), {

	});
	clock.setTime(235);
	clock.setCountdown(true);

	var clock = new FlipClock($('.your-clock-second'), {

	});
	clock.setTime(235);
	clock.setCountdown(true);


	$(".time").countdown({
		date: "june 29, 2013 18:35",
		onComplete: function( event ) {
		},
		minsOnly: true,
		leadingZero: true
	});

	$(".time").countdown({
		date: "june 29, 2013 18:35",
		onComplete: function( event ) {
		},
		minsOnly: true,
		leadingZero: true
	});

	//$("#time2").countdown('pause');
	//$("#time2").countdown('resume');
});