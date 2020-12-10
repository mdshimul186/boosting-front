import React, { Component } from 'react';
import * as Icon from 'react-feather';
import { connect } from 'react-redux';
import { addQuantityWithNumber } from '../../store/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import DetailsTab from './DetailsTab';
import ProductImage from './ProductImage';

export class ProductContent extends Component {

    state = {
        qty: 1,
        max: 10,
        min: 1
    };

    handleAddToCartFromView = () => {
        this.props.addQuantityWithNumber(8, this.state.qty); 

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    IncrementItem = () => {
        this.setState(prevState => {
            if(prevState.qty < 10) {
                return {
                    qty: prevState.qty + 1
                }
            } else {
                return null;
            }
        });
    }

    DecreaseItem = () => {
        this.setState(prevState => {
            if(prevState.qty > 1) {
                return {
                    qty: prevState.qty - 1
                }
            } else {
                return null;
            }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }
    
    render() {
        return (
            <section className="shop-details-area ptb-80">
                <ToastContainer />
                <div className="container">
                    <div className="row align-items-center">
                        <ProductImage />

                        <div className="col-lg-7">
                            <div className="products-details">
                                <h3>Wood Pencil</h3>

                                <div className="price">
                                    <span>$150</span> $140
                                </div>
                                <ul className="rating">
                                    <li><i className="flaticon-star-1"></i></li>
                                    <li><i className="flaticon-star-1"></i></li>
                                    <li><i className="flaticon-star-1"></i></li>
                                    <li><i className="flaticon-star-1"></i></li>
                                    <li><i className="flaticon-star-1"></i></li>
                                </ul>

                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

                                <div className="availability">
                                    Availability: <span>In Stock</span>
                                </div>

                                <form onSubmit={this.handleSubmit}>
                                    <div className="quantity">
                                        <span>Quantity:</span>

                                        <span 
                                            className="minus-btn"
                                            onClick={this.DecreaseItem}
                                        >
                                            <Icon.Minus />
                                        </span>

                                        <input 
                                            type="text" 
                                            value={this.state.qty}
                                            min={this.state.min}
                                            max={this.state.max} 
                                            onChange={e => this.setState({ qty: e.target.value })}
                                        />

                                        <span 
                                            className="plus-btn"
                                            onClick={this.IncrementItem}
                                        >
                                            <Icon.Plus />
                                        </span>

                                    </div>
                                    <button 
                                        type="submit" 
                                        onClick={this.handleAddToCartFromView}
                                    >
                                        Add to Cart
                                    </button>

                                    <a href="#" className="add-to-wishlist-btn" title="Add to Wishlist">
                                        <Icon.Heart />
                                    </a>
                                    
                                    <div className="buy-btn">
                                        <a href="#" className="btn btn-primary">Buy it Now</a>
                                    </div>
                                </form>

                                <div className="custom-payment-options">
                                    <span>Guaranteed safe checkout:</span>

                                    <div className="payment-methods">
                                        <img src={require("../../static/images/payment-image/payment-img1.svg")} alt="image" />
                                        <img src={require("../../static/images/payment-image/payment-img2.svg")} alt="image" />
                                        <img src={require("../../static/images/payment-image/payment-img3.svg")} alt="image" />
                                        <img src={require("../../static/images/payment-image/payment-img4.svg")} alt="image" />
                                        <img src={require("../../static/images/payment-image/payment-img5.svg")} alt="image" />
                                        <img src={require("../../static/images/payment-image/payment-img6.svg")} alt="image" />
                                        <img src={require("../../static/images/payment-image/payment-img7.svg")} alt="image" />
                                    </div>
                                </div>

                                <div className="products-share-social">
                                    <span>Share:</span>

                                    <ul>
                                        <li>
                                            <a href="#" className="facebook">
                                                <Icon.Facebook />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="twitter">
                                                <Icon.Twitter />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="linkedin">
                                                <Icon.Linkedin />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="instagram">
                                                <Icon.Instagram />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <DetailsTab />

                    </div>
                </div>
            </section>
        );
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        addQuantityWithNumber: (id, qty) => {dispatch(addQuantityWithNumber(id, qty))}
    }
}

export default connect(
    null,
    mapDispatchToProps
)(ProductContent)
