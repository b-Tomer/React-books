
const { useState } = React
const {Link , NavLink} = ReactRouterDOM

export function AppHeader() {
    
    const [menuBtn, setMenuBtn] = useState(false);
    let menuClass = menuBtn ? "closed" : "open";

    


  return (
    <header className="app-header full main-layout">
     
      <h1>React Books App</h1>
      <nav className={`app-nav ${menuClass}`}>
     
     <NavLink to="/" >Home</NavLink>
     <NavLink to="/about" >About</NavLink>
     <NavLink to="/book" >Books</NavLink>
      </nav>
      <button onClick={() => setMenuBtn(!menuBtn)} className="menu-btn" >
        <i className="fa-solid fa-bars"></i>
      </button>
    </header>
  );
}
