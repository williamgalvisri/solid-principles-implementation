
// Single Responsibility
// Let's begin with the single responsibility principle. As we might expect, this principle states that a class 
// should only have one responsibility. Furthermore, it should only have one reason to change.

// Create class user
class User {
    name: string;
    lastName: string;
    password: string;

    constructor(item?: User) {
        this.name = item?.name ?? '';
        this.lastName = item?.lastName ?? '';
        this.password = item?.password ?? '';
    }
}

// Supa library to encrypting password

class EncryptedLibrary {
    encryptPassword(passwordWithNumberCharacter: string): string {
        console.log(`The passwaord was encrypted`)
        return passwordWithNumberCharacter; 
    }

    getNumberCaharacter(password: string) {
        return password.length
    }
}



class UserRepository {
    public saveToDatabase(user: User) {
        console.log(`${user.name} ${user.lastName} was created`)
    }
}

// Class that need refactor
// Reponsability of create user model.
class UserRegistry {
    constructor(private userRepository: UserRepository, private encryptUserPassword: EncryptUserPassword) {}

    public createUser(name: string, lastName: string, password: string) {

        // We note that there is an additional logic to the user definition class (Wrong)
        // const numberOfCharacter = this.encryptedLibrary.getNumberCaharacter(password);
        // const encryptedPassword = this.encryptedLibrary.encryptPassword(`${password}${numberOfCharacter}`);

        // We need create a class for this ligic
        const encryptedPassword = this.encryptUserPassword.encrypt(password);

        const newUser = new User({name, lastName, password: encryptedPassword})
        this.userRepository.saveToDatabase(newUser);
    }
}

/**
 * Solution was create a class with the method for encrypt 
 */
class EncryptUserPassword {
    constructor(private encryptedLibrary: EncryptedLibrary) {}

    encrypt(password: string) {
        const numberOfCharacter = this.encryptedLibrary.getNumberCaharacter(password);
        const encryptedPassword = this.encryptedLibrary.encryptPassword(`${password}${numberOfCharacter}`);
        return encryptedPassword;
    }
}

const encryptedLibrary = new EncryptedLibrary();
const serviceRepository = new UserRepository();
const serviceEncrypt = new EncryptUserPassword(encryptedLibrary)

new UserRegistry(serviceRepository, serviceEncrypt).createUser('Llian', 'Galvis', 'paswordStrong123');
