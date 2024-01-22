import React from 'react'

function LoginAdmin() {
  return (
    <body className="vh-100">
    <div className="authincation h-100">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-6">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <div className="text-center mb-3">
                      <a href="#"><img src="images/logo-full.png" alt="" /></a>
                    </div>
                    <h4 className="text-center mb-4">Sign in your account</h4>
                    <form action="" method="post">
                      <div className="form-group">
                        <label className="mb-1"><strong>Email</strong></label>
                        <input type="email" className="form-control" placeholder="Email" />
                      </div>
                      <div className="form-group">
                        <label className="mb-1"><strong>Password</strong></label>
                        <input type="password" className="form-control" placeholder="Password" />
                      </div>
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Thymeleaf script block content */}
  </body>
  )
}

export default LoginAdmin