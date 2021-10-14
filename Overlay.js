class Overlay{
    constructor(text1, text2, startButton){
        this.text1 = text1 
        this.text2 = text2
        this.startButton = startButton 
        this.startButton.position(gameSettings.overlayX, gameSettings.overlayY + 3)
       
       
    }
    render(){
        strokeWeight(0)
        fill(gameSettings.overlayColor)
        rect(gameSettings.overlayX, gameSettings.overlayY, gameSettings.overlayWidth, gameSettings.overlayHeight, gameSettings.radius)
        fill(255)
        stroke(255)
        textSize(gameSettings.textSize)
        text(this.text1, gameSettings.overlayX + 56, gameSettings.overlayY + 36)
        text(this.text2, gameSettings.overlayX + 80, gameSettings.overlayY + 100)
       
    }
}