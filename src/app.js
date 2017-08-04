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
		sayHello: function(){
			console.log('Hello world!');
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


