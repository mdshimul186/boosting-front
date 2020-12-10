import React,{useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import Cookies from "js-cookie";
import Router from "next/router";
import style from './dashboard.module.css'
import Avatar from '@material-ui/core/Avatar';

function Dashboard(){

    let dispatch = useDispatch()
    const {userData,authenticated} = useSelector(state=>state.auth)

   

        return (
            <section className="pricing-area ptb-80 bg-f9f6f6">
                <div className="container">
                   <div className='dashboard__content'>
                       <div className='row'>
                           <div className='col-3'>
                               <div className={style.profileInfo}>
                               <Avatar alt="Remy Sharp" />
                               <div className={style.profileData}>
                               <span>Hello,</span>
                               <p>{userData.firstName} {userData.lastName}</p>
                               </div>
                                    
                               </div>
                               <div className={style.sidebar}>
                                    <div className={style.sidebarItem}>My account</div>
                                    <div className={style.sidebarItem}>Option 1</div>
                                    <div className={style.sidebarItem}>Option 2</div>
                                    <div className={style.sidebarItem}>Option 3</div>
                                    <div className={style.sidebarItem}>Option 4</div>
                                    <div className={style.sidebarItem}>Option 5</div>
                               </div>
                           </div>
                           <div className='col-9'>
                               <div className={style.rightContent}>
                                   content goes here
                               </div>
                           </div>
                       </div>
                   </div>
                </div>
            </section>
        );
    
}

export default Dashboard




