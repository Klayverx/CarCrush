import { drawBackground, loadAssets } from "./image.js";
import Player from "./Player.js";
import Enemy from "./Enemy.js"
import { random } from "./util.js";

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

let gameOver = false;

let gameTick = 100;
let newCarTick = 100;

const player = new Player(context, 236, 720);

const enemys = [];

document.addEventListener("keydown", (event) => {
    if(event.key === 'ArrowLeft'){
        player.move('LEFT');
    }

    if(event.key === 'ArrowRight'){
        player.move('RIGHT');
    }
});

loadAssets();

function update() {
    drawBackground(context);

    
    if(gameTick > newCarTick){
        enemys.push(new Enemy(context));
        gameTick = random(0,100);
    }
    gameTick++;


    player.show();

    enemys.forEach((enemy,index) => {
        enemy.update();

        if(player.collide(enemy)){
            gameOver = true;
        }

        if(enemy.die()){
            enemys.splice(index, 1);
        }
        enemy.show();
    });

    if(!gameOver){
        requestAnimationFrame(update);
    }
    
}

update();