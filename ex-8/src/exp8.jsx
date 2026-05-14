function Exp8() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Tech Store
          </a>
        </div>
      </nav>

      {/* Cards */}
      <div className="container mt-4">
        <div className="row">

          <div className="col-md-4 mb-3">
            <div className="card p-3">

              <h3>Laptop</h3>

              <p>
                Simple laptop description
              </p>

              <span className="badge bg-success">
                New
              </span>

              <button
                className="btn btn-primary mt-3"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                View Details
              </button>

            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card p-3">

              <h3>Mobile</h3>

              <p>
                Simple mobile description
              </p>

              <span className="badge bg-danger">
                Sale
              </span>

              <button
                className="btn btn-primary mt-3"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                View Details
              </button>

            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card p-3">

              <h3>Headphones</h3>

              <p>
                Simple headphones description
              </p>

              <span className="badge bg-warning text-dark">
                New
              </span>

              <button
                className="btn btn-primary mt-3"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                View Details
              </button>

            </div>
          </div>

        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="myModal">
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
              Product information shown here.
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
      <footer className="bg-dark text-white text-center p-3 mt-4">
        Copyright © 2026
      </footer>
    </>
  )
}

export default Exp8