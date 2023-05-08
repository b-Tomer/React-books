import { BookPreview } from "./book-preview.jsx";
const {Link} = ReactRouterDOM
export function BookList({ books ,onRemoveBook , onSelectBook }) {

    return (
        <ul className="book-list">
            {books.map(book =>
                <li key={book.id}>
                    <BookPreview book={book} />
                    <section>
                        <button onClick={() => onRemoveBook(book.id)} >X</button>
                        <Link to={`/book/${book.id}`}> Details </Link>
                     
                    </section>
                </li>
            )}
        </ul>
    )
}