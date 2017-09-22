var app = require('../app/index');
var view = require('./view');

app.init(view);

console.log('play at 0, 0')
app.play(0, 0);

console.log('play at 0, 1')
app.play(1, 0);

console.log('play at 0, 0')
app.play(0, 0);