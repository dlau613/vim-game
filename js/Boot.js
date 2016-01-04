var Maze = {
	_WIDTH: 640,
	_HEIGHT: 640
};
Maze.Boot = function(game) {};
Maze.Boot.prototype = {
	preload: function() {
		this.load.image('preloaderBg', 'img/loading-bg.png');
		this.load.image('preloaderBar', 'img/loading-bar.png');
	},
	create: function() {
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertically = true;
		this.game.stage.backgroundColor = '#d7c3d9';
		this.game.state.start('Preloader');
	}
};