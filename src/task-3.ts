// Задача 3. Типізація масивів

//1.Додай тип для масиву рядків usernames, використовуючи синтаксис [].
//2.Додай тип для масиву чисел ratings, використовуючи синтаксис [].
//3.Для масиву products:
//- Створи окремий інтерфейс Product для елементів масиву.
//- Типізуй сам масив за допомогою цього інтерфейсу.
//4. Залиш елементи масиву products без змін.

const usernames: string[] = ["alice", "bob", "charlie"];

const ratings: number[] = [4.5, 3.8, 5];

interface Product {
    id: number;
    title: string;
}
const products: Product[] = [
  { id: 1, title: "Phone" },
  { id: 2, title: "Laptop" },
];

console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);
