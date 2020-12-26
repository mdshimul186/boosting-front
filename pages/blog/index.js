import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import HeaderThree from '../../components/Layouts/HeaderThree';
import Footer from '../../components/Layouts/Footer'
import GoTop from '../../components/Layouts/GoTop'
import PageTitle from '../../components/blog/PageTitle'
import BlogBody from '../../components/blog/BlogBody'
import axios from 'axios'

const Blog=({articles})=> {

        return (
            <Preloader>
                <Placeholder>
                    <div className="preloader">
                        <div className="spinner"></div>
                    </div>
                </Placeholder>
                <HeaderThree />
                {/* <PageTitle /> */}
                <BlogBody articles={articles} />
                <Footer />
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </Preloader>
        )
    }



export async function getServerSideProps(context) {
    
    let res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/article/getall`)
    


    return {
      props: {articles:res.data.articles}, // will be passed to the page component as props
    }
  }

export default Blog