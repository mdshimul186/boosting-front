import React, { Component } from 'react';
import Slider from "react-slick";

export class ProductImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }
    
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    renderSliderMainImages = () => {
        return this.props.productImages.map((img,index) => {
            return (
                <div key={index}>
                    <li className="item">
                        <img src={img} alt="image" />
                    </li>
                </div>
            )
        })
    }

    renderSliderSubImages = () => {
        return this.props.productImages.map((img,index) => {
            return (
                <div key={index}>
                    <li className="item">
                        <img src={img} alt="image" />
                    </li>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="col-lg-5">
                <div className="products-details-image">
                    <ul className="slickslide">
                        <div>
                            <Slider
                                asNavFor={this.state.nav2}
                                ref={slider => (this.slider1 = slider)}
                                arrows={false}
                                dots={false}
                                slidesToShow={1}
                                fade={false}
                                autoplay={true}
			                    autoplaySpeed={4000}
                            >
                                {
                                    this.renderSliderMainImages()
                                }
                            </Slider>
                        </div>
                    </ul>

                    <div className="slick-thumbs">
                        <ul>
                            <div>
                                <Slider
                                    asNavFor={this.state.nav1}
                                    ref={slider => (this.slider2 = slider)}
                                    slidesToShow={this.props.productImages.length}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                    arrows={false}
                                    dots={false}
                                >
                                    {
                                        this.renderSliderSubImages()
                                    }
                                </Slider>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

// const DEFAULT_PROPS = [
//     {
//         id: 1,
//         image: require('../../static/images/shop-image/shop-image1.jpg')
//     },
//     {
//         id: 2,
//         image: require('../../static/images/shop-image/shop-image2.jpg')
//     },
//     {
//         id: 3,
//         image: require('../../static/images/shop-image/shop-image3.jpg')
//     },
//     {
//         id: 4,
//         image: require('../../static/images/shop-image/shop-image4.jpg')
//     },
//     {
//         id: 5,
//         image: require('../../static/images/shop-image/shop-image5.jpg')
//     }
// ];


export default ProductImage;
