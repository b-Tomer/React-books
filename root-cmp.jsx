
const Router = ReactRouterDOM.HashRouter;
const { Routes, Route } = ReactRouterDOM;

import { AppHeader } from "./cmps/app-header.jsx";
import { UserMsg } from "./cmps/user-msg.jsx";
import { About } from "./views/about.jsx";
import { BookDetails } from "./views/book-details.jsx";
import { BookEdit } from "./views/book-edit.jsx";
import { BookIndex } from "./views/book-index.jsx";
import { Home } from "./views/home.jsx";

export function App() {




  return (
    <Router>
      <section className="app main-layout">

       <AppHeader  />

        <main>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<BookIndex />} />
            <Route path="/book/:bookId" element={<BookDetails />} />
            <Route path="/book/edit/:bookId" element={<BookEdit />} />

          </Routes>
        </main>
      <UserMsg />
      </section>
    </Router>
  );
}
