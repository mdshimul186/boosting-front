import React, { useState, useEffect } from 'react';
import OrderSummary from './OrderSummary';
import useForm from './userForm';
import Link from 'next/link'
import Router from 'next/router'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

function CheckoutBody() {
    const { authenticated } = useSelector(state => state.auth)
    const { service } = useSelector(state => state.checkout)
    const [activeButton, setActiveButton] = useState(true)
    const [loading, setLoading] = useState(false)


    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [method, setMethod] = useState({radioGroup:'',paymentDetails:''})


    const toastMsg = (type, message) => {
        if (type === 'success') {
            toast.success(message, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            })
        } else if (type === 'error') {
            toast.error(message, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            })
        }

    }

    function handleOnSubmit(e) {
        e.preventDefault()
       setLoading(true)
        let data ={
            product:service._id,
            total:parseInt(service.price) + ((parseInt(service.VAT)/100)*parseInt(service.price)),
            paymentMethod:method.radioGroup,
            name,
            mobile:number,
            paymentDetails:method.paymentDetails
        }
        console.log(data)
        axios.post('/order/create',data)
        .then(res=>{
            if(res.data.success){
                setLoading(false)
                toastMsg('success', 'Order placed successfully')
                Router.push("/dashboard?tab=purchase-summary")
            }
            
        })
        .catch(err=>{
            setLoading(false)
            err && err.response && toastMsg('error', err.response.data.error)
        })
    }

    const handleChange=(e)=>{
        console.log({[e.target.name]:e.target.value})
        if(e.target.value==='bkash'||e.target.value==='rocket'||e.target.value==='paypal'||e.target.value==='discuss')
        {
            setMethod({[e.target.name]:e.target.value,paymentDetails:''})
        }else{
            setMethod({...method,[e.target.name]:e.target.value})
        }
       
    }


    useEffect(() => {
        if (authenticated) {
            if (number.length && name.length && method.radioGroup.length && method.paymentDetails.length) {
                return setActiveButton(false)
            } else {
                return setActiveButton(true)
            }

        } else {
            return setActiveButton(true)
        }
    })


    useEffect(()=>{
        if(Object.keys(service).length === 0){
            Router.push('/services')
        }
    },[service])


    return (
        <section className="checkout-area ptb-80">
        <ToastContainer />
            <div className="container">

                {/* <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="user-actions">
                            <i data-feather="edit"></i>
                            <span>Returning customer? <a href="#">Click here to login</a></span>
                        </div>
                    </div>
                </div> */}



                <form onSubmit={handleOnSubmit}>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="billing-details">
                                <h3 className="title">User Details</h3>

                                <div className="row">
                                    {
                                        authenticated &&
                                        <>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label>Full Name <span className="required">*</span></label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        onChange={(e) => setName(e.target.value)}
                                                        value={name}

                                                    />
                                                </div>
                                            </div>




                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label>Phone <span className="required">*</span></label>
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        className="form-control"
                                                        onChange={(e) => setNumber(e.target.value)}
                                                        value={number}
                                                    />

                                                </div>
                                            </div>
                                        </>
                                    }


                                    {
                                        !authenticated && (
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-check">
                                                    <div className="user-actions">
                                                        <i data-feather="edit"></i>
                                                        <span>Returning customer?
                                                        <Link href="/login">Click here to login</Link>
                                                        </span><br></br>
                                                        <p>Or</p>
                                                        <span>
                                                            <Link href="/register">Create an account?</Link>
                                                        </span>
                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    }


                                    {/* <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="notes" id="notes" cols="30" rows="4" placeholder="Order Notes" className="form-control" />
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <OrderSummary loading={loading} method={method} handleChange={handleChange} disabled={activeButton} />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default CheckoutBody;
