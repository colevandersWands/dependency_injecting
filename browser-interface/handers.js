window.addEventListener('DOMContentLoaded', function() {
	handlers.init(view);
});

var handlers = {
	play: function(box) {
			var row = box.parentElement.getAttribute('row');
			var column = box.getAttribute('column');
			app.play(row, column);
		},
	init: function(view) {
			app.init(view)
		}	
};