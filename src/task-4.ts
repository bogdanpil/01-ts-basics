//Задача 4. Функції

/*1.Додай явну типізацію до параметрів функції: name, age та email.
2.Зроби параметр email опціональним – щоб функція могла працювати як з ним, так і без нього.
3.Типізуй повернення функції, зауваж що вона нічого явно не повертає.
4.Залиш реалізацію функції без змін.*/


function printUserInfo(name: string, age: number, email?: string): void {
  console.log("Name:", name);
  console.log("Age:", age);
  if (email) {
    console.log("Email:", email);
  }
}

printUserInfo("Alice", 30);
printUserInfo("Bob", 25, "bob@mail.com");
