$(document).ready(function() {

    $("#photoSearch").click(function(e) {
        e.preventDefault();
        var searchTerm = $('#searchInput').val();
        console.log(searchTerm);
        $.ajax({
            url: 'https://api.unsplash.com/photos',
                type: 'GET',
                dataType: 'json',
                data: {
                    client_id: '69f446cda8bfc8216c8ef16e67ad016e23dce617c0ee63d180b082775b0e70b0',
                    query: 'bird',
                },
                success: function(json) {
                    console.log(json);
                }, 
        });
    });
});

/*

import Unsplash from 'unsplash-js';

// require syntax
const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({
  applicationId: "{69f446cda8bfc8216c8ef16e67ad016e23dce617c0ee63d180b082775b0e70b0}",
  secret: "{f1689005727aa4a1db146b13d42a569ed27f6211043c741ca4e524690d3c2197}",
  callbackUrl: "{CALLBACK_URL}"
});
*/

/*
$(document).ready(function() {

	// ES Modules syntax


unsplash.photos.listCuratedPhotos(2, 15, "latest")
  .then(toJson)
  .then(json => {
    console.log(josn);
  });

	$('#photoSearch').click(function(e){
		e.preventDefault();
		var searchTerm = $('photoSearch').val();
		console.log('stars');
		var myurl="https://api.unsplash.com/                        

		console.log(myurl);
		$.ajax({
			url : myurl,
			dataType : "json",
			success : function(json) {
				console.log(json);
			}
		});
	});
});
*/
