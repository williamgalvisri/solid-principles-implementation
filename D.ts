// Dependency Inversion
// The principle of dependency inversion refers to the decoupling of software modules. This way, 
// instead of high-level modules depending on low-level modules, both will depend on abstractions.

class Shopping {

}

// Its wrong beacuse the high level method should'nt depend from low level method.
class ShoppingBasketExample {
    buy(shopping: Shopping) {
        const db = new SqlDatabaseExample()
        db.save(shopping);
        const creditCard = new CreditCardExample()
        creditCard.pay(creditCard);
    }
}

class SqlDatabaseExample {
    save(shopping: Shopping) {
        // Save into db
    }
}


class CreditCardExample {
    pay(shopping: Shopping) {
        // pay products
    }
}


// Solution: Now we appeal of abstraction

class ShoppingBasket {
    constructor(private persistence:Persistence, private paymentMethod: PaymentMethod) {

    }

    buy(shopping: Shopping) {
        this.persistence.save(shopping);
        this.paymentMethod.pay(shopping);
    }
}

// Definitions of sql database
interface Persistence {
    save(shopping: Shopping)
}

class SqlDatabase implements Persistence {
    save(shopping: Shopping) {
        // Save into db
    }
}

// Definitions of credit card
interface PaymentMethod {
    pay(shopping: Shopping)
}

class CreditCard implements PaymentMethod {
    pay(shopping: Shopping) {
        // pay products
    }
}

