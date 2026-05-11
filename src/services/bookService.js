export async function searchBooks(query) {
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=20`
  );
  if (!response.ok) throw new Error('Error en la cerca de llibres');
  const data = await response.json();
  return data.docs;
}