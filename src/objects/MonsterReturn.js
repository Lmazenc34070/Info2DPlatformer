class Return extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
     constructor(scene, x, y) { //constructor est l'équivalent de Create dans une classe
     super(scene, x, y, "Bleu");



     //this.setBodySize(this.body.width,this.body.height);
     this.setDisplaySize(72,90);
        this.setBodySize(this.body.width,this.body.height-20);
        this.setOffset(0, 10);
        this.setBounce(0);
        this.setCollideWorldBounds(true);
        this.setVelocityX(50);
        this.setDepth(10);
        this.body.allowGravity=false;
     //this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);


     // X
     this.originalX=x;
     this.minX=x-200;
     this.maxX=x+200;

     // Y
     this.originalY=y;
     this.minY=y-5;
     this.maxY=y+5;
     // on applique les propriétés du début de l'animation
     this.x=this.minX;
     this.y=this.minY;
     this.alpha=0;
     let me=this;
     //on fait apparaitre notre objet avec un petit delay, puis on lance l'animation
     //ceci a pour effet de décaler les animations pour ce même objet
     scene.tweens.add({
         targets:this,
         duration:20,
         delay:Math.random()*1000,
         alpha:{
             startDelay:Math.random()*5000,
             from:0,
             to:1,
         },
         onComplete: function () {
             me.start();
         }
     })
     this.anims.create({
         key: 'left',
         frames: this.anims.generateFrameNumbers('Bleu', { start: 0, end: 2 }),
         frameRate: 5,
         repeat: -1
     });

     /*this.anims.create({
         key: 'right',
         frames: this.anims.generateFrameNumbers('enemy', { start: 5, end: 8 }),
         frameRate: 10,
         repeat: -1
     });
     this.anims.create({
         key: 'turn',
         frames: [ { key: 'enemy', frame: 4 } ],
         frameRate: 20
     });*/

     this.anims.play('left', true);


 }
 set directionX(value){
     this._directionX=value;
 }

 start(){
     this.scene.tweens.add({
         targets: this,
         x: {
             from: this.minX,
             to:this.maxX,
             duration: 10*250,
             ease: 'Sine.easeInOut',
             yoyo: -1,
             repeat:-1,
             flipX:true,
         },
         /*y: {
             from: this.minY,
             to:this.maxY,
             duration: 500,
             ease: 'Sine.easeInOut',
             yoyo: -1,
             repeat:-1
         }*/
     });
 }

}