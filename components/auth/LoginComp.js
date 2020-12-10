import React,{useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import Cookies from "js-cookie";
import Router from "next/router";
import CircularProgress from '@material-ui/core/CircularProgress';

function LoginComp(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(false)

    let dispatch = useDispatch()

    const handleLogin=(e)=>{
        e.preventDefault()
        setLoading(true)
        let data= {
            email,
            password
        }
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/login`,data)
        .then((res) => {
            if (res.status === 200) {
              Cookies.set("boostingbd_token", res.data.token);
              dispatch({
                  type:"SET_USER",
                  payload:res.data.user
              })
              setError(null)
              setLoading(false)
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
                <div className="container">
                  
                <form style={{padding:"0 15vw"}}>
                <h3 className='text-center'>Sign In</h3>
                {
                    error && <div class="alert alert-danger" role="alert">
                            {error.error}
                            </div>
                }
                <div className="form-group">
                    <label>Email address</label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button onClick={(e)=>handleLogin(e)} type="submit" className="btn btn-primary btn-block">
                {
                     isLoading ? <CircularProgress size={20}/>:"Login"
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




