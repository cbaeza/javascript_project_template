;(function(window, $){
	'use strict';

	var options = {};

	var App = function(options){
		return new App.init(options);
	};

	App.init = function(options){
		this.options = options || 'DEFAULT';
		console.log('App init');
		console.log(this.options);
	};

	App.prototype = {
		loadi18nFeed: function(){
			$( '#langu' ).load( '/feed/i18n.json', function( response, status, xhr ) {
				if ( status == 'error' ) {
					var msg = 'Sorry but there was an error: ';
					console.log( msg + xhr.status + " " + xhr.statusText );
				}
			})
			//Chainable
			return this;
		},
		loadNews: function(){
			$( '#news' ).load( '/feed/news.json', function( response, status, xhr ) {
				if ( status == 'error' ) {
					var msg = 'Sorry but there was an error: ';
					console.log( msg + xhr.status + " " + xhr.statusText );
				}
			})
			//Chainable
			return this;
		},
		sayHello: function(){
			console.log('Hello world!');
			//Chainable
			return this;
		},
		sayGoodbye: function(){
			console.log('Goodbye !');
			//Chainable
			return this;
		}
	};

	// trick from jquery to avoid use of new
	App.init.prototype = App.prototype;

	// expose to global object
	window.my_namespace = window.my_namespace || {};
	window.my_namespace.App = App;

	// auto initialize, remove for custom initialization
	//return App({ options: 'some options' });

}(window, jQuery));


