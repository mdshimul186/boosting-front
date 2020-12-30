import React,{useEffect,useState} from 'react';
import Link from 'next/link';
import { useDispatch,useSelector } from 'react-redux';
import * as Icon from 'react-feather'
import { ToastContainer, toast } from 'react-toastify';
import Router from "next/router";
import QuickView from './QuickView';

import styles from './itemsrow.module.css'
import axios from 'axios';
import MyLoader from './Loader'
function ItemsRow({ category }) {
    let dispatch = useDispatch()

    const [products, setProducts] = useState([])
    //const [category2, setCategory2] = useState({})
    const [loading, setLoading] = useState(false)
    const [parent, setParent] = useState('parent')


    useEffect(()=>{
        setParent(Router.router.query.slug)
        setLoading(true)
        axios.get(`/product/categoryproduct/${category.slug}?limit=4`)
        .then(res=>{
            if(res.data.success){
                setProducts(res.data.product)
                setLoading(false)
            }
        })
        .catch(err=>{
            setLoading(false)
            console.log(err)
        })

        // setProducts(category.product)
        // setCategory2(category.category)
        
    },[category])
   

    const [modal, setModal] = useState({
        modalOpen: false,
        modalImage: '',
        price: 0,
        idd: null
    })

    

    const handleOrder = (data) => {
        dispatch({
            type: "SET_SERVICE",
            payload:data

        })

        Router.push('/checkout')
    
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
                <h4 className={styles.title}>{category.name}</h4>
                <Link href={`/services/${parent}/${category.slug}`}><a className={styles.viewAll}>View all</a></Link>
            </div>

            <div className="row">

                {
                    loading? <><MyLoader/><MyLoader/></>:
                    products.length ? products.map((data, idx) => (
                    <div className="col-lg-3 col-md-6" key={idx}>
                        <div className="single-products">
                            <div className="products-image">
                                <img style={{height:"300px",objectFit:"contain"}} src={data.productImages[0]} alt="image" />

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
                <p className='mx-5'>No services found</p>}

            </div>
           
        </div>
    )
}

export default ItemsRow
