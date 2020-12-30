import React,{useEffect,useState} from 'react';
import Link from 'next/link';
import { useDispatch,useSelector } from 'react-redux';
import * as Icon from 'react-feather'
import { ToastContainer, toast } from 'react-toastify';
import { addToCart } from '../../store/actions/cartActions';
import QuickView from './QuickView';
import ItemsRow from './ItemsRow'
import axios from 'axios'


const Items =({categories})=> {
console.log(categories)
  
    const {products} = useSelector(state=>state.cart)

  
        return (
            <section className="shop-area ptb-80">
                <ToastContainer />
                <div className="container">
                    {/* <div className="woocommerce-topbar">
                        <div className="row align-items-center">
                            <div className="col-lg-9 col-md-7">
                                <div className="woocommerce-result-count">
                                    <p>Showing 1-8 of 14 results</p>
                                </div>
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
                    </div> */}

                    {categories && categories.map((cat,index)=>{
                        return(
                            <ItemsRow key={index} category={cat} />
                        )
                    })}
                    
                    {/* <ItemsRow title="Digital Marketing" products={products.slice(0,4)} />
                    <ItemsRow title="Mobile apps development" products={products.slice(0,4)} />
                    <ItemsRow title="Ecommerce Solution" products={products.slice(0,4)} />
                    <ItemsRow title="Creative Design" products={products.slice(0,4)} /> */}

                    
                </div>

            
            </section>
        );
    }

  
export default Items
