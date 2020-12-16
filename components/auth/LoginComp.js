import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import Cookies from "js-cookie";
import Router from "next/router";
import CircularProgress from '@material-ui/core/CircularProgress';
import { ToastContainer, toast } from 'react-toastify';

function LoginComp() {
    const [emailorusername, setEmailorusername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(false)

    let dispatch = useDispatch()

    const handleLogin = (e) => {
        e.preventDefault()
        setLoading(true)
        let data = {
            emailorusername,
            password
        }
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, data)
            .then((res) => {
                if (res.status === 200) {
                    Cookies.set("boostingbd_token", res.data.token);
                    dispatch({
                        type: "SET_USER",
                        payload: res.data.user
                    })
                    setError(null)
                    setLoading(false)
                    toast.success('Logged in successfully', {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true
                    })
                    Router.push("/");
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
                    <h3 className='text-center'>Sign In</h3>
                    {
                        error && error.error && <div class="alert alert-danger" role="alert">
                            {error.error && error.error}
                        </div>
                    }
                    <div className="form-group">
                        <label>Email or Username</label>
                        <input 
                        value={emailorusername} 
                        onChange={(e) => setEmailorusername(e.target.value)} 
                        type="text" 
                        className={`form-control ${error && error.emailorusername && "is-invalid"}`} 
                        placeholder="Enter your email or username" />
                        {
                            error && error.emailorusername && <div class="invalid-feedback">{error.emailorusername}</div>
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

                    {/* <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div> */}

                    <button onClick={(e) => handleLogin(e)} type="submit" className="btn btn-primary btn-block">
                        {
                            isLoading ? <CircularProgress size={20} /> : "Login"
                        }
                    </button>
                    <p className="forgot-password text-right">
                        Don't have an account?<Link href="/register"><a>Register now</a></Link>
                    </p>
                </form>
            </div>
        </section>
    );

}

export default LoginComp




