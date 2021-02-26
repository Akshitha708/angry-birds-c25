class bird extends baseClass {
    constructor(x,y){
       super(x,y,70,70)
       this.image = loadImage("spritesimg/bird.png")
    }

    display(){
        super.display()
        this.body.position.x = mouseX
        this.body.position.y = mouseY
    }
}
    