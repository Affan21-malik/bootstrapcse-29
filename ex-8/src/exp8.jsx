function Exp8() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <div className="container">
          <a className="navbar-brand" href="#">
            Tech Store
          </a>

          <ul className="navbar-nav ms-auto d-flex flex-row gap-3">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Product Cards */}
      <div className="container mt-5">
        <div className="row">

          {/* Laptop Card */}
          <div className="col-md-4 mb-4">
            <div className="card shadow">

              <img
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
                className="card-img-top"
                alt="Laptop"
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body">

                <span className="badge bg-success mb-2">
                  New
                </span>

                <h4>Pro Laptop</h4>

                <p className="text-muted">
                  High performance laptop with 16GB RAM and 512GB SSD storage.
                </p>

                <h5 className="text-primary">
                  ₹75,999
                </h5>

                <button
                  className="btn btn-primary w-100 mt-3"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                >
                  View Details
                </button>

              </div>
            </div>
          </div>

          {/* Mobile Card */}
          <div className="col-md-4 mb-4">
            <div className="card shadow">

              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
                className="card-img-top"
                alt="Mobile"
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body">

                <span className="badge bg-danger mb-2">
                  Sale
                </span>

                <h4>Smartphone X</h4>

                <p className="text-muted">
                  Latest smartphone with 108MP camera and 5000mAh battery.
                </p>

                <h5 className="text-primary">
                  ₹29,999
                </h5>

                <button
                  className="btn btn-primary w-100 mt-3"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                >
                  View Details
                </button>

              </div>
            </div>
          </div>

          {/* Tablet Card */}
          <div className="col-md-4 mb-4">
            <div className="card shadow">

              <img
                src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0"
                className="card-img-top"
                alt="Tablet"
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body">

                <span className="badge bg-warning text-dark mb-2">
                  Popular
                </span>

                <h4>Smart Tablet</h4>

                <p className="text-muted">
                  Powerful tablet with 10" display and all-day battery life.
                </p>

                <h5 className="text-primary">
                  ₹45,999
                </h5>

                <button
                  className="btn btn-primary w-100 mt-3"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                >
                  View Details
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="myModal"
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">
                Product Details
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              This product is available with amazing features and warranty.
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center p-4 mt-5">
        © 2025 TechStore. All Rights Reserved.
      </footer>
    </>
  )
}

export default Exp8