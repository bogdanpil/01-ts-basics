//Задача 5. Union Type

/*1.Типізуй параметр status так, щоб дозволити тільки три конкретні рядкові значення: "loading", "success", "error"
2.Переконайся, що TypeScript не дозволяє передати будь-яке інше значення.
3.типізуй повернення функції, зауваж що вона нічого явно не повертає.
4. Залиш реалізацію функції без змін.*/


/*enum Status {
    Loading = "loading",
    Success = "success",
    Error = "error"
}*/

type Status = "loading" | "success" | "error";

function logStatus(status: Status): void {
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Success!");
  } else if (status === "error") {
    console.log("Something went wrong");
  }
}

logStatus("loading");
