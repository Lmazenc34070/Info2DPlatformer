class Tableau05 extends Tableau04{//Créer le même tableau que le 4ème 

    preload() {
        super.preload();
        this.load.image('sky-2', 'assets/backpokemon3.png');
    }
    create() {
        super.create();

        //on change de ciel, on fait une tileSprite ce qui permet d'avoir une image qui se répète
        this.sky=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'sky-2'
        );
        this.sky.setOrigin(0,0);
        //fait passer les éléments devant le ciel
        this.platforms.setDepth(10)
        this.stars.setDepth(10)
        this.player.setDepth(10)



        //modifie les plateformes
        this.platforms.children.iterate(function (child) {
            child.setDisplaySize(64,32);
            child.setX(child.x+28);
            child.setBounce(1);
        });

        //modifie les étoiles
        let me=this;
        this.stars.children.iterate(function(child){
            me.tweens.add(// tween corrsesponds au fait d'animer, d'attrbuer une animation
                {
                    targets:child,
                    rotation:Phaser.Math.DegToRad(360),
                    duration:1000,
                    repeat:-1
                } // Fait tourner les étoiles sur elle mêmes à 360° et de façpn illimité
            )
        })

    }
    update(){//Donne le mouvement au ciel (background), àa boucle de façon infine
        super.update();
        this.sky.tilePositionX++;// La position augmente en permanence
    }

}

