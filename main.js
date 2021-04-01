
let width=14*64; //896;
let height=7*64; //448;

let config = {
    type: Phaser.AUTO,
    pixelArt : true,


    physics: {
        pixelArt: true,
        zoom: 4,
        default: 'arcade',
        arcade: {
            gravity: { y: 100*3 },
            debug: false,
        }
    },
    scene: [
        new Ui(),
        new Tableau08("1er niveau"),
        new TableauMario("Vive les champis"),
        new TableauTiled("Truc de fou"),
        new TableauZoo("Le zoo ! (Chrysacier va pas tarder)"),
        new Tableau06("Un Dracaufeu sauvage, attention !"),
        new Tableau05("Extend un tableau noir"),
        
        new Tableau00A("Toto"),
        new Tableau01("Des formes plates"),
        new Tableau02("Plein de toilettes"),
        new Tableau03("Des bouge qui platforment"),
        new Tableau04("Jouer de la musique avec les groupes de musique"),
       
        
        new Tableau07("Un monstre du doigx volant du doigx!"),
        
    ],
    width: width,
    height: height,
    scale: {
        mode: Phaser.Scale.FIT,
        orientation:Phaser.Scale.LANDSCAPE,
        parent: 'game',
        width: width,
        height: height,
        min: {
            width: 0,
            height: 0
        },
        max: {
            width: width*1.5,
            height: height*1.5
        },
        autoCenter:Phaser.Scale.Center.CENTER_BOTH

    },
    autoRound: false
};
let game;
function resize() {
    /*
    var canvas = document.querySelector("canvas");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = game.config.width / game.config.height;
    if(windowWidth<width || windowHeight<height){
        if(windowRatio < gameRatio){
            canvas.style.width = windowWidth + "px";
            canvas.style.height = (windowWidth / gameRatio) + "px";
        }
        else {
            canvas.style.width = (windowHeight * gameRatio) + "px";
            canvas.style.height = windowHeight + "px";
        }
    }else{
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
    }

     */

}
window.onload = function() {
    game=new Phaser.Game(config);
    window.addEventListener("resize", resize, false);
    window.addEventListener("scroll", resize, false);
}