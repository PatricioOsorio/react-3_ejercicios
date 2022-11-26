const Header = () => {
  return (
    <header className="mb-3">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary text-white shadow">
        <div className="container">
          <a
            className="navbar-brand text-white"
            asp-controller="Home"
            asp-action="Index"
          >
            <img
              src="./logo.png"
              alt="Logotipo"
              width="30"
              height="30"
              className="d-inline-block align-text-top me-3"
            />
            Ejercicios con React
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
