// const num = new Number(3);
// console.log(num);

// const num2 = new Function(3);
// console.log(num2);

/* Функция-конструктор - старый формат*/
function UserOldSynt(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello, ${this.name}`);
    };
}

UserOldSynt.prototype.exit = function () {
    console.log(`Пользователь ${this.name} вышел`);
};

/* Класс - новый формат*/
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello, ${this.name}`);
    }
    exit() {
        console.log(`Пользователь ${this.name} вышел`);
    }
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 31);

console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();

ivan.exit();
alex.exit();