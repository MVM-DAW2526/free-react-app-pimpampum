export default function DetailPage({ book, goBack }) {
  return (
    <div id="bookInfo">
      <button onClick={goBack}>Tornar enrere</button>

      {book.cover_i && (
        <img
        id={"bookCover"}
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
        alt={book.title}
        />
      )}

      <div id="bookData">
        <h2>{book.title}</h2>
        <p><strong>Autor:</strong> {book.author_name?.[0] ?? 'Desconegut'}</p>
        <p><strong>Any:</strong> {book.first_publish_year ?? 'Desconegut'}</p>
        <p><strong>Edicions:</strong> {book.edition_count ?? 'Desconegut'}</p>
      </div>
    </div> 
  )
}