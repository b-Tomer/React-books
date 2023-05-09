import { BookPreview } from "./book-preview.jsx";
const {Link} = ReactRouterDOM
export function BookList({ books ,onRemoveBook , onSelectBook }) {

    return (
        <ul className="book-list">
            {books.map(book =>
                <li key={book.id}>
                    <BookPreview book={book} />
                    <section className="list-btns">
                        <button className="remove-btn" onClick={() => onRemoveBook(book.id)} >X</button>
                        <Link to={`/book/${book.id}`}> Details </Link>
                        <Link to={`/book/edit/${book.id}`}> Edit </Link>
                     
                    </section>
                </li>
            )}
        </ul>
    )
}