import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import moment from 'moment'

const BlogBody=({articles})=> {

    const texShort = (text,index)=>{
		let shortend 
		if(text.length>index){
			shortend = text.slice(0,index)+"..."
		}else{
			shortend = text.slice(0,index)
		}
		return shortend
	}

    function getText(html){
        var divContainer= document.createElement("div");
        divContainer.innerHTML = html;
        return texShort(divContainer.textContent,300) || texShort(divContainer.innerText,300) || "";
    }
  
        return (
            <section className="blog-area ptb-80">
                <div className="container">
                    <div className="row">
                    {
                        articles.length >0 ? articles.map((article,index)=>{
                            return(
                                <div key={index} className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href={`/blog/${article.slug}`}>
                                        <a>
                                            <img style={{width:"860px",height:"300px",objectFit:"cover"}} src={article.thumbnail} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <Icon.Calendar /> {moment(article.createdAt).format("MMMM D, YYYY")}
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <h3>
                                        <Link href={`/blog/${article.slug}`}>
                                            <a>{article.title}</a>
                                        </Link>
                                    </h3>

                                    <span>by 
                                        <Link href="#">
                                            <a>{article.creator.userName}</a>
                                        </Link>
                                    </span>

                                    {
                                        getText(article.description)
                                    }
                                    <br></br>
                                    <Link href={`/blog/${article.slug}`}>
                                        <a className="read-more-btn">Read More <Icon.ArrowRight /> </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                            )
                        }):
                        <p>No articles found</p>
                    }
                       

                       
                    </div>
                </div>
            </section>
        )
    
}

export default BlogBody
