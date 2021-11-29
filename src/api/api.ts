const baseUrl = 'https://www.googleapis.com/books/v1/volumes?';
const key = ':keyes&key=AIzaSyAi8dWSOVAgbii0WrB4XtJDY0Qq4x7g3cc';
const item = 30;

export async function getBooks(search: string, category: string, sorting: string) {
  const editedRequest = search.replaceAll(' ', '+');

  const response = await fetch(
    `${baseUrl}q=${editedRequest}+subject:${category}&orderBy=${sorting}&maxResults=${item}`,
  ).then((res) => res.json());

  const data = {
    books: response.items,
    number: response.totalItems,
  };

  return data;
}

//получить один том
//https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=yourAPIKey
