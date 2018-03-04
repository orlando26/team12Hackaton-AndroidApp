(function($){

	var contact = '';
		
	function startConversation(_contact){
		contact = _contact;
		incommingMsg('Welcome, how can I help you?');
	}

	function sendmessage(message) {
		var now = new Date();
		
		var item = `<li>
			<div class="chat-box sent">
				<span> <small>${getHour(now)}</small> Me </span><br><br>
				<p>${message}</p>
			</div>
		</li>`;

		$('#conversation').append(item);
	}

	function getHour(date) {
		var hour = date.getHours();
		var str_hour = `0${hour}`;
		if (str_hour.length > 2) str_hour = str_hour.substr(1);
		var minutes = date.getMinutes();
		var str_minutes = `0${minutes}`;
		if (str_minutes.length > 2) str_minutes = str_minutes.substr(1);
		var hourtoformat = `${str_hour}: ${str_minutes}`;
		return hourtoformat;
	}

	function incommingMsg(msg) {

		var now = new Date();
	
		var item = `<li>
			<div class="chat-box received">
				<span>${contact} <small>${getHour(now)}</small> </span><br><br>
				<p>${msg}</p
			</div>
			</li>`;

		$('#conversation').append(item);
	
	}
	startConversation('Dra. Madgalena Lozano');
	

	$('#loginform').submit(function (event) {
		var username = $('#username').val();
		var password = $('#password').val();
		event.preventDefault();
	});


	$('#send-message').click(function (ent) {
		var message = $('#message-box').val();
		if (message !== '') {
			sendmessage(message);
			$('#message-box').val('');
		}
	});

	$('#category-cardio').click(function() {
		console.log('click cardio category');
	});

	$('#category-trauma').click(function() {
		console.log('click trauma category');
	});

	$('#menu-clinical-history').click(function() {
		console.log('click clinical history menu');
	});

	$('#menu-faqs').click(function() {
		console.log('click menu faqs');
	});

	$('#menu-talk-doctor').click(function() {
		console.log('click talk doctor');
	});

	$('#menu-treatment').click(function() {
		console.log('click menu treatment');
	});

	$('#menu-clinical-studies').click(function() {
		console.log('click clinical studies');
	});
})(jQuery); 