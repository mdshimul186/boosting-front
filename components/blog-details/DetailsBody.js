import React,{useEffect} from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'
import parse from 'html-react-parser'
import Router from 'next/router'
import moment from 'moment'

const BlogBody = ({ article }) => {
    console.log(article)

    useEffect(() => {
        if(!article){
            Router.push('/blog')
        }
    }, [article])

   

    // state = {
    //     comments: [
    //         { id: null, name: 'Meeting with Aaron Rossi', comment: 'Meeting with Aaron Rossi' }
    //     ],
    //     name: '',
    //     comment: ''
    // };

    // onHandleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!this.state.name.length) {
    //         return;
    //     }

    //     const newComment = {
    //         name: this.state.name,
    //         comment: this.state.comment,
    //         id: Date.now()
    //     };

    //     this.setState(state => ({
    //         comments: state.comments.concat(newComment),
    //         name: '',
    //         comment: ''
    //     }));

    //     // console.log(this.state.comments)
    // }

    return (
        <section className="blog-details-area ptb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 offset-lg-2">
                        <div className="blog-details">
                            <div className="article-img">
                                <img style={{ width: "800px", height: "350px", objectFit: "cover" }} src={article && article.thumbnail} alt="blog-details" />
                                <div className="date">{article && moment(article.createdAt).format('DD')} <br /> {article && moment(article.createdAt).format('MMM')}</div>
                            </div>

                            <div className="article-content">
                                <ul className="category">
                                     {
                                        article && article.tags.length > 0 && article.tags.map((tag, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link href="#">
                                                        <a>{tag}</a>
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    } 


                                </ul>

                                <h3>{article && article.title}</h3>

                                {article && parse(article.description)}

                                <div className="share-post">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a><Icon.Facebook /></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><Icon.Twitter /></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><Icon.Instagram /></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><Icon.Linkedin /></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <div className="post-controls-buttons">
                                <div className="controls-left">
                                    <Link href="#">
                                        <a><i className="icofont-double-left"></i> Prev Post</a>
                                    </Link>
                                </div>

                                <div className="controls-right">
                                    <Link href="#">
                                        <a>Next Post <i className="icofont-double-right"></i></a>
                                    </Link>
                                </div>
                            </div> */}

                        {/* <div className="post-comments">
                                <h3>Comments</h3>
                                <div className="single-comment">
                                    <div className="comment-img">
                                        <img src={require("../../static/images/team-image/team1.jpg")} alt="client" />
                                    </div>
                                    <div className="comment-content">
                                        <h4>John Smith</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                        <span>Jan 19, 2018 - 9:10AM</span>
                                        <Link href="#">
                                            <a>Reply</a>
                                        </Link>
                                    </div>
                                </div>
                                
                                <div className="single-comment left-m">
                                    <div className="comment-img">
                                        <img src={require("../../static/images/team-image/team2.jpg")} alt="client" />
                                    </div>
                                    <div className="comment-content">
                                        <h4>Doe John</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                        <span>Jan 19, 2018 - 9:10AM</span>
                                        <Link href="#">
                                            <a>Reply</a>
                                        </Link>
                                    </div>
                                </div>
                                
                                <div className="single-comment">
                                    <div className="comment-img">
                                        <img src={require("../../static/images/team-image/team3.jpg")} alt="client" />
                                    </div>
                                    <div className="comment-content">
                                        <h4>Steven Doe</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                        <span>Jan 19, 2018 - 9:10AM</span>
                                        <Link href="#">
                                            <a>Reply</a>
                                        </Link>
                                    </div>
                                </div>
                                
                                <div className="single-comment">
                                    <div className="comment-img">
                                        <img src={require("../../static/images/team-image/team5.jpg")} alt="client" />
                                    </div>
                                    <div className="comment-content">
                                        <h4>John Cina</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                        <span>Jan 19, 2018 - 9:10AM</span>
                                        <Link href="#">
                                            <a>Reply</a>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                            
                            <div className="leave-a-reply">
                                <h3>Leave a Reply</h3>
                                <form onSubmit={this.onHandleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="Full Name" 
                                                    value={this.state.name}
                                                    onChange={e => this.setState({name: e.target.value})}
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="E-Mail" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea 
                                                    name="comment" 
                                                    cols="30" 
                                                    rows="5" 
                                                    className="form-control" 
                                                    placeholder="Your Comment" 
                                                    value={this.state.comment}
                                                    onChange={e => this.setState({comment: e.target.value})}
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-12 col-md-12">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div> */}
                    </div>
                </div>
            </div>
        </section>
    )

}

export default BlogBody
