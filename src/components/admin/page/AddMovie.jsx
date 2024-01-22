import React from 'react'

function AddMovie() {
  return (
    <>
    {/* Thymeleaf head block content */}
    <div id="preloader">
      <div className="sk-three-bounce">
        <div className="sk-child sk-bounce1"></div>
        <div className="sk-child sk-bounce2"></div>
        <div className="sk-child sk-bounce3"></div>
      </div>
    </div>
    <div id="main-wrapper">
      {/* Thymeleaf layout block content */}
      {/* todo content */}
      <div className="content-body">
        <div className="container-fluid">
          {/* row */}
          <div className="row">
            <div className="col-xl-12 col-xxl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Add Movie</h4>
                </div>
                <div className="card-body">
                  <div className="basic-form">
                    <form method="post" action="" encType="multipart/form-data">
                      <div className="row mb-2">
                        <div>
                          <label className="form-label">Movie Name</label>
                          <input type="text" className="form-control" placeholder="Movie Name" />
                          {/* Thymeleaf error message */}
                        </div>
                      </div>
                      {/* ... (similar modifications for other form fields) ... */}
                      <div className="row my-2">
                        <label className="form-label">Genres</label>
                        <div className="row">
                          {/* Thymeleaf loop for genres */}
                          {/* ... (map through genres and create checkboxes) ... */}
                        </div>
                      </div>

                      <button type="submit" className="btn btn-primary mt-3">
                        Add Movie
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="copyright">
          <p>
            Copyright © Designed &amp; Developed by{' '}
            <a href="#" target="_blank">
              DexignZone
            </a>{' '}
            2022
          </p>
        </div>
      </div>
    </div>

    {/* Thymeleaf script block content */}
    {/* Thymeleaf picker block content */}
  </>
)}

export default AddMovie;
