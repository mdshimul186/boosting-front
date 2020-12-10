import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
class Custom404 extends React.Component {
    render() {
        return (
            <Preloader>
                <Placeholder>
                    <div className="preloader">
                        <div className="spinner"></div>
                    </div>
                </Placeholder>
                <section className="error-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="error-content">
                                    <div className="notfound-404">
                                        <h1>Oops!</h1>
                                    </div>
                                    <h3>404 - Page Not Found</h3>
                                    <a className="btn btn-primary" href="/">
                                        Go to Homepage
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Preloader>
        );
    }
}
  
export default Custom404;
