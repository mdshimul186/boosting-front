import React, { useState, useEffect } from 'react'
import * as Icon from 'react-feather'
import styles from './ourworks.module.css'
import axios from 'axios'
import {Modal} from 'react-bootstrap'
import Slider from './Slider'
import ClipLoader from "react-spinners/ClipLoader";

export default function ProjectContent() {
	const [category, setCategory] = useState('all')
	const [portfolios, setPortfolios] = useState([])
	const [selectedPortfolio, setSelectedPortfolio] = useState(null)
	const [show, setShow] = useState(false);

	const [page, setPage]  =useState(0)
	const [showLoadButton, setShowLoadButton] = useState(true)

	let [loading, setLoading] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = (portfolio) =>{
		setSelectedPortfolio(portfolio)
		setShow(true);
	} 

	const fetchCategory = (cat) => {
		setLoading(true)
		axios.get(`/portfolio/getall?category=${cat}`)
			.then(res => {
				setPortfolios(res.data.portfolio)
				setPage(1)
				if(res.data.portfolio.length !== 20){
					setShowLoadButton(false)
				}
				setLoading(false)
			})
			.catch(err=>{
				setLoading(false)
				err && err.response && alert(err.response.data.error)
			})
	}
	useEffect(() => {
		if (category == 'all') {
			setLoading(true)
			axios.get(`/portfolio/getall`)
				.then(res => {
					setPortfolios(res.data.portfolio)
					setPage(1)
					if(res.data.portfolio.length !== 20){
						setShowLoadButton(false)
					}
					setLoading(false)
				})
				.catch(err=>{
					setLoading(false)
					err && err.response && alert(err.response.data.error)
				})
				
		} else if (category == 'design') {
			fetchCategory('design')
		} else if (category == 'development') {
			fetchCategory('development')
		} else if (category == 'marketing') {
			fetchCategory('marketing')
		}
	}, [category])

	const handleLoadMore=()=>{
		if (category == 'all') {
			setLoading(true)
			axios.get(`/portfolio/getall?page=${page}`)
				.then(res => {
					setPortfolios([...portfolios,...res.data.portfolio])
					setPage(page+1)
					if(res.data.portfolio.length !== 20){
						setShowLoadButton(false)
					}
					setLoading(false)
				})
				.catch(err=>{
					setLoading(false)
					err && err.response && alert(err.response.data.error)
				})
				
		}else{
			setLoading(true)
			axios.get(`/portfolio/getall?category=${cat}&&page=${page}`)
			.then(res => {
				setPortfolios([...portfolios,...res.data.portfolio])
				setPage(page+1)
				if(res.data.portfolio.length !== 20){
					setShowLoadButton(false)
				}
				setLoading(false)
			})
			.catch(err=>{
				setLoading(false)
				err && err.response && alert(err.response.data.error)
			})
		}
	}


	return (
		<section className="works-area ptb-80">

			<Modal  dialogClassName="modal-70w" show={show} onHide={handleClose}>
		
				<Modal.Header style={{padding:"10px"}} closeButton bsPrefix='test'>
					<Modal.Title>Project Details</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className='row'>
						<div className='col-md-6 col-sm-12'>
							<div><label>Category :</label><strong style={{marginLeft:"10px",textTransform:"uppercase"}}>{selectedPortfolio && selectedPortfolio.category}</strong></div>
							<p>{selectedPortfolio && selectedPortfolio.shortDescription}</p>
							<p>{selectedPortfolio && selectedPortfolio.longDescription}</p>
						</div>
						<div className='col-md-6 col-sm-12'>
						<Slider portfolioImages={selectedPortfolio && selectedPortfolio.portfolioImages} />
						</div>
					</div>
				</Modal.Body>
	
			</Modal>





			<div className="container">
				<div>
					<div className={styles.buttonGroupWorks}>
						<button
							onClick={() => setCategory('all')}
							className={`${styles.buttonGroupWorksButton} ${category === 'all' && styles.ourworksActive}`}>ALL</button>
						<button
							onClick={() => setCategory('design')}
							className={`${styles.buttonGroupWorksButton} ${category === 'design' && styles.ourworksActive}`}>DESIGN</button>
						<button
							onClick={() => setCategory('development')}
							className={`${styles.buttonGroupWorksButton} ${category === 'development' && styles.ourworksActive}`}>DEVELOPMENT</button>
						<button
							onClick={() => setCategory('marketing')}
							className={`${styles.buttonGroupWorksButton} ${category === 'marketing' && styles.ourworksActive}`}>MARKETING</button>
					</div>
				</div>
				<div className="row">


					{
						loading ? <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}><ClipLoader size={80} /></div>:
						portfolios.length > 0 ? portfolios.map((portfolio, index) => {
							return (
								<div key={index} className="col-lg-4 col-md-6">
									<div className="single-works">
										<img src={portfolio.portfolioImages[0]} alt="image" className={styles.worksThumb} />
										<span style={{cursor:"pointer"}} onClick={()=>handleShow(portfolio)} className='icon'>
											
												<Icon.Eye />
										
										</span>

										<div className="works-content">
											{/* <h3>
												<Link href="/project-details">
													<a>Incredible infrastructure</a>
												</Link>
											</h3> */}
											<p>{portfolio.shortDescription}</p>
										</div>
									</div>
								</div>

							)
						}) :
							<p>No works found</p>
					}


				</div>
				<div style={{textAlign:"center"}}>
				{
				  !loading && showLoadButton && <button onClick={()=>handleLoadMore()} className={`${styles.buttonGroupWorksButton} ${styles.ourworksActive}`}>Load more</button>
				}
					
				</div>
			</div>

			<div className="shape8 rotateme"><img src={require("../../static/images/shape2.svg")} alt="shape" /></div>
			<div className="shape2 rotateme"><img src={require("../../static/images/shape2.svg")} alt="shape" /></div>
			<div className="shape7"><img src={require("../../static/images/shape4.svg")} alt="shape" /></div>
			<div className="shape4"><img src={require("../../static/images/shape4.svg")} alt="shape" /></div>
		</section>
	)
}
