import React from 'react';
import Link from "next/link";
import * as Icon from 'react-feather'
import { ToastContainer, toast, Slide } from 'react-toastify';
import { useDispatch,useSelector } from 'react-redux';


const CartContent =()=> {
    const {addedItems,total} = useSelector(state=>state.cart)
    let dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch({
            type: "REMOVE_ITEM",
            id
        })

        toast.error('Removed from cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }
    //to add the quantity
    const handleAddQuantity = (id)=>{
        dispatch({
            type: "ADD_QUANTITY",
            id
        })
    }
    //to substruct from the quantity
    const handleSubtractQuantity = (id)=>{
        dispatch({
            type: "SUB_QUANTITY",
            id
        })
    }


        let cartItems = addedItems.length ? addedItems.map((data, idx) => {
                return(
                    <tr key={idx}>
                        <td className="product-thumbnail">
                            <a href="#">
                                <img src={data.image} alt="item" />
                            </a>
                        </td>

                        <td className="product-name">
                            <a href="#">{data.title}</a>
                        </td>

                        <td className="product-price">
                            <span className="unit-amount">${data.price}</span>
                        </td>

                        <td className="product-quantity">
                            <div className="input-counter">
                                    <span 
                                        className="minus-btn"
                                        onClick={()=>{handleSubtractQuantity(data.id)}}
                                    >
                                        <Icon.Minus />
                                    </span>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={data.quantity} 
                                        min="1" 
                                        max={10} 
                                        readOnly={true}
                                        onChange={e => (e)}
                                    />
                                    <span 
                                        className="plus-btn"
                                        onClick={()=>{handleAddQuantity(data.id)}}
                                    >
                                        <Icon.Plus />
                                    </span>
                                </div>
                        </td>

                        <td className="product-subtotal">
                            <span className="subtotal-amount">${data.price * data.quantity}</span>

                            <Link href="#">
                                <a
                                    onClick={(e)=>{e.preventDefault();handleRemove(data.id)}}
                                >
                                    <Icon.Delete />
                                </a>
                            </Link>
                        </td>
                    </tr>
                )
            }): 
            <tr>
                <td className="product-thumbnail">
                    <p>Empty.</p>
                </td>
            </tr>
        


        return (
            <section className="cart-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <form>
                                <div className="cart-table table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Unit Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {cartItems}
                                        </tbody>
                                    </table>
                                </div>
                                <ToastContainer transition={Slide} />
                                <div className="cart-buttons">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 col-md-5">
                                            <div className="continue-shopping-box">
                                                <Link href="/products">
                                                    <a className="btn btn-light">Continue Shopping</a>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="col-lg-7 col-md-7">
                                            {/* <a href="#" className="btn btn-light">Update Cart</a> */}
                                            <div className="cart-totals">
                                                <h3>Cart Totals</h3>

                                                <ul>
                                                    <li>Subtotal <span>${total}</span></li>
                                                    <li>Shipping <span>$0</span></li>
                                                    <li>Total <span><b>${total}</b></span></li>
                                                </ul>
                                                <Link href="/checkout">
                                                    <a className="btn btn-primary">Proceed to Checkout</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    
}

// const mapStateToProps = (state) => {
//     return {
//         products: state.addedItems,
//         total: state.total
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         removeItem: (id) => {dispatch(removeItem(id))},
//         addQuantity: (id) => {dispatch(addQuantity(id))},
//         subtractQuantity: (id) => {dispatch(subtractQuantity(id))}
//     }
// }

export default CartContent

