const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouterDOM

import { bookService as bookService } from "../services/book.service.js"
import { showErrorMsg } from "../services/event-bus.service.js"


export function BookEdit() {

    const [bookToEdit, setBookToEdit] = useState(null)
    const navigate = useNavigate()
    const params = useParams()
    console.log('params:', params)

    useEffect(() => {
        if (params.bookId) loadBook()
    }, [])

    function loadBook() {
        bookService.get(params.bookId)
            .then(setBookToEdit)
            .catch(err => {
                console.log('Had issued in book edit:', err);
                navigate('/book')
                showErrorMsg('Book not found!')
            })
    }


    function handleChange({ target }) {
        const field = target.name
        console.log('field: ',field);
        const value = target.type === 'number' ? (+target.value || '') : target.value
        console.log('value: ',value);
        setBookToEdit(prevBook => ({ ...prevBook, [field]: value }))
   
    }

    function onSaveBook(ev) {
        ev.preventDefault()
        bookService.save(bookToEdit)
            .then(() => {
                navigate('/book')
            })
    }

    
    if(!bookToEdit) return <div>Loading...</div>
    const price = bookToEdit.listPrice.amount
    return (
        <section className="book-edit">
            <h2>{bookToEdit.id ? 'Edit' : 'Add'} Book</h2>

            <form onSubmit={onSaveBook} >
                <label htmlFor="title">Name: </label>
                <input onChange={handleChange} value={bookToEdit.title} type="text" name="title" id="title" />

                <label htmlFor="price">Price: </label>
                <input onChange={handleChange} value={price} type="number" name="price" id="price" />

                <button>{bookToEdit.id ? 'Save' : 'Add'}</button>
            </form>

        </section>
    )

}