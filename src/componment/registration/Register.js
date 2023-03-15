import React, { useState,useEffect } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './register.css'
import axios from 'axios'
const Register = () => {
    const url = "http://localhost:8000/blog/view";
    const [data, setdata] = useState({
        firstName: "",
        lastName:"",
        email: "",
        mobile: "",
        gender: "",
        city:"",
        state:"",
        country:"",
        zipcode:"",
        password: ""
    });
    console.log(data)
    function submit(e) {
        e.preventDefault();
        axios.post(url, data)
            .then(res => {
                console.log(res.data)
            })
    }
    function handel(e) {
        const newdata = { ...data }
        newdata[e.target.name] = e.target.value
        setdata(newdata)
        console.log(newdata)
    }
    useEffect(() => {
        
    }, [data]);

    return (
        <>
            <section class="vh-100">
                <div class="mask d-flex align-items-center h-100">
                    <div class="container h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div class="cards" style={{ borderRadius: "15px", border: "2px solid gray" }}>
                                    <div class="card-body p-5">
                                        <h2 class="text-uppercase text-center mb-5">Create an account</h2>
                                        <form onSubmit={(e)=>submit(e)}>
                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="form3Example1cg">First Name</label>
                                                <input type="text" id="form3Example1cg" class="form-control form-control-lg" name='firstName' onChange={(e) => handel(e)} value={data.firstName} style={{ backgroundColor: "lightgray", borderRadius: "20px" }} />
                                            </div>
                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="form3Example1cg">Last Name</label>
                                                <input type="text" id="form3Example1cg" class="form-control form-control-lg" name='lastname'onChange={(e) => handel(e)} value={data.firstName} style={{ backgroundColor: "lightgray", borderRadius: "20px" }} />
                                            </div>
                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="form3Example3cg">Your Email</label>
                                                <input type="email" id="form3Example3cg" class="form-control form-control-lg"name='email' onChange={(e) => handel(e)} value={data.firstName} style={{ backgroundColor: "lightgray", borderRadius: "20px" }} />
                                            </div>
                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="form3Example3cg">mobile</label>
                                                <input type="mobile" id="form3Example3cg" class="form-control form-control-lg" name='mobile'onChange={(e) => handel(e)} value={data.firstName} style={{ backgroundColor: "lightgray", borderRadius: "20px" }} />
                                            </div>
                                            <div class="form-outline mb-4">
                                                <h6 class="mb-0 me-4">Gender: </h6>
                                                <br />
                                                <div class="form-check form-check-inline mb-0 me-4">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                                        value="option1" />
                                                    <label class="form-check-label" for="femaleGender">Female</label>
                                                </div>
                                                <div class="form-check form-check-inline mb-0 me-4">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                                        value="option2" />
                                                    <label class="form-check-label" for="maleGender">Male</label>
                                                </div>
                                                <div class="form-check form-check-inline mb-0">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                                        value="option3" />
                                                    <label class="form-check-label" for="otherGender">Other</label>
                                                </div>
                                            </div>
                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="form3Example4cg"> City</label>
                                                <select class="form-control" id="exampleFormControlSelect1" style={{ backgroundColor: "lightgray", borderRadius: "20px" }}>
                                                    <option>Surat</option>
                                                    <option>Ahmadabad</option>
                                                    <option>Vapi</option>
                                                    <option>Valsad</option>
                                                </select>
                                            </div>
                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="form3Example4cg"> State</label>
                                                <select class="form-control" id="exampleFormControlSelect1" style={{ backgroundColor: "lightgray", borderRadius: "20px" }}>
                                                    <option>Gujarat</option>
                                                    <option>panjab</option>
                                                    <option>maharashtra</option>
                                                    <option>rajsthan</option>
                                                </select>
                                            </div>
                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="form3Example4cg"> Country</label>
                                                <select class="form-control" id="exampleFormControlSelect1" style={{ backgroundColor: "lightgray", borderRadius: "20px" }}>
                                                    <option>india</option>
                                                    <option>china</option>
                                                    <option>usa</option>
                                                    <option>rashiya</option>
                                                </select>
                                            </div>
                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="form3Example4cg">Zip Code</label>
                                                <input type="password" id="form3Example4cg" class="form-control form-control-lg"name='zipcode' onChange={(e) => handel(e)} value={data.firstName} style={{ backgroundColor: "lightgray", borderRadius: "20px" }} />
                                            </div>
                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="form3Example4cg">Password</label>
                                                <input type="password" id="form3Example4cg" class="form-control form-control-lg" name='password' onChange={(e) => handel(e)} value={data.firstName} style={{ backgroundColor: "lightgray", borderRadius: "20px" }} />
                                            </div>
                                            <div class="d-flex justify-content-center">
                                                <button type="button"
                                                    class="btn  btn-block btn-lg text-body">Register</button>
                                            </div>
                                            <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="/login"
                                                class="fw-bold text-body"><u>Login here</u></a></p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}

export default Register