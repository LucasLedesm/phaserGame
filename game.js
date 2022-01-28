export class Game extends Phaser.Scene {


    constructor() {
        super({ key: "Game" });
    }


    preload() {
        this.load.image('background', 'image/background.png');
        this.load.image('gameover', 'image/gameover.png');
        this.load.image('platform', 'image/platform.png');
        this.load.image('ball', 'image/ball.png');
      }
    
      create() {
        this.physics.world.setBoundsCollision(true, true, true, false);
    
        this.add.image(410, 250, 'background');
        this.gameoverImage = this.add.image(400, 90, 'gameover');
        this.gameoverImage.visible = false;
        
        this.platform = this.physics.add.image(400, 460, 'platform').setImmovable();
        this.platform.body.allowGravity = false;
        
        this.cursors = this.input.keyboard.createCursorKeys();
        
        this.ball = this.physics.add.image(400, 30, 'ball');
        this.ball.setBounce(1);
        this.ball.setCollideWorldBounds(true);
    
        let velocity = 100 * Phaser.Math.Between(1.3, 2);
        if (Phaser.Math.Between(0, 10) > 5) {
          velocity = 0 - velocity;
        }
        this.ball.setVelocity(velocity, 10);
      
    
        this.physics.add.collider(this.ball, this.platform);
      }
    
      update() {
        if (this.cursors.left.isDown) {
          this.platform.setVelocityX(-500);
        }
        else if (this.cursors.right.isDown) {
          this.platform.setVelocityX(500);
        }
        else {
          this.platform.setVelocityX(0);
        }
    
        if (this.ball.y > 500) {
          console.log('fin');
          this.gameoverImage.visible = true;
          this.scene.pause();
        }
      }
    
    }