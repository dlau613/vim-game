Maze.Howto = function(game) {
};
Maze.Howto.prototype = {
	create: function() {
		this.buttonContinue = this.add.button(0, 0, 'how-to-play', this.startGame, this);
	},
	startGame: function() {
		this.game.state.start('Game');
	}
};