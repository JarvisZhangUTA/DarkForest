/*
 * Game state
 * ==========
 *
 * A sample Game state, displaying the Phaser logo.
 */

export default class Game extends Phaser.State {

  preload() {
    this.winHeight = window.innerHeight;
    this.winWidth = window.innerWidth;

    this.centerX = this.winWidth / 2;
    this.centerY = this.winHeight / 2;
  }
  
  create() {
    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.rockets = this.add.group();
    this.rockets.enableBody = true;

    this.planet = this.add.sprite(this.centerX, this.centerY - 100, 'planet');
    this.planet.anchor.set(0.5);
    this.planet.scale.set(0.3);
    this.physics.enable(this.planet, Phaser.Physics.ARCADE);
    this.planet.body.collideWorldBounds = true;
    this.planet.body.bounce.setTo(200);
    this.planet.body.immovable = true;
    
    this.satellite = this.add.sprite(this.centerX, this.centerY, 'satellite');
    this.satellite.scale.set(0.1);
    this.physics.enable(this.satellite, Phaser.Physics.ARCADE);
    this.satellite.body.collideWorldBounds = true;
    this.satellite.body.bounce.setTo(200);
    this.satellite.body.immovable = true;

    for (let i = 0; i < 50; i++) {
      const rocket = this.rockets.create(this.world.randomX, this.world.randomY, 'rocket');
      rocket.scale.set(0.05);

      rocket.name = 'enemy' + i;
      rocket.body.collideWorldBounds = true;
      rocket.body.bounce.setTo(1);
      rocket.body.velocity.setTo(10 + Math.random() * 100, 10 + Math.random() * 100);
    }

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.physics.arcade.collide(this.satellite, this.rockets, () => {});
    
    this.physics.arcade.collide(this.planet, this.rockets, () => {
      //this.state.start('End');
    });

    this.planet.angle += 0.1;

    this.satellite.body.velocity.x = 0;
    this.satellite.body.velocity.y = 0;

    this.planet.body.velocity.x = 0;
    this.planet.body.velocity.y = 0;

    for(let rocket of this.rockets.getAll()) {
      rocket.rotation = rocket.body.angle + 45;
    }

    if (this.cursors.up.isDown || this.cursors.left.isDown){
      this.satellite.body.velocity.x = 100;
      this.satellite.angle -= 3;
      this.satellite.position.rotate(this.centerX, this.centerY - 100, -3, true, 100);
    } else if(this.cursors.down.isDown || this.cursors.right.isDown){
      this.satellite.body.velocity.x = -100;
      this.satellite.angle += 3;
      this.satellite.position.rotate(this.centerX, this.centerY - 100, +3, true, 100);
    }
  }
}
