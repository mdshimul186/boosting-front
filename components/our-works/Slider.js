import React from 'react'
import { Carousel } from 'react-responsive-carousel';

function Slider({portfolioImages}) {
    return (
        <div>
            <Carousel>
            {
                portfolioImages.map((p,index)=>{
                    return(
                        <div key={index}>
                    <img src={p} />
    
                    </div>
                    )
                })
            }
                
               
            </Carousel>
        </div>
    )
}

export default Slider
