export const getSearchUrl = (query) =>
  `https://openlibrary.org/search.json?q=${encodeURIComponent(query.trim())}&limit=20`;