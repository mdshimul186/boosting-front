import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Icon from 'react-feather'
import { ToastContainer, toast } from 'react-toastify';
import { addQuantityWithNumber } from '../../store/actions/cartActions';

class QuickView extends Component {

    state = {
        qty: 1,
        max: 10,
        min: 1
    };

    handleAddToCartFromView = () => {
        this.props.addQuantityWithNumber(this.props.idd, this.state.qty); 

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });

        setTimeout(() => {this.props.closeModal()},5000); 
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
        const { closeModal } = this.props;
        return (
            <div className="modal fade show" style={{paddingRight: '16px', display: 'block'}}>
                <ToastContainer />
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" onClick={closeModal} className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="products-image">
                                    <img src={this.props.image} alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="products-content">
                                    <h3>Wood Pencil</h3>

                                    <div className="price">
                                        <span>${this.props.price - 3}</span> ${this.props.price}
                                    </div>
                                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>

                                    <form onSubmit={this.handleSubmit}>
                                        <div className="quantity">
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
                                    </form>

                                    <div className="product-meta">
                                        <span>Category: <a href="#">Pencil</a></span>
                                        <span>Tag: <a href="#">Prints</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
)(QuickView)

