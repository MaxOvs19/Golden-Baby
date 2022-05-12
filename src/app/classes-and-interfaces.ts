class User {
  public login = '';
  private _password = '';

  // new User()
  constructor(login: string) {
    this.login = login;
  }

  public sayHi(): void {
    console.log(`Hello! ${this.login}: ${this._password}`);
  }

  private foo(): void {}
}

/*

  function User() {
    this.login = '';
    this.password = '';
  }

  User.prototype.sayHi = function () {
    console.log(`Hello! ${this.login}`);
  }

  var user = new User();

*/

// const Max = new User('max 1'); // instance of User
// const users: User[] = [
//   new User('max 2'),
//   new User('max 3'),
//   new User('max 4'),
//   new User('max 5'),
//   new User('max 6'),
// ];

// users.forEach((user) => {
//   user.sayHi();
// });

// Max.login = 'Maximus';
// Max._password = ''; // Compile error

// Max.sayHi();
// Max.foo(); // Compile error

// let username: string = 'd;lkslsakd;;asld';

// username = (9).toString();

// let r = 10; // <=== typeof 10 === number

// r = Number('daslkjlkads');

/////////////////////////////INTERFACES/////////////////////////////////////////

// .NET framework
// IDisposible, ISerializable
// I === interface

interface IUser {
  login: string; // public login: string;
  email: string;
}

// const Max = new IUser(); // Compile error!!!!

const Max: IUser = {
  login: 'Maximus',
  email: 'Max@gmail.com',
};

interface IDestroy {
  Destroy(): void;
}

class HomeComponent implements IDestroy, IUser {
  login = '';
  email = '';
  // override
  Destroy(): void {
    console.log('HomeComponent.Destroy');
    // this.users = [];
    // this.foo = null;
  }

  foo(): void {}
}

class NewsComponent implements IDestroy {
  Destroy(): void {
    console.log('Destroy.NewsComponent');
  }

  bar(): void {}
}

// const ref: IDestroy = new NewsComponent();
// const ref: IDestroy = new User(); user os not implement interface IDestroy!!! Complile error

const refs: IDestroy[] = [new HomeComponent(), new NewsComponent()];

refs.forEach((ref) => {
  ref.Destroy();

  //instanceof only for ref-types (classes, interfaces, abstract classes). Types with constructor
  if (ref instanceof HomeComponent) {
    ref.foo();
  }

  if (ref instanceof NewsComponent) {
    ref.bar();
  }
});

// 1 instanceof NewsComponent

//typeof 1 === "number"
