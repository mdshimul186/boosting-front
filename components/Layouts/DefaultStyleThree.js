import React,{useState,useEffect} from 'react'
import Router from 'next/router';
import { useSelector } from 'react-redux'
import Link from '../common/ActiveLink'
import * as Icon from 'react-feather';

const DefaultStyleThree =()=> {

    const [collapsed, setCollapsed] = useState(true)
    const auth = useSelector(state=>state.auth)
    const {addedItems} = useSelector(state=>state.cart)

    const toggleNavbar = () => {
        setCollapsed(!collapsed)
    }

    useEffect(()=>{
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    },[])
        
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    
        // let { pathname } = Router;
        let layOutCls = '';
        // if (pathname == '/home-three'){
        //     layOutCls = 'p-relative';
        // }
    
        

        
        return (
            <header id="header" className="navbar-style-three agency-navbar">
                <div id="navbar" className={`startp-nav ${layOutCls}`}>
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a 
                                    className="navbar-brand"
                                    onClick={() => window.location.refresh()}
                                >
                                    <img src={require("../../static/images/logo.png")} alt="logo" />
                                </a>
                            </Link>

                            <button 
                                onClick={()=>toggleNavbar()} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
    
                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav nav">
                                    <li className="nav-item">
                                    <Link activeClassName="active" href="/">
                                            <a className="nav-link">Home</a>
                                        </Link>
                                        
                                    </li>

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/about">
                                            <a className="nav-link">About</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/services">
                                            <a className="nav-link">Services</a>
                                        </Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link activeClassName="active" href="#">
                                            <a href="#" className="nav-link">Pages <Icon.ChevronDown /></a>
                                        </Link>
                                        <ul className="dropdown_menu">
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/features">
                                                    <a className="nav-link">Features</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="#">
                                                    <a className="nav-link">Services</a>
                                                </Link>
                                                <ul className="dropdown_menu">
                                                    <li className="nav-item">
                                                        <Link activeClassName="active" href="/services">
                                                            <a className="nav-link">Services</a>
                                                        </Link>
                                                    </li>
                                                    
                                                    <li className="nav-item">
                                                        <Link activeClassName="active" href="/service-details">
                                                            <a className="nav-link">Service Details</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="#">
                                                    <a className="nav-link">Project</a>
                                                </Link>
                                                <ul className="dropdown_menu">
                                                    <li className="nav-item">
                                                        <Link activeClassName="active" href="/project">
                                                            <a className="nav-link">Project</a>
                                                        </Link>
                                                    </li>
                                                    
                                                    <li className="nav-item">
                                                        <Link activeClassName="active" href="/project-details">
                                                            <a className="nav-link">Project Details</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
    
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/team">
                                                    <a className="nav-link">Team</a>
                                                </Link>
                                            </li>
    
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/pricing">
                                                    <a className="nav-link">Pricing</a>
                                                </Link>
                                            </li>
                                            
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/faq">
                                                    <a className="nav-link">FAQ</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    activeClassName="active" 
                                                    href="/coming-soon"
                                                >
                                                    <a className="nav-link">Coming Soon</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    activeClassName="active" 
                                                    href="/error"
                                                >
                                                    <a className="nav-link">Error Status</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    {/* <li className="nav-item">
                                        <a href="#" className="nav-link">Shop <Icon.ChevronDown /></a>
                                        <ul className="dropdown_menu">
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/products">
                                                    <a className="nav-link">Products</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/product-details">
                                                    <a className="nav-link">Products Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li> */}

                                    {/* <li className="nav-item">
                                        <Link activeClassName="active" href="#">
                                            <a className="nav-link">Blog <Icon.ChevronDown /></a>
                                        </Link>
                                        <ul className="dropdown_menu">
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/blog">
                                                    <a className="nav-link">Blog</a>
                                                </Link>
                                            </li>
                                            
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/blog-details">
                                                    <a className="nav-link">Blog Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li> */}

                                    <li className="nav-item">
                                    <Link activeClassName="active" href="/blog">
                                            <a className="nav-link">Blog</a>
                                        </Link>
                                        
                                    </li>

                                    <li className="nav-item">
                                    <Link activeClassName="active" href="/our-works">
                                            <a className="nav-link">Our Works</a>
                                        </Link>
                                        
                                    </li>
    
                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/contact">
                                            <a className="nav-link">Contact</a>
                                        </Link>
                                    </li>

                                     {/* <li className="nav-item cart-wrapper">
                                        <Link href="/cart">
                                            <a className="nav-link">
                                                <Icon.ShoppingCart />
                                                <span>{addedItems.length}</span>
                                            </a>
                                        </Link>
                                    </li>  */}
                                </ul>
                            </div>
    
                            <div className="others-option">
                            {
                                auth && auth.authenticated ?
                                (
                                    <Link href="/dashboard">
                                    <a className="btn btn-gradient">dashboard</a>
                                    </Link>
                                ) :
                                (
                                    <Link href="/login">
                                    <a className="btn btn-gradient">Login</a>
                                    </Link>
                                )
                            }
                                
                            </div>
                        </nav>
                    </div> 
                </div>
            </header>
        )
    }




export default DefaultStyleThree