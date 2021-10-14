class Goomba {
    constructor(images, {x, y}, size){
        this.x = x
        this.y = y
        this.size = size
        this.images = images
        this.imageCounter = 0
        this.defeated = false
        this.disabled = false
    }

    die(){
        this.imageCounter = 4
        this.disabled = true
        setTimeout(this.setDefeated, 1000)
    }

    setDefeated = () => {
        this.defeated = true
    }

    render(){
        if(!this.defeated){
            image(this.images[this.imageCounter], this.x, this.y, this.size, this.size)
        }
    }

    update(){
        if(Math.random() > 0.1){
            this.x -= 3
            if(this.imageCounter === 0){
                this.imageCounter = 1
            } else {
                this.imageCounter = 0
            }
        }

    }
}