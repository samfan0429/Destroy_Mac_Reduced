var fist;
var cursors;

import stealth from "./stealth.js";

export default new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:function frenzy ()
    {
        Phaser.Scene.call(this, { key: 'frenzy' });
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
        cursors=this.input.keyboard.createCursorKeys();

    },

    update: function()
    {
        if (cursors.space.isDown) {
            console.log('From frenzy to stealth');
            cursors.space.isDown=false;
            this.scene.resume('stealth');
            this.scene.stop();
        }
    }


});
