let objectsImg, marioImg, goombaImg
let images 
let themeSong, jumpSound, coinSound
let sounds 
let game


function preload(){
    objectsImg = loadImage('assets/rain.png')
    marioImg = loadImage('assets/puffy.png')
    goombaImg = loadImage('assets/enemy.png')
    themeSong = loadSound('assets/sounds/bgm.mp3'), 
    coinSound = loadSound('assets/sounds/rain.mp3'),
    jumpSound = loadSound('assets/sounds/jump.mp3'),
    dieSound = loadSound('assets/sounds/die.mp3')

    images = {
        objectsImg,
        marioImg, 
        goombaImg
    }

    sounds = {
        themeSong, 
        jumpSound, 
        coinSound,
        dieSound,
    }
}

const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight

function setup(){
    createCanvas(canvasWidth, canvasHeight)
    background(209, 231, 243)
    frameRate(12)
    game = new Game(images, sounds)

}

function draw(){
    checkKeys()
    game.update()
    game.render()  
    
}

function checkKeys(){
    if(keyIsDown(UP_ARROW)){
        game.hero.jump()
        return
    } else if(keyIsDown(LEFT_ARROW)){
        game.hero.runLeft()
        return
    } else if(keyIsDown(RIGHT_ARROW)){
        game.hero.runRight()
        return
    }
}

function keyReleased(){
    if(keyCode === UP_ARROW){
        game.hero.clearJump()
    }
}

