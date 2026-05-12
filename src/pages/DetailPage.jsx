export default function DetailPage({ book, goBack }) {
  return (
    <div>
      <button onClick={goBack}>Tornar enrere</button>

      {book.cover_i && (
        <img
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
        alt={book.title}
        />
      )}

      <h2>{book.title}</h2>
      <p><strong>Autor:</strong> {book.author_name?.[0] ?? 'Desconegut'}</p>
      <p><strong>Any:</strong> {book.first_publish_year ?? 'Desconegut'}</p>
      <p><strong>Edicions:</strong> {book.edition_count ?? 'Desconegut'}</p>
    </div> 
  )
}