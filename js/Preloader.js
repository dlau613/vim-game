Maze.Preloader = function(game) {};
Maze.Preloader.prototype = {
	preload: function() {
		this.preloadBg = this.add.sprite((Maze._WIDTH-297)*0.5, (Maze._HEIGHT-145)*0.5, 'preloaderBg');
		this.preloadBar = this.add.sprite((Maze._WIDTH-158)*0.5, (Maze._HEIGHT-50)*0.5, 'preloaderBar');
		//this.load.setPreloadSprite(this.preloadBar);
		

		this.load.tilemap('maze', 'img/mazes1.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('tile', 'img/tile.png');
        this.load.image('star', 'img/star.png');
        this.load.image('grass', 'img/grass.png');
        this.load.spritesheet('alphabet', 'img/alphabet.png',32,26);
		// this.load.tilemap('maze2', 'img/test.json', null, Phaser.Tilemap.TILED_JSON);
  //       this.load.image('terrain_atlas', 'img/terrain_atlas.png');


  //       this.load.tilemap('maze3', 'img/test2.json', null, Phaser.Tilemap.TILED_JSON);
  //       this.load.tilemap('maze1', 'img/test3.json', null, Phaser.Tilemap.TILED_JSON);


		// this.map = this.add.tilemap('maze1');
  //       this.map.addTilesetImage('tile', 'tile');

  //       this.layer = this.map.createLayer('Maze-1');
  //       layer.resizeWorld();


		//this.load.image('Maze', 'img/Maze.png');
		// this.load.image('hole', 'img/hole.png');
		// this.load.image('element-w', 'img/element-w.png');
		// this.load.image('element-h', 'img/element-h.png');
		// this.load.image('panel', 'img/panel.png');
		// this.load.image('title', 'img/title.png');
		// this.load.image('button-pause', 'img/button-pause.png');
		// this.load.image('screen-bg', 'img/screen-bg.png');
		this.load.image('shaymin', 'img/shaymin-land.png');
		this.load.image('pokeball', 'img/pokeball.png');
		this.load.image('main-menu', 'img/main-menu.png');
		this.load.image('how-to-play', 'img/how-to-play.png');
		// this.load.image('border-horizontal', 'img/border-horizontal.png');
		// this.load.image('border-vertical', 'img/border-vertical.png');

		// this.load.spritesheet('button-audio', 'img/button-audio.png', 35, 35);
		this.load.spritesheet('button-start', 'img/button-start.png', 146, 51);

		// this.load.audio('audio-bounce', ['audio/bounce.ogg', 'audio/bounce.mp3', 'audio/bounce.m4a']);
	},
	create: function() {
		this.game.state.start('Game');
	}
};