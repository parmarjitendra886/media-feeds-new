


$(document).ready(function() {
    $('#name').editable();
});




	$(function(){
	    $('#name').editable({
	    	type: 'text',
	        url: '/post',
	        title: 'Enter username'
	    });
	});