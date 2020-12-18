import React from 'react';
import { useSelector } from 'react-redux';
import Link from "next/link";
import Payment from '../Payment/Payment';


const OrderSummary=({disabled,handleChange})=>{
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
                                        <span>{service.VAT} BDT</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="total-price">
                                        <span>Order Total</span>
                                    </td>

                                    <td className="product-subtotal">
                                        <span className="subtotal-amount">{parseInt(service.price) + parseInt(service.VAT)} BDT</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="payment-method">
                    <form value="discuss" onChange={handleChange}>
                        <p>
                            <input value='bank' type="radio" id="direct-bank-transfer" name="radio-group" />
                            <label for="direct-bank-transfer">Direct Bank Transfer</label>

                            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                        </p>
                        <p>
                            <input value='paypal' type="radio" id="paypal" name="radio-group" />
                            <label for="paypal">PayPal</label>
                        </p>
                        <p>
                            <input value='discuss' type="radio" id="cash-on-delivery" name="radio-group" />
                            <label for="cash-on-delivery">By Discuss</label>
                        </p>
                        </form>
                    </div>

                    {/* <Payment 
                        amount={totalAmount * 100}
                        disabled={disabled}
                    /> */}
                    <button type='submit' disabled={disabled} className={`btn btn-primary order-btn ${disabled ? 'btn-disabled' : ''}`} >
                            Place Order
                        </button>
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
