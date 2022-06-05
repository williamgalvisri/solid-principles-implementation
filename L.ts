// Liskov Substitution

//  if class A is a subtype of class B, we should be able to replace B with A without disrupting the behavior of our program.


interface DuckExample {
    fly();
    swim();
    cuakck();
}

class RealDuckExample implements DuckExample {
    fly(): void {
        console.log('Real duck can fly');
    } 

    swim(): void {
        console.log('Real duck swim');
    }

    cuakck(): void {
        console.log('Cuack')
    }
}

// This is a mistake beacause Rubber duck cant fly

class RubberDuckExmaple implements DuckExample {
    fly(): void {
        throw new Error('Cant fly')
    } 

    swim(): void {
        console.log('Real duck swim');
    }

    cuakck(): void {
        console.log('Cuack')
    }
}


// Solution separate in functionality interface
interface IFly {
    fly()
}

interface ISwim {
    swim()
}

interface ICuack {
    cuack()
}


class RealDuck implements IFly, ISwim, ICuack {
    fly() { 
        
    }
    swim(){

    }
    cuack() {

    }
}

class RubberDuck implements ISwim, ICuack {

    swim(): void {
        console.log('Real duck swim');
    }

    cuack() {
        console.log('Cuack')
    }
}



