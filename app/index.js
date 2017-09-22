var config = {};
config.controller = require('./controllers/controller');
config.bm = require('./models/boardModel');
config.pm = require('./models/playerModel');


function appInit(view) {
			this.bm.setBoardState([
					[null, null, null],
					[null, null, null],
					[null, null, null]
				]);
			var firstPlayer = true;
			this.pm.setPlayerState(firstPlayer);
			this.controller.addModel(this.bm);
			this.controller.addModel(this.pm);
			this.controller.setView(view);
			this.controller.view.buildBoard();
		};


var appPlay = config.controller.play.bind(config.controller);

var app = { init: appInit.bind(config), play: appPlay };

module.exports = app;