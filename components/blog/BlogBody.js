import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

export default class BlogBody extends React.Component {
    render() {
        return (
            <section className="blog-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src={require("../../static/images/blog-image/blog1.jpg")} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <Icon.Calendar /> March 15, 2019
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>The security risks of changing package owners</a>
                                        </Link>
                                    </h3>

                                    <span>by 
                                        <Link href="#">
                                            <a>admin</a>
                                        </Link>
                                    </span>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                                    <Link href="/blog-details">
                                        <a className="read-more-btn">Read More <Icon.ArrowRight /> </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src={require("../../static/images/blog-image/blog2.jpg")} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <Icon.Calendar /> March 17, 2019
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Tips to Protecting Your Business and Family</a>
                                        </Link>
                                    </h3>

                                    <span>by 
                                        <Link href="#">
                                            <a>smith</a>
                                        </Link>
                                    </span>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

                                    <Link href="/blog-details">
                                        <a className="read-more-btn">Read More <Icon.ArrowRight /> </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src={require("../../static/images/blog-image/blog3.jpg")} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <Icon.Calendar /> March 19, 2019
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Protect Your Workplace from Cyber Attacks</a>
                                        </Link>
                                    </h3>

                                    <span>by 
                                        <Link href="#">
                                            <a>john</a>
                                        </Link>
                                    </span>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

                                    <Link href="/blog-details">
                                        <a className="read-more-btn">Read More <Icon.ArrowRight /> </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src={require("../../static/images/blog-image/blog4.jpg")} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <Icon.Calendar /> March 15, 2019
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>The security risks of changing package owners</a>
                                        </Link>
                                    </h3>

                                    <span>by <Link href="/blog-details"><a>admin</a></Link></span>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

                                    <Link href="#">
                                        <a className="read-more-btn">Read More <Icon.ArrowRight /> </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src={require("../../static/images/blog-image/blog5.jpg")} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <Icon.Calendar /> March 17, 2019
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Tips to Protecting Your Business and Family</a>
                                        </Link>
                                    </h3>

                                    <span>by <Link href="#"><a>smith</a></Link></span>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

                                    <Link href="/blog-details">
                                        <a className="read-more-btn">Read More <Icon.ArrowRight /> </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src={require("../../static/images/blog-image/blog6.jpg")} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <Icon.Calendar /> March 19, 2019
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <h3><Link href="/blog-details"><a>Protect Your Workplace from Cyber Attacks</a></Link></h3>

                                    <span>by <Link href="#"><a>john</a></Link></span>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

                                    <Link href="/blog-details"><a className="read-more-btn">Read More <Icon.ArrowRight /> </a></Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item">
                                            <Link href="#">
                                                <a className="page-link">Prev</a>
                                            </Link>
                                        </li>
                                        
                                        <li className="page-item active">
                                            <Link href="#">
                                                <a className="page-link">1</a>
                                            </Link>
                                        </li>
                                        
                                        <li className="page-item">
                                            <Link href="#">
                                                <a className="page-link">2</a>
                                            </Link>
                                        </li>
                                        
                                        <li className="page-item">
                                            <Link href="#">
                                                <a className="page-link">3</a>
                                            </Link>
                                        </li>
                                        
                                        <li className="page-item">
                                            <Link href="#">
                                                <a className="page-link">Next</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
