Maze.Game = function(game) {};
Maze.Game.prototype = {
	create: function() {
		// this.add.sprite(200, 200, 'main-menu');
		this.currentlayer = 1;
		this.numlevels = 3;
		this.tweenspeed = 100;
		this.map = this.add.tilemap('maze');
        this.map.addTilesetImage('tile', 'tile');
        this.map.addTilesetImage('star', 'star');
        this.map.addTilesetImage('grass', 'grass');
     	this.grassLayer = this.map.createLayer('grass');
        this.currentlevel = this.map.createLayer('Tile Layer 1');
     	this.map.setCollision(1,true, this.currentlevel);

     	this.addLetters();
        // this.currentlevel.resizeWorld();
        // this.currentlevel.wrap = true;
        
        this.star = this.add.sprite(592, 592, 'star');
        this.star.anchor.set(0.5);

        this.shaymin = this.add.sprite(16,16, 'shaymin');
        this.shaymin.anchor.set(0.5);

		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.arcade.enable(this.shaymin);
		this.physics.arcade.enable(this.star);

        // this.shaymin.body.collideWorldBounds = true;
        this.movementForce = 32;
		this.moving = 0;
		this.cursors = this.input.keyboard.createCursorKeys();


		// this.cursors.down.onDown.add(move, this);

		// this.fontSmall = { font: "16px Arial", fill: "#e4beef" };
		// this.fontBig = { font: "24px Arial", fill: "#e4beef" };
		// this.fontMessage = { font: "24px Arial", fill: "#e4beef",  align: "center", stroke: "#320C3E", strokeThickness: 4 };
		// this.audioStatus = true;
		// this.timer = 0;
		// this.totalTimer = 0;
		// this.level = 1;
		// this.maxLevels = 5;
		// this.MazeStartPos = { x: Maze._WIDTH*0.5, y: 450 };

		// this.pauseButton = this.add.button(Maze._WIDTH-8, 8, 'button-pause', this.managePause, this);
		// this.pauseButton.anchor.set(1,0);
		// this.pauseButton.input.useHandCursor = true;
		// this.audioButton = this.add.button(Maze._WIDTH-this.pauseButton.width-8*2, 8, 'button-audio', this.manageAudio, this);
		// this.audioButton.anchor.set(1,0);
		// this.audioButton.input.useHandCursor = true;
		// this.audioButton.animations.add('true', [0], 10, true);
		// this.audioButton.animations.add('false', [1], 10, true);
		// this.audioButton.animations.play(this.audioStatus);
		// this.timerText = this.game.add.text(15, 15, "Time: "+this.timer, this.fontBig);
		// this.levelText = this.game.add.text(120, 10, "Level: "+this.level+" / "+this.maxLevels, this.fontSmall);
		// this.totalTimeText = this.game.add.text(120, 30, "Total time: "+this.totalTimer, this.fontSmall);

		// this.hole = this.add.sprite(Maze._WIDTH*0.5, 90, 'hole');
		// this.physics.enable(this.hole, Phaser.Physics.ARCADE);
		// this.hole.anchor.set(0.5);
		// this.hole.body.setSize(2, 2);

		// this.Maze = this.add.sprite(this.MazeStartPos.x, this.MazeStartPos.y, 'Maze');
		// this.Maze.anchor.set(0.5);
		// this.physics.enable(this.Maze, Phaser.Physics.ARCADE);
		// this.Maze.body.setSize(18, 18);
		// this.Maze.body.bounce.set(0.3, 0.3);

		// Maze._player = this.Maze;
		// window.addEventListener("deviceorientation", this.handleOrientation, true);

		// this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);

		// this.borderGroup = this.add.group();
		// this.borderGroup.enableBody = true;
		// this.borderGroup.physicsBodyType = Phaser.Physics.ARCADE;
		// this.borderGroup.create(0, 50, 'border-horizontal');
		// this.borderGroup.create(0, Maze._HEIGHT-2, 'border-horizontal');
		// this.borderGroup.create(0, 0, 'border-vertical');
		// this.borderGroup.create(Maze._WIDTH-2, 0, 'border-vertical');
		// this.borderGroup.setAll('body.immovable', true);
		// this.bounceSound = this.game.add.audio('audio-bounce');
	},
	update: function() {
		//velocity movement 
		// if(this.cursors.left.isDown) {
		// 	this.shaymin.body.velocity.x -= this.movementForce;
		// }
		// else if(this.cursors.right.isDown) {
		// 	this.shaymin.body.velocity.x += this.movementForce;
		// }
		// if(this.cursors.up.isDown) {

		// 	this.shaymin.body.velocity.y -= this.movementForce;
		// }
		// else if(this.cursors.down.isDown) {
		// 	this.shaymin.body.velocity.y += this.movementForce;
		// }

		//move one tile at a time, check for overlap in moveDone
		if(this.cursors.left.isDown && this.moving == 0) {
			if (this.checkTile('left') != 1) {
				this.moving=1;
				this.tweenLeft = this.add.tween(this.shaymin).to({ x: this.shaymin.body.x - 16 }, this.tweenspeed, Phaser.Easing.Linear.None, true);	
				this.tweenLeft.onComplete.addOnce(this.moveDone, this);
			}
		}
		else if(this.cursors.right.isDown && this.moving == 0) {
			if (this.checkTile('right') != 1) {
				this.moving=1;
				this.tweenRight = this.add.tween(this.shaymin).to({ x: this.shaymin.body.x + 48 }, this.tweenspeed, Phaser.Easing.Linear.None, true);
				this.tweenRight.onComplete.addOnce(this.moveDone, this);
			}
		}
		if(this.cursors.up.isDown && this.moving==0) {
			if (this.checkTile('up') != 1) {
				this.moving=1;
				this.tweenUp = this.add.tween(this.shaymin).to({ y: this.shaymin.body.y - 16 }, this.tweenspeed, Phaser.Easing.Linear.None, true);
				this.tweenUp.onComplete.addOnce(this.moveDone, this);
			}
		}
		else if(this.cursors.down.isDown && this.moving==0) {
			if (this.checkTile('down') != 1) {
				this.moving=1;
				this.tweenDown = this.add.tween(this.shaymin).to({ y: this.shaymin.body.y + 48 }, this.tweenspeed, Phaser.Easing.Linear.None, true);
				this.tweenDown.onComplete.addOnce(this.moveDone, this);
			}
		}

		// this.physics.arcade.collide(this.Maze, this.borderGroup, this.wallCollision, null, this);
		// this.physics.arcade.collide(this.Maze, this.levels[this.level-1], this.wallCollision, null, this);
		// this.physics.arcade.overlap(this.Maze, this.hole, this.finishLevel, null, this);
	},

	finishLevel: function() {
		//this.shaymin.body.velocity.set(0,0);
		
		if (this.currentlayer < this.numlevels) {
			this.currentlevel.destroy();
			this.letters.destroy();
			this.shaymin.destroy();
			this.star.destroy();
			this.currentlayer++;
			this.currentlevel = this.map.createLayer('Tile Layer ' + this.currentlayer);
			this.map.setCollision(1,true, this.currentlevel);

			this.addLetters();

			this.star = this.add.sprite(592, 592, 'star');
	        this.star.anchor.set(0.5);

	        this.shaymin = this.add.sprite(16,16, 'shaymin');
	        this.shaymin.anchor.set(0.5);

	        this.physics.startSystem(Phaser.Physics.ARCADE);
			this.physics.arcade.enable(this.shaymin);
			this.physics.arcade.enable(this.star);
		}
		else {
			this.shaymin.kill();
			//add an end state
			//this.game.state.start('the end');
		}
		// this.shaymin.body.x=0;
		// this.shaymin.body.y=0;
	},


	addLetters: function() {
		// this.tiles = this.currentlevel.getTiles(0, 0, this.world.width, this.world.height, false, false);
		// for (this.i = 0; this.i < this.tiles.length; this.i++) {
		// 	if (this.tiles[this.i].index == 1) {
		// 		// if (checkOverlap(this.temp))
		// 		this.temp = this.add.sprite(this.tiles[this.i].x, this.tiles[this.i].y,'pokeball');
		// 		// this.temp = this.add.sprite(32,32,'pokeball');
		// 	}
		// }
		this.letters = this.add.group();
		// this.physics.arcade.enable(this.letters);
		for (var i = 0; i < this.world.width / 32; i++) {
			for (var j = 0; j < this.world.height / 32; j++) {
				this.tileId = this.map.getTileWorldXY(i*32, j*32, 32, 32, this.currentlevel, true).index;
				if (this.tileId == 3) {
					// this.temp = this.add.sprite(i*32, j*32, 'pokeball');
					this.rand = Math.floor(Math.random()*28); //27 for 0 to 26
					if (this.rand != 0) {
					this.temp = this.add.sprite(i*32,j*32, 'alphabet', this.rand);
					this.physics.arcade.enable(this.temp);
					//this.temp.frame = this.rand;
					this.letters.add(this.temp);
					}
				}
			}
		}
	},
	checkTile: function(dir) {
		// this.tiles = this.currentlevel.getTiles(0, 0, this.world.width, this.world.height, false, false);
		// for (var i = 0; i < this.tiles.length; i++) {
		// 	if (this.tiles[i].index ==1) {
		// 		// if (checkOverlap(this.temp))
		// 	}
		// }
		switch(dir) {
			case 'left':
				this.xoffset = -32;
				this.yoffset = 0;
				break;
			case 'right':
				this.xoffset = 32;
				this.yoffset = 0;
				break;
			case 'up':
				this.xoffset = 0;
				this.yoffset = -32;
				break;
			case 'down':
				this.xoffset = 0;
				this.yoffset = 32;
				break;
		}
		// this.temp = this.add.sprite(this.shaymin.body.x + this.xoffset, this.shaymin.body.y + this.yoffset,'shaymin');
		// this.temp.visible = false;
		if (this.shaymin.body.x + this.xoffset < 0 || this.shaymin.body.x + this.xoffset >= this.world.width || 
			this.shaymin.body.y + this.yoffset < 0 || this.shaymin.body.y + this.yoffset >= this.world.height) {
			return 1;
		}
		this.tileId = this.map.getTileWorldXY(this.shaymin.body.x + this.xoffset,
			this.shaymin.body.y + this.yoffset, 32,32,this.currentlevel,true).index;
		// this.temp.kill();
        if(this.tileId == 1){
            return 1;
        }
        else
        	return 0;
	  

				// this.physics.arcade.overlap(this.temp, this.currentlevel, function() {this.shaymin.kill();}, null, this);


	},
	moveDone: function() {
		this.moving = 0;
		this.physics.arcade.overlap(this.shaymin, this.letters, this.pickUpLetter, null, this);
		this.physics.arcade.overlap(this.shaymin, this.star, this.finishLevel, null, this);
	},

	pickUpLetter: function(ball, letter) {
		letter.destroy();
	},
};

