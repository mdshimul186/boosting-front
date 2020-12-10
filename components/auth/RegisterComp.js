import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import Cookies from "js-cookie";
import Router from "next/router";
import CircularProgress from '@material-ui/core/CircularProgress';

function RegisterComp() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(false)

    let dispatch = useDispatch()

    const handleRegister = (e) => {
        e.preventDefault()
        setLoading(true)
        let data = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        }
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/register`, data)
            .then((res) => {
                if (res.data.success) {
                    alert("register success");
                    setError(null)
                    setLoading(false)
                    Router.push("/login");
                }
            })
            .catch((err) => {
                setLoading(false)
                err && err.response && setError(err.response.data)

            });
    }
    return (
        <section className="pricing-area ptb-80 bg-f9f6f6">
            <div className="container">

                <form style={{ padding: "0 15vw" }}>
                    <h3 style={{ marginBottom: "10px" }} className='text-center'>Register</h3>
                    {
                        error && error.error && <div class="alert alert-danger" role="alert">
                            {error.error && error.error}
                        </div>
                    }

                    <div class="form-row">
                        <div class="col">
                            <div className="form-group">
                                <label for='firstName'>First Name</label>
                                <input value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    type="text" 
                                    className={`form-control ${error && error.firstName && "is-invalid"}`}
                                    placeholder="Enter your first name"
                                    id="firstName"

                                />
                                {
                                    error && error.firstName && <div class="invalid-feedback">{error.firstName}</div>
                                }
                            </div>
                        </div>
                        <div class="col">
                            <div className="form-group">
                                <label>Last Name</label>
                                <input 
                                value={lastName} 
                                onChange={(e) => setLastName(e.target.value)} 
                                type="text" 
                                className={`form-control ${error && error.lastName && "is-invalid"}`} 
                                placeholder="Enter your last name" />
                                {
                                    error && error.lastName && <div class="invalid-feedback">{error.lastName}</div>
                                }
                            </div>
                        </div>
                    </div>



                    <div className="form-group">
                        <label>Email address</label>
                        <input 
                        value={email} 
                        onChange={(e) => 
                        setEmail(e.target.value)} 
                        type="email" 
                        className={`form-control ${error && error.email && "is-invalid"}`} 
                        placeholder="Enter email" />
                        {
                            error && error.email && <div class="invalid-feedback">{error.email}</div>
                        }
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        type="password" 
                        className={`form-control ${error && error.password && "is-invalid"}`}
                        placeholder="Enter password" />
                        {
                            error && error.password && <div class="invalid-feedback">{error.password}</div>
                        }
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        type="password" 
                        className={`form-control ${error && error.confirmPassword && "is-invalid"}`}
                        placeholder="Enter confirm password" />
                         {
                            error && error.confirmPassword && <div class="invalid-feedback">{error.confirmPassword}</div>
                        }
                    </div>

                    <button onClick={(e) => handleRegister(e)} type="submit" className="btn btn-primary btn-block">
                    {
                        isLoading ? <CircularProgress size={20}/>:"Register"
                    }
                    
                    </button>
                    <p className="forgot-password text-right">
                        Already have an account?<Link href="/login"><a>Login now</a></Link>
                    </p>
                </form>
            </div>
        </section>
    );

}

export default RegisterComp




