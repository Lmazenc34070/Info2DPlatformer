class TableauZoo extends Tableau{
    preload() {
        super.preload();
        this.load.image('star', 'assets/baie.png');
        this.load.image('deoxys', 'assets/deoxys.png');
        this.load.image('Chrysacier', 'assets/chry.png');
        this.load.image('ground', 'assets/togekiss-strat.png');
        this.load.image('spoink', 'assets/spoink.png');
        this.load.image('tarsal', 'assets/tarsal.png');
        this.load.image('groudon', 'assets/groudon.png');
        this.load.image('mew', 'assets/mew2.png');
    }
    create(){
        super.create();

        //des étoiles
        this.star1=this.physics.add.sprite(200,100,"star");
        this.star1.setCollideWorldBounds(true);
        this.star1.setBounce(0);

        this.star2=this.physics.add.sprite(400,100,"star");
        this.star2.setCollideWorldBounds(true);
        this.star2.setBounce(0.3);

        this.star3=this.physics.add.sprite(600,100,"star");
        this.star3.setCollideWorldBounds(true);
        this.star3.setBounce(0.8);

        this.star4=this.physics.add.sprite(800,100,"star");
        this.star4.setCollideWorldBounds(true);
        this.star4.setBounce(1);

        /*//Deoxys, pokemon légendaire dans sa forme la plus rapide, rapide comme l'éclair
        this.monstre=this.physics.add.sprite(300,this.sys.canvas.height-70,"deoxys");
        this.monstre.setOrigin(0,0);
        this.monstre.setDisplaySize(90,90);
        this.monstre.setCollideWorldBounds(true);
        this.monstre.setBounce(1);
        this.monstre.setVelocityX(500);
        this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);*/

        /*//Chrysacier, plus lent que lent, mais bon c'est un cocon en même temps
        this.monstre=this.physics.add.sprite(300,this.sys.canvas.height-70,"Chrysacier");
        this.monstre.setOrigin(800,0);
        this.monstre.setDisplaySize(50,50);
        this.monstre.setCollideWorldBounds(true);
        this.monstre.setBounce(1);
        this.monstre.setVelocityX(10);
        this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);*/

        //la plateforme de départ en forme de Togekiss
        let rouge=this.physics.add.sprite(10,200,"ground");
        rouge.setDisplaySize(220,90)//taille de l'objet
        this.physics.add.collider(this.star1, rouge);//l'étoile1 rebondit dessus
        rouge.setOrigin(0,0);//pour positionner plus facilement
        rouge.body.allowGravity=0; //la gravité n'a pas d'effet ici
        rouge.setImmovable(true); //ne bouge pas quand on rentre dedans
        this.physics.add.collider(this.player, rouge);//le joueur rebondit dessus*/

        /*//Abracadabra ! Groudon tombe du ciel comme par magie
        this.monstre=this.physics.add.sprite(300,this.sys.canvas.height-70,"groudon");
        this.monstre.setOrigin(3,7);
        this.monstre.setDisplaySize(90,90);
        this.monstre.setCollideWorldBounds(false);
        this.monstre.setBounce(0);
        this.monstre.setVelocityX(10);
        this.monstre.setVelocityY(-100);
        this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);*/

        /*//Mew passe au-dessus de nous, il reste pas, il est légendaire tout de même.
        this.monstre2=this.physics.add.sprite(300,this.sys.canvas.height-70,"mew");
        this.monstre2.setOrigin(-9,5);
        this.monstre2.setDisplaySize(64,64);
        this.monstre2.setCollideWorldBounds(false);
        this.monstre2.setBounce(0);
        this.monstre2.setVelocityX(-100);
        this.physics.add.overlap(this.player, this.monstre2, this.hitSpike, null, this);
        this.monstre2.body.allowGravity = false;*/



        //Le ressort innébranlabe, il rebondit sans s'arrêter 
        new Spoink(this,600,100);

        //Tarsal a peur des murs, faisons le faire demi-tour avant ceux-ci.
        new Return(this,400,height-25);
        new Groudon(this,120,-90);
        new Mew(this,700,80);
        new Speed(this,700,height-30);
        new Slow(this, 30, height-35);


        //quand le joueur touche une baie on appelle la fonction ramasserEtoile (ramasserBaie).
        this.physics.add.overlap(this.player, this.star1, this.ramasserEtoile, null, this);
        this.physics.add.overlap(this.player, this.star2, this.ramasserEtoile, null, this);
        this.physics.add.overlap(this.player, this.star3, this.ramasserEtoile, null, this);
        this.physics.add.overlap(this.player, this.star4, this.ramasserEtoile, null, this);

    }}
