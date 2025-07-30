//Задача 6. Узагальнені типи

/*1 Зроби функцію узагальненою, використовуючи тип T, щоб вона працювала з масивами 
будь-якого типу.
2 Додай явну типізацію дженериків у виклики функцій.
3 Переконайся, що тип елемента, який повертається, точно відповідає типу елементів у масиві.
4 Перевір, що TypeScript не дозволяє передати масив змішаних типів без відповідного типу.*/

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement(["a", 1, true]);
//getFirstElement<string>(["a", 1, true]);


getFirstElement<number>([1, 2, 3]);           // 1
getFirstElement<string>(["a", "b", "c"]);     // "a"
getFirstElement<boolean>([true, false, true]); // true
