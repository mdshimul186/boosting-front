import React,{useEffect,useState} from 'react';
import Link from 'next/link';
import { useDispatch,useSelector } from 'react-redux';
import * as Icon from 'react-feather'
import { ToastContainer, toast } from 'react-toastify';

import QuickView from './QuickView';

import styles from './itemsrow.module.css'

function ItemsRow({ title,products }) {
    let dispatch = useDispatch()
   

    const [modal, setModal] = useState({
        modalOpen: false,
        modalImage: '',
        price: 0,
        idd: null
    })

    

    const handleAddToCart = (id) => {
        dispatch({
            type: "ADD_TO_CART",
            id

        })
        
        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    const openModal = () => {
        setModal({...modal, modalOpen: true });
    }

    const closeModal = () => {
        setModal({...modal, modalOpen: false });
    }

    const handleModalData = (image, price, id) => {
        setModal({ 
            ...modal,
            modalImage: image, 
            price: price,
            idd: id
        });
    }

    return (
        <div className={styles.itemsContainer}>
         { modal.modalOpen ? <QuickView 
                    closeModal={closeModal} 
                    idd={modal.idd}
                    image={modal.modalImage} 
                    price={modal.price}
                /> : '' }
        <ToastContainer />
            <div className={styles.header}>
                <h4 className={styles.title}>{title}</h4>
                <Link href='/products'><a className={styles.viewAll}>View all</a></Link>
            </div>

            <div className="row">

                {products.map((data, idx) => (
                    <div className="col-lg-3 col-md-6" key={idx}>
                        <div className="single-products">
                            <div className="products-image">
                                <img src={data.image} alt="image" />

                                <ul>
                                    {/* <li>
                                        <Link href="#">
                                            <a
                                                onClick={e => {
                                                    openModal();
                                                    handleModalData(data.image, data.price, data.id)
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
                                <h3><Link href="/product-details"><a>{data.title}</a></Link></h3>
                                <span>${data.price}</span>
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
                                            e.preventDefault(); handleAddToCart(data.id)
                                        }}
                                    >
                                        Add to Cart
                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
           
        </div>
    )
}

export default ItemsRow
