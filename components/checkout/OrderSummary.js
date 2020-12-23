import React from 'react';
import { useSelector } from 'react-redux';
import Link from "next/link";
import Payment from '../Payment/Payment';
import BeatLoader from "react-spinners/BeatLoader";


const OrderSummary=({disabled,handleChange,method,loading})=>{
    const {total,addedItems} = useSelector(state=>state.cart)
    const {service} = useSelector(state=>state.checkout)
    
        
        return (
            <div className="col-lg-6 col-md-12">
                <div className="order-details">
                    <h3 className="title">Your Order</h3>

                    <div className="order-table table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Service Name</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>

                            <tbody>

                                {/* {addedItems.map((data, idx) => (
                                    <tr key={idx}>
                                        <td className="product-name">
                                            <Link href="#">
                                                <a>{data.title}</a>
                                            </Link>
                                        </td>

                                        <td className="product-total">
                                            <span className="subtotal-amount">${data.price * data.quantity}</span>
                                        </td>
                                    </tr>
                                ))} */}
                               
                                    <tr>
                                        <td className="product-name">
                                            <Link href="#">
                                                <a>{service.title}</a>
                                            </Link>
                                        </td>

                                        <td className="product-total">
                                            <span className="subtotal-amount">{service.price} BDT</span>
                                        </td>
                                    </tr>
                                
                                
                               
                                {/* <tr>
                                    <td className="order-subtotal">
                                        <span>Cart Subtotal</span>
                                    </td>

                                    <td className="order-subtotal-price">
                                        <span className="order-subtotal-amount">${total}</span>
                                    </td>
                                </tr> */}
                                <tr>
                                    <td className="order-shipping">
                                        <span>VAT</span>
                                    </td>

                                    <td className="shipping-price">
                                        <span>{(parseInt(service.VAT)/100)*parseInt(service.price)} BDT</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="total-price">
                                        <span>Order Total</span>
                                    </td>

                                    <td className="product-subtotal">
                                        <span className="subtotal-amount">{parseInt(service.price) + ((parseInt(service.VAT)/100)*parseInt(service.price))} BDT</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="payment-method">
                    <form value="discuss" onChange={handleChange}>
                        <p>
                            <input value='bkash' type="radio" id="direct-bank-transfer" name="radioGroup" />
                            <label for="direct-bank-transfer">Bkash</label>

                            <span className={method.radioGroup === 'bkash' ? 'showLabel':"hideLabel"}>
                            ০১৭৫৬০৬৩৭২৯ এই নাম্বারে আপনার বিলটি পাঠান<br></br>
                            পাঠানোর পরে ট্রাঞ্জেকশন আইডিটি এখানে দিন
                                <input value={method.paymentDetails} type='text' placeholder='Your Bkash transaction id' className='form-control' name='paymentDetails'></input>
                            </span>
                        </p>
                        <p>
                            <input value='rocket' type="radio" id="rocket" name="radioGroup" />
                            <label for="rocket">Rocket</label>

                            <span className={method.radioGroup === 'rocket' ? 'showLabel':"hideLabel"}>
                            ০১৭৫৬০৬৩৭২৯ এই নাম্বারে আপনার বিলটি পাঠান<br></br>
                            পাঠানোর পরে ট্রাঞ্জেকশন আইডিটি এখানে দিন
                                <input value={method.paymentDetails} type='text' placeholder='Your Rocket transaction id' className='form-control' name='paymentDetails'></input>
                            </span>
                        </p>
                        <p>
                            <input value='paypal' type="radio" id="paypal" name="radioGroup" />
                            <label for="paypal">PayPal</label>
                            <span className={method.radioGroup === 'paypal' ? 'showLabel':"hideLabel"}>
                                <input value={method.paymentDetails} type='text' placeholder='Enter your paypal email' className='form-control' name='paymentDetails'></input>
                            </span>
                        </p>
                        <p>
                            <input value='discuss' type="radio" id="cash-on-delivery" name="radioGroup" />
                            <label for="cash-on-delivery">By Discuss</label>
                            <span className={method.radioGroup === 'discuss' ? 'showLabel':"hideLabel"}>
                                <input value={method.paymentDetails}  type='text' placeholder='Enter payment details' className='form-control' name='paymentDetails'></input>
                            </span>
                        </p>
                        </form>
                    </div>

                    {/* <Payment 
                        amount={totalAmount * 100}
                        disabled={disabled}
                    /> */}
                    {
                        loading ?
                        <button style={{textAlign:"center"}} type='submit' disabled={true} className={`btn btn-primary order-btn 'btn-disabled'}`} >
                        <BeatLoader
                        size={15}
                        color={"#123abc"}
                        loading={true}
                        
                        />
                        </button>:
                        <button type='submit' disabled={disabled} className={`btn btn-primary order-btn ${disabled ? 'btn-disabled' : ''}`} >
                            Place Order
                        </button>
                        
                    }
                    
                </div>
            </div>
        );
    }


// const mapStateToProps = (state) => {
//     return {
//         products: state.addedItems,
//         total: state.total
//     }
// }

export default OrderSummary
