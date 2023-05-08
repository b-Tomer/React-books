const { useState, useEffect } = React;
const Router = ReactRouterDOM.HashRouter;
const { Routes, Route } = ReactRouterDOM;

import { AppHeader } from "./cmps/app-header.jsx";
import { About } from "./views/about.jsx";
import { BookDetails } from "./views/book-details.jsx";
import { BookIndex } from "./views/book-index.jsx";
import { Home } from "./views/home.jsx";

export function App() {

  const [page, setPage] = useState("book");
 

  function onSetPage(page){
    setPage(page)
  }



  return (
    <Router>
      <section className="app main-layout">

       <AppHeader onSetPage={onSetPage}  />

        <main>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<BookIndex />} />
            <Route path="/book/:bookId" element={<BookDetails/>} />
          </Routes>
        </main>
      </section>
    </Router>
  );
}
