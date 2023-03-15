import React from 'react'
import './login.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const login = () => {
  return (
    <>
      <section class="vh-100 ">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="cards" style={{ border: '1px solid gray', borderRadius: "10px" }}>
                <div class="card-body p-5 text-center">
                  <div class="mb-md-5 mt-md-4 pb-5">
                    <h2 class="fw-bold mb-2 text-uppercase" style={{ color: "black" }}>Login</h2>
                    <p class="text-white-50 mb-5" style={{ color: "black" }}>Please enter your login and password!</p>
                    <div class="form-outline  mb-4">
                      <label class="form-label" for="typeEmailX" style={{ color: "black" }}>Email</label>
                      <input type="email" id="typeEmailX" class="form-control form-control-lg" style={{ backgroundColor: "lightgray", borderRadius: "20px" }} />
                    </div>
                    <div class="form-outline mb-4">
                      <label class="form-label" for="typePasswordX" style={{ color: "black" }}>Password</label>
                      <input type="password" id="typePasswordX" class="form-control form-control-lg" style={{ backgroundColor: "lightgray", borderRadius: "20px" }} />
                    </div>
                    <button class="btn  btn-lg px-5" type="submit" style={{ borderRadius: "20px" }}>Login</button>
                  </div>
                  <div>
                    <p class="mb-0">Don't have an account? <a href="/register" class=" fw-bold">Sign Up</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default login