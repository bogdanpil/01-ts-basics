//Завдання 8. HTTP-запити

/*1.Інсталюй бібліотеку axios командою npm i axios
2.Створи інтерфейс Post, який описує об'єкт поста з такими полями:
id: число
title: рядок
body: рядок
3. Типізуй axios.get, щоб вказати, що API повертає масив постів.*/



import axios from "axios";

interface Post {
id: number;
title: string;
body: string;
}

async function fetchPosts() {
  const response = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
}

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});
