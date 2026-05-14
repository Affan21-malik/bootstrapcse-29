function ResponsivePage() {
  return (
    <>
      {/* Header */}
      <header className="bg-dark text-white text-center p-3">
        <h1>My Website</h1>
      </header>

      {/* Navbar */}
      <nav className="bg-primary p-3">
        <div className="container">
          <ul className="nav justify-content-center">

            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Contact
              </a>
            </li>

          </ul>
        </div>
      </nav>

      {/* Content Section */}
      <div className="container mt-4">
        <div className="row">

          <div className="col-md-6 col-sm-12 mb-3">
            <div className="border p-4 bg-light">
              <h3>Column 1</h3>

              <p>
                This is first column content.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 mb-3">
            <div className="border p-4 bg-light">
              <h3>Column 2</h3>

              <p>
                This is second column content.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center p-3 mt-4">
        © 2026 My Website
      </footer>
    </>
  )
}

export default ResponsivePage