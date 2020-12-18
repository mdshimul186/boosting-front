import '../static/css/bootstrap.min.css'
import '../static/css/slick.css'
import '../static/css/animate.css'
import '../static/css/flaticon.css'
import '../static/css/boxicons.min.css'
import 'odometer/themes/odometer-theme-default.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../node_modules/react-modal-video/css/modal-video.min.css'
import 'react-image-lightbox/style.css';
import '../static/styles/style.css'
// If you want to change the theme color you should comment out above line and uncomment the below line and change the color names from list
/*
* brink-pink-style.css
* pink-style.css
* purple-style.css
*/
// import '../static/styles/brink-pink-style.css'
import '../static/css/responsive.css'

import { Provider } from 'react-redux';
import App from 'next/app'
import { DefaultSeo } from "next-seo";
// import withRedux from 'next-redux-wrapper';
// import { initStore } from '../store/reducers/cartReducer';
import React from 'react';
import { createWrapper } from 'next-redux-wrapper'
import store from '../store'
import Cookies from "js-cookie";
import axios from "axios";

// export default withRedux(initStore)(
//     class MyApp extends App {

//         static async getInitialProps ({ Component, ctx }) {
//             return {
//                 pageProps: Component.getInitialProps
//                     ? await Component.getInitialProps(ctx)
//                     : {}
//             }
//         }

//         render () {
//             const { Component, pageProps, store } = this.props
//             return (
//               <>
//                 <DefaultSeo
//                   title="StartP - React Next IT Startups & Digital Services Template"
//                   description="StartP is a React and Bootstrap 4 based Professional website template. This has been built with React, ES6+ and as framework Next.js and Express.js."
//                   openGraph={{
//                     type: "website",
//                     locale: "en_IE",
//                     url: "https://startp-react.envytheme.com/",
//                     site_name:
//                       "StartP - React Next IT Startups & Digital Services Template"
//                   }}
//                 />
//                 <Provider store={store}>
//                   <Component {...pageProps} />
//                 </Provider>
//               </>
//             );
//         }
//     }
// )




const configureAxiosHeader = () => {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL
const token = Cookies.get("boostingbd_token");
if(token){
  store.dispatch({
    type:"SET_AUTHENTICATE",
  })
  axios.defaults.headers.common = {
    Authorization: token,
  };

}
}




class MyApp extends App {
  componentDidMount() {
    configureAxiosHeader();
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/user/verify", {})
      .then((res) => {
        if (res.status === 200 && res.data.success) {
          console.log(res.data.user);
          store.dispatch({
              type:"SET_USER",
              payload:res.data.user
          })
        }
      })
      .catch((err) => {
        Cookies.remove("boostingbd_token");
        console.log(err.message);
        store.dispatch({
            type:"LOGOUT"
        })
      });
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}



const makestore = () => store
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)













// import App from 'next/app'
// import { createWrapper } from 'next-redux-wrapper'
// import { Provider } from 'react-redux'

// import axios from 'axios'
// import jwt from 'jwt-decode'
// import store from '../store'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import '../styles/globals.css'

// NProgress.configure({ showSpinner: false });
// import Router from 'next/router';
// import NProgress from 'nprogress'; //nprogress module
// import 'nprogress/nprogress.css'; //styles of nprogress
// //Binding events. 
// Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());






// class MyApp extends App {




//   render() {
//     const { Component, pageProps } = this.props
//     return (
//       <Provider store={store}>
//         <Component {...pageProps} />
//       </Provider>
//     )
//   }
// }

// const makestore = () => store
// const wrapper = createWrapper(makestore)

// export default wrapper.withRedux(MyApp)
