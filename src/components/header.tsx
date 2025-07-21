
// Header Component
const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom py-3 sticky-top">
      <div className="container">
        <a className="navbar-brand navbar-brand-custom" href="#">DigitalMarketer</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link nav-link-custom" aria-current="page" href="#hero">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#feedback">Feedback</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#contact">Contact</a>
            </li>
          </ul>
          <div className="d-flex ms-lg-3">
            <button className="btn btn-outline-custom me-2">Log In</button>
            <button className="btn btn-primary-custom">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;