function NavBar() {
  return (
    <header className="header">
      <a href="#google.com" className="logo">
        Porto<span>folio</span>
      </a>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#hobby">Hobby</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default NavBar;
