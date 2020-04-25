var player;
var target;

import frenzy from "./frenzy.js";

export default new Phaser.Class({
    Extends: Phaser.Scene,

    initialize: function sceneA ()
    {
        Phaser.Scene.call(this, { key: 'stealth' });
    },

    init: function(){
        //Setting keyboard.
        this.cursors=this.input.keyboard.createCursorKeys();
    },

    preload: function ()
    {
        this.load.image('player', 'assets/images/player.png');
        this.load.image('target','assets/images/target.png');
    },

    create: function ()
    {
        //Setting player
        player = this.physics.add.sprite(400, 200, 'player');
        player.setBounce(0);
        player.setCollideWorldBounds(true);

        //Setting computer
        target = this.physics.add.sprite(400, 350, 'target');
        target.body.immovable = true;
        
        //Setting physics and logics
        this.physics.add.overlap(player, target, this.breakComp, null, this);
    },


    update: function()
    {
        if (this.cursors.up.isUp && this.cursors.down.isUp){
            player.setVelocityY(0);
        }
        if (this.cursors.left.isUp && this.cursors.right.isUp){
            player.setVelocityX(0); 
        }
    
        if (this.cursors.up.isDown)
        {
            player.setVelocityY(-160);
            console.log('----->going up');
        }
        if (this.cursors.down.isDown)
        {
            player.setVelocityY(160);
            console.log('----->going down');
        }
        if(this.cursors.right.isDown)
        {
            player.setVelocityX(160);
            console.log('----->going right');
        }
        if (this.cursors.left.isDown)
        {
            player.setVelocityX(-160);
            console.log('----->going left');
        }

    },

    breakComp: function(player,target){
        this.cursors.down.isDown=false;
        this.cursors.up.isDown=false;
        this.cursors.right.isDown=false;
        this.cursors.left.isDown=false;

        player.setVelocityY(0);
        player.setVelocityX(0); 
        this.scene.launch('frenzy');
        this.scene.pause();
        console.log('from stealth to frenzy');  
        target.disableBody(true, true);
    }

});
