class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}mayank`
        // return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const mayank = new User("m@mayank.ai", "abc")
console.log(mayank.password);
console.log(mayank.email);