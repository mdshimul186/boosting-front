import React,{useEffect,useState} from 'react';
import Link from 'next/link';
import { useDispatch,useSelector } from 'react-redux';
import * as Icon from 'react-feather'
import { ToastContainer, toast } from 'react-toastify';
import { addToCart } from '../../store/actions/cartActions';
import QuickView from './QuickView';
import Router from 'next/router'

const Items =({products})=> {

    let dispatch = useDispatch()
    
    const handleOrder = (data) => {
        dispatch({
            type: "SET_SERVICE",
            payload:data

        })

        Router.push('/checkout')
    
    }
  
        return (
            <section className="shop-area ptb-80">
                <ToastContainer />
                <div className="container">
                    <div className="woocommerce-topbar">
                        <div className="row align-items-center">
                            <div className="col-lg-9 col-md-7">
                                {/* <div className="woocommerce-result-count">
                                    <p>Showing 1-8 of 14 results</p>
                                </div> */}
                            </div>

                            <div className="col-lg-3 col-md-5">
                                <div className="woocommerce-topbar-ordering">
                                    <select className="form-control">
                                        <option value="1">Sort by Popularity</option>
                                        <option value="2">Sort by Average Rating</option>
                                        <option value="0">Sort by Latest</option>
                                        <option value="3">Sort by price: Low to High</option>
                                        <option value="4">Sort by price: High to Low</option>
                                        <option value="5">Sort by New</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                    {products.length ? products.map((data, idx) => (
                        <div className="col-lg-3 col-md-6" key={idx}>
                            <div className="single-products">
                                <div className="products-image">
                                <img style={{height:"300px",objectFit:"contain"}} src={data.productImages[0]} alt="image" />

                                    <ul>
                                        {/* <li>
                                            <Link href="#">
                                                <a 
                                                    onClick={e => {
                                                            e.preventDefault(); 
                                                            openModal();
                                                            handleModalData(data.image,data.price,data.id)
                                                        }
                                                    }
                                                >
                                                    <Icon.Search />
                                                </a>
                                            </Link>
                                        </li> */}
                                        <li>
                                            <a href="#"><Icon.Heart /></a>
                                        </li>
                                        <li>
                                            <Link href="/product-details">
                                                <a>
                                                    <Icon.Link />
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="products-content">
                                <h3><Link href={`/service-details/${data.slug}`}><a>{data.title}</a></Link></h3>
                                    <span>{data.price} BDT</span>
                                    <ul>
                                        <li><i className="flaticon-star-1"></i></li>
                                        <li><i className="flaticon-star-1"></i></li>
                                        <li><i className="flaticon-star-1"></i></li>
                                        <li><i className="flaticon-star-1"></i></li>
                                        <li><i className="flaticon-star-1"></i></li>
                                    </ul>
                                    <Link href="#">
                                        <a 
                                            className="add-to-cart-btn"
                                            onClick={(e) => {
                                                e.preventDefault(); handleOrder(data)
                                            }}
                                        >
                                            Order Now
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )):
                    <p>No services found</p>}

                        {/* <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                    
                                        <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                                        
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        
                                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div> */}
                    </div>
                </div>

            </section>
        );
    }


// const mapStateToProps = (state) => {
//     return {
       
//     }
// }

// const mapDispatchToProps= (dispatch) => {
//     return {
//         addToCart: (id) => { dispatch(addToCart(id)) }
//     }
// }

export default Items
