// Interface Segregation
//  larger interfaces should be split into smaller ones. By doing so, we can ensure that implementing classes only need to be 
// concerned about the methods that are of interest to them.

class ProductExample {
    name: string;
    stock: number;
    numberOfDisk: number;
    releaseDate: Date;
    // If we need create another propoerty for class video multimedia
    recomendedAge: number;
}


class CDExample implements ProductExample{
    name: string;
    stock: number;
    numberOfDisk: number;
    releaseDate: Date;
    // but CD dosn´t need recommendedAge
    recomendedAge: number;
}

class DVDExample implements ProductExample {
    name: string;
    stock: number;
    numberOfDisk: number;
    releaseDate: Date;
    // it is correct
    recomendedAge: number;
}

// Solution

class Product {
    name: string;
    stock: number;
    numberOfDisk: number;
    releaseDate: Date;
}

class AgeAware extends Product{
    // In this case we can use both class for his extention if is neccesary.
    recomendedAge: number;
}


class CD implements Product{
    name: string;
    stock: number;
    numberOfDisk: number;
    releaseDate: Date;
}

class DVD implements AgeAware {
    name: string;
    stock: number;
    numberOfDisk: number;
    releaseDate: Date;
    // it is correct
    recomendedAge: number;
}

