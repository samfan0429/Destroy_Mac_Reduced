var fist;
var cursors;

import stealth from "./stealth.js";

export default new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:function frenzy ()
    {
        Phaser.Scene.call(this, { key: 'frenzy' });
    },

    init: function(data){
        this.stealthKeys=data.keys;
        this.cursors=this.input.keyboard.createCursorKeys();
    },

    preload: function ()
    {
        this.load.image('imac', 'assets/images/imac.jpg'); // from https://www.pexels.com/photo/photo-of-imac-near-macbook-1029757/
    },

    create: function ()
    {
        // background
        var background = this.add.image(400, 300, 'imac');

        //Keyboard set
        this.cursors=this.input.keyboard.createCursorKeys();

    },

    update: function()
    {
        if (this.cursors.space.isDown) {
            console.log('From frenzy to stealth');
            //Without this following line, the system thinks the space is still down for stealth scene.
            this.cursors.space.isDown=false;
            this.scene.resume('stealth');
            this.stealthKeys.enabled=true;
            this.scene.stop();
        }
    }


});
