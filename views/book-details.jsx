import { LongTxt } from "../cmps/long-txt.jsx"
import { bookService } from "../services/book.service.js"
const {Link } = ReactRouterDOM

const {useState , useEffect} = React
const {useParams} = ReactRouterDOM 


export function BookDetails({ onBack }) {


    const [book , setBook] = useState(null)
    const params = useParams()


    useEffect(()=>{
        bookService.get(params.bookId).then(setBook)
        console.log(params);
    },[])
    



    function checkPages() {
        if(!book) return
        const pageCount = book.pageCount
        let pagesTxt
        if (pageCount > 500) pagesTxt = 'Serious reading'
        else if (pageCount > 200) pagesTxt = 'Decent reading'
        else if (pageCount < 100) pagesTxt = 'Light reading'
        return pagesTxt
    }

    checkVintage()
    function checkVintage() {
        if(!book) return
        const year = new Date().getFullYear()
        const publishDate = book.publishedDate
        const deff = year - publishDate
        let publishTxt = (deff > 10) ? 'Vintage' : 'New'
        return publishTxt
    }

    function priceClass(){
        if(!book) return
        let price = book.listPrice.amount
        let classPrice  =''
        if(price>150) classPrice = 'red'
        if(price<20) classPrice = 'green'
        return classPrice
    }

    function saleTxt(){
        if(!book) return
        let txt = ''
        let isOnsale= book.listPrice.isOnSale
        if(isOnsale) txt = 'ON SALE!'
        return txt
    }

    
    if(!book) return <div>Loading.....</div>


        return (
            <section className="book-details">
            <h1>{book.title}</h1>
            <h4>{book.subtitle}</h4>
            <h3>Author: {book.authors}</h3>
            <h4 className={priceClass()}>Price: {book.listPrice.amount } {book.listPrice.currencyCode} </h4>
            <h4 className="red">{saleTxt()}</h4>
            <h5>Pages: {book.pageCount} - {checkPages()}</h5>
            <h5>Publish at: {book.publishedDate} - {checkVintage()}</h5>
            <img src={book.thumbnail} />
            <LongTxt text = {book.description}/>
            <Link to="/book">Back</Link>
            
        </section>
    )

}