import React, { Component } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

class BlogCard extends Component {
    render() {
        return (
            <section className="blog-area ptb-80">
                <div className="container">
                    <div className="section-title st-fs-28">
                        <span className="sub-title">News</span>
                        <h2>The News from Our Blog</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-item">
                                <div className="post-image">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../static/images/blog-image/blog1.jpg")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li>
                                            <Link href="#">
                                                <a>Admin</a>
                                            </Link>
                                        </li>
                                        <li>August 15, 2019</li>
                                    </ul>

                                    <h3>
                                        <Link href="#">
                                            <a>The security risks of changing package owners</a>
                                        </Link>
                                    </h3>

                                    <Link href="#">
                                        <a className="read-more-btn">
                                            Read More <Icon.PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-item">
                                <div className="post-image">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../static/images/blog-image/blog2.jpg")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li>
                                            <Link href="#">
                                                <a>Admin</a>
                                            </Link>
                                        </li>
                                        <li>August 15, 2019</li>
                                    </ul>

                                    <h3>
                                        <Link href="#">
                                            <a>Tips to Protecting Your Business and Family</a>
                                        </Link>
                                    </h3>

                                    <Link href="#">
                                        <a className="read-more-btn">
                                            Read More <Icon.PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-blog-post-item">
                                <div className="post-image">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../static/images/blog-image/blog3.jpg")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li>
                                            <Link href="#">
                                                <a>Admin</a>
                                            </Link>
                                        </li>
                                        <li>August 15, 2019</li>
                                    </ul>
                                    <h3>
                                        <Link href="#">
                                            <a>Protect Your Workplace from Cyber Attacks</a>
                                        </Link>
                                    </h3>

                                    <Link href="#">
                                        <a className="read-more-btn">
                                            Read More <Icon.PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape2 rotateme">
                    <img src={require("../../static/images/shape2.svg")} alt="shape"/>
                </div>
                <div className="shape3">
                    <img src={require("../../static/images/shape3.svg")} alt="shape" />
                </div>
                <div className="shape4">
                    <img src={require("../../static/images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape6 rotateme">
                    <img src={require("../../static/images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape7">
                    <img src={require("../../static/images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src={require("../../static/images/shape2.svg")} alt="shape" />
                </div>
            </section>
        );
    }
}

export default BlogCard;