const { useState, useEffect } = React
const { useNavigate } = ReactRouterDOM

import { bookService } from "../services/book.service.js";


export function AddReview({bookId}) {
    // console.log(bookId);
    const [newReview, setNewReview] = useState(null)
    const [bookToEdit, setBookToEdit] = useState(null)
    const navigate = useNavigate()
    
    useEffect(() => {
        if (bookId) loadBook()
        setNewReview(bookService.getEmptyReview())
        // loadBook()
    }, [])


    function loadBook() {
        
        bookService.get(bookId)
            .then(setBookToEdit)
            .catch(err => {
                console.log('Had issued in book edit:', err);
                showErrorMsg('Book not found!')
            })
    }

    
    function handleChange({ target }) {
        const field = target.name
        console.log('field: ', field);
        const value = target.type === 'number' ? (+target.value || '') : target.value
        console.log('value: ', value);
        setNewReview(prevReview => ({ ...prevReview, [field]: value }))

    }
    
    function onSaveBook(ev) {
        ev.preventDefault()
        console.log(bookToEdit);
        if(!bookToEdit.reviews) bookToEdit.reviews= [newReview]
        else bookToEdit.reviews.push(newReview)
        
        bookService.save(bookToEdit)
        .then(() => {
    
            navigate('/book')
            })
        }
    
    // console.log('newReview: ',newReview)
    if (!newReview) return ''
    return (
        <div className="add-review">Add your review: 
            <form onSubmit={onSaveBook} >
                <label htmlFor="name">Name: </label>
                <input onChange={handleChange} placeholder="your name" type="text" name="name" id="name" />

                <label htmlFor="stars">Stars: </label>
                <input onChange={handleChange} type="range" min='1' max='5' name="stars" id="stars" />

                <label htmlFor="txt">Comments: </label>
                <input onChange={handleChange} placeholder="Describe your feelings about the book.." type="text" name="txt" id="txt" />

                <button>{newReview.id ? 'Save' : 'Add'}</button>
            </form>
        </div>
    )
}