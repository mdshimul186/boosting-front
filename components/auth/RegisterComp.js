import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import Cookies from "js-cookie";
import Router from "next/router";
import CircularProgress from '@material-ui/core/CircularProgress';
import { ToastContainer, toast } from 'react-toastify';

function RegisterComp() {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [accountType, setAccountType] = useState("personal")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(false)

    let dispatch = useDispatch()

    

    const handleRegister = (e) => {
        e.preventDefault()
        setLoading(true)
        let data = {
            userName,
            email,
            accountType,
            password,
            confirmPassword
        }
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/register`, data)
            .then((res) => {
                if (res.data.success) {
                    toast.success('User registered successfully', {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true
                    })
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
        <ToastContainer />
            <div className="container">

                <form style={{ padding: "0 15vw" }}>
                    <h3 style={{ marginBottom: "10px" }} className='text-center'>Register</h3>
                    {
                        error && error.error && <div class="alert alert-danger" role="alert">
                            {error.error && error.error}
                        </div>
                    }


                    <div className="form-group">
                        <label>User name</label>
                        <input
                            value={userName}
                            onChange={(e) =>
                                setUserName(e.target.value)}
                            type="text"
                            className={`form-control ${error && error.userName && "is-invalid"}`}
                            placeholder="Enter your username" />
                        {
                            error && error.userName && <div class="invalid-feedback">{error.userName}</div>
                        }
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
                        <label>Account type</label>
                        <select value={accountType} onChange={(e)=>setAccountType(e.target.value)}  class="form-control">
                            <option value="personal">Personal</option>
                            <option value="company">Company</option>
                        </select>
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
                            isLoading ? <CircularProgress size={20} /> : "Register"
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




