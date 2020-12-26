import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import HeaderThree from '../../components/Layouts/HeaderThree';
import Footer from '../../components/Layouts/Footer'
import GoTop from '../../components/Layouts/GoTop'
import PageTitle from '../../components/blog-details/PageTitle'
import DetailsBody from '../../components/blog-details/DetailsBody'
import axios from 'axios'

export default ({article}) => (
    <Preloader>
        <Placeholder>
            <div className="preloader">
                <div className="spinner"></div>
            </div>
        </Placeholder>
        <HeaderThree />
        {/* <PageTitle /> */}
        <DetailsBody article={article} />
        <Footer />
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
    </Preloader>
);

export async function getServerSideProps(context) {
    let slug = context.params.slug
    let res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/article/single/${slug}`)
    


    return {
      props: {article:res.data.article}, // will be passed to the page component as props
    }
  }