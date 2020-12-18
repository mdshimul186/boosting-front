import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import HeaderThree from '../../components/Layouts/HeaderThree';
import Footer from '../../components/Layouts/Footer'
import GoTop from '../../components/Layouts/GoTop'
import PageTitle from '../../components/products/PageTitle';
import Items from '../../components/services/Items';
import axios from 'axios'

const Products=({categories})=> {
  //console.log(products)
        return (
            <Preloader>
                <Placeholder>
                    <div className="preloader">
                        <div className="spinner"></div>
                    </div>
                </Placeholder>
                <HeaderThree />
                <Items categories={categories} />
                <Footer />
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </Preloader>
        )
}
export async function getServerSideProps(context) {
 
    let res = await axios.get(`${NEXT_PUBLIC_API_URL}/product/category`)
    


    return {
      props: {categories:res.data.category}, // will be passed to the page component as props
    }
  }
export default Products