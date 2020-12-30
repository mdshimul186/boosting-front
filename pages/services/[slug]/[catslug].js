import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import HeaderThree from '../../../components/Layouts/HeaderThree';
import Footer from '../../../components/Layouts/Footer'
import GoTop from '../../../components/Layouts/GoTop'
import PageTitle from '../../../components/products/PageTitle';
import Items from '../../../components/products/Items';
import axios from 'axios'

const Products=({products})=>{
    
        return (
            <Preloader>
                <Placeholder>
                    <div className="preloader">
                        <div className="spinner"></div>
                    </div>
                </Placeholder>
                <HeaderThree />
                {/* <PageTitle /> */}
                <Items products={products}/>
                <Footer />
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </Preloader>
        )
    
}

export async function getServerSideProps(context) {
    let slug = context.params.catslug
    let res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/categoryproduct/${slug}?limit=12`)
    


    return {
      props: {products:res.data.product}, // will be passed to the page component as props
    }
  }

export default Products