# p5.play-boilerplate
Boiler plate for p5.play

Inheritance- getting the properties from parent class to the child classes
parent class will have all the lines of code and child class can avoid writing them by just using a simple syntax.
PARENT CLASS
class baseClass{
    constructor(){

    }
    func1(){

    }
    func2(){

    }
}

CHILD CLASS
class childClass1 extends baseClass{
    constructor(){
        super();
    }
    func3(){
        super.func2()
    }
}


Using Images:
How do we load image?

we load image in the function preload or in the constructor using loadImage()

to  setbackground
background(variable where image is loaded)

to display the display the image
image(variable, x,y,w,h)

imageMode(CENTER) to make the x and y as center coordinates instead of top left ones.