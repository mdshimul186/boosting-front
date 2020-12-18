import React, { Component } from 'react';

const useTagFunc = () => {
    let useTag = '<use xlink:href="#star" />';
    return <svg className="star" dangerouslySetInnerHTML={{__html: useTag }} />;
}

const DetailsTab=({description})=>{

    const openTabSection = (evt, tabName) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("active", "");
        }

        document.getElementById(tabName).style.display = "block";
        document.getElementById(tabName).className += " fadeInUp animated";
        evt.currentTarget.className += "active";
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

   
        return (
            <div className="col-lg-12 col-md-12">
                <div className="products-details-tabs">
                    <ul id="tabs">
                        <li 
                            onClick={(e) => {e.preventDefault();openTabSection(e, 'tab1')}}
                            className="active"
                        >
                            <a href="#">
                                Description
                            </a>
                        </li>

                        {/* <li 
                            onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab2')}}
                            className=""
                        >
                            <a href="#">
                               Additional information
                            </a>
                        </li> */}

                        <li 
                            onClick={(e) => {e.preventDefault(); openTabSection(e, 'tab3')}}
                            className=""
                        >
                            <a href="#">
                                Review
                            </a>
                        </li>
                    </ul>

                    <div id="tab1" className="content show">
                        <div className="products-description">
                            <p>{description}</p>
                        </div>
                    </div>

                    {/* <div id="tab2" className="content">
                        <div className="products-description">
                            <ul className="additional-information">
                                <li><span>Brand</span> ThemeForest</li>
                                <li><span>Color</span> Brown</li>
                                <li><span>Size</span> Large, Medium</li>
                                <li><span>Weight</span> 27 kg</li>
                                <li><span>Dimensions</span> 16 x 22 x 123 cm</li>
                            </ul>
                        </div>
                    </div> */}

                    <div id="tab3" className="content">
                        <div className="products-reviews">
                            <h3>Customer Reviews</h3>
                            <p>There are no reviews yet.</p>

                            <form onSubmit={handleSubmit} className="review-form">
                                <p>Rate this item</p>
                                
                                <div className="star-source">
                                    <svg>
                                        <linearGradient x1="50%" y1="5.41294643%" x2="87.5527344%" y2="65.4921875%" id="grad">
                                            <stop stopColor="#f2b01e" offset="0%"></stop>
                                            <stop stopColor="#f2b01e" offset="60%"></stop>
                                            <stop stopColor="#f2b01e" offset="100%"></stop>
                                        </linearGradient>
                                        <symbol id="star" viewBox="153 89 106 108">   
                                            <polygon id="star-shape" stroke="url(#grad)" strokeWidth="5" fill="currentColor" points="206 162.5 176.610737 185.45085 189.356511 150.407797 158.447174 129.54915 195.713758 130.842203 206 95 216.286242 130.842203 253.552826 129.54915 222.643489 150.407797 235.389263 185.45085"></polygon>
                                        </symbol>
                                    </svg>
                                </div>

                                <div className="star-rating">
                                    <input type="radio" name="star" id="five" />
                                    <label htmlFor="five">
                                        <svg className="star">
                                            {useTagFunc()}
                                        </svg>
                                    </label>

                                    <input type="radio" name="star" id="four" />
                                    <label htmlFor="four">
                                        <svg className="star">
                                            {useTagFunc()}
                                        </svg>
                                    </label>

                                    <input type="radio" name="star" id="three" />
                                    <label htmlFor="three">
                                        <svg className="star">
                                            {useTagFunc()}
                                        </svg>
                                    </label>

                                    <input type="radio" name="star" id="two" />
                                    <label htmlFor="two">
                                        <svg className="star">
                                            {useTagFunc()}
                                        </svg>
                                    </label>

                                    <input type="radio" name="star" id="one" />
                                    <label htmlFor="one">
                                        <svg className="star">
                                            {useTagFunc()}
                                        </svg>
                                    </label>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea name="review-message" id="message" cols="30" rows="4" placeholder="Write your review*" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" placeholder="Name*" className="form-control" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="email" placeholder="Email*" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}

export default DetailsTab;
