//Задача 7. Типізація Promise

/*1.Додай до функції явну типізацію, яка вказує, що вона повертає проміс.
2.Переконайся, що значення, з яким виконається проміс, – це рядок (string).*/ 


function getMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from TS");
    }, 1000);
  });
}

getMessage().then(result => console.log(result));


/*function getMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
}*/ 