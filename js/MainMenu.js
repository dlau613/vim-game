Maze.MainMenu = function(game) {};
Maze.MainMenu.prototype = {
	create: function() {
		this.add.sprite(200, 200, 'main-menu');
		// this.gameTitle = this.add.sprite(Maze._WIDTH*0.5, 40, 'title');
		// this.gameTitle.anchor.set(0.5,0);
		this.startButton = this.add.button(100, 100, 'button-start', this.startGame, this, 2, 0, 1);
		this.startButton.anchor.set(0.5,0);
		this.startButton.input.useHandCursor = true;

		// button to "read the article"
	},
	startGame: function() {
		this.game.state.start('Howto');
	}
};