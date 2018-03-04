$('#loginform').submit(function (event) {
	console.log(':::::submitting::::');
	var username = $('#username').val();
	console.log('username', username);
	var password = $('#password').val();
	console.log('password', password);
	event.preventDefault();
});