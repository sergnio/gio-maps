'use server'

export const getThings = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const res = await fetch(url);
  return await res.json();
}


