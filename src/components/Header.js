
export const Header = ()=>{
  return(
    <header>
      <div className="judul">
        <h1>Toko Buku Asadel</h1>
      </div>
      <nav className="navbar navbar-expand-lg nav">
        <div className="navbar-brand">Toko Buku Paling Lengkap!</div>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link nav-btn" href="/">New Arrival</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-btn" href="/search/Book Title">Search</a>
            </li>
          </ul>
        </div>
      </nav>
    </header> 
  )
}