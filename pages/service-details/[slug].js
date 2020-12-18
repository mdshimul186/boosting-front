import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import HeaderThree from '../../components/Layouts/HeaderThree';
import Footer from '../../components/Layouts/Footer'
import GoTop from '../../components/Layouts/GoTop'
import PageTitle from '../../components/service-details/PageTitle';
import ProductContent from '../../components/service-details/ProductContent';
import axios from 'axios'

const Products=({product})=>{
   
        return (
            <Preloader>
                <Placeholder>
                    <div className="preloader">
                        <div className="spinner"></div>
                    </div>
                </Placeholder>
                <HeaderThree />
                {/* <PageTitle /> */}
                <ProductContent product={product} />
                
                <Footer />
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </Preloader>
        )
    
}

export async function getServerSideProps(context) {
    let slug = context.params.slug
    let res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/getproduct/${slug}`)
    


    return {
      props: {product:res.data.product}, // will be passed to the page component as props
    }
  }

export default Products