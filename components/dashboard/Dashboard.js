import React, { useState ,useEffect} from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from "js-cookie";
import Router from "next/router";
import style from './dashboard.module.css'
import Avatar from '@material-ui/core/Avatar';
import { useRouter } from 'next/router'
import AccountSettings from './AccountSettings'
import ProfileSettings from './ProfileSettings'
import Orders from './Orders'

function Dashboard() {
    const router = useRouter()
    let dispatch = useDispatch()
    const { userData, authenticated } = useSelector(state => state.auth)

    const [tab, setTab] = useState('profile-settings')

    useEffect(()=>{
        if(router.query.tab){
            setTab(router.query.tab)
        }else{
            setTab("profile-settings")
        }
       
    },[router.query.tab])


    return (
        <section className="pricing-area ptb-80 bg-f9f6f6">
            <div className="container">
                <div className='dashboard__content'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className={style.profileInfo}>
                                <Avatar src={userData.profilePicture} />
                                <div className={style.profileData}>
                                    <span>Hello,</span>
                                    <p>{userData.userName}</p>
                                </div>

                            </div>
                            <div className={style.sidebar}>
                                <div className={style.sidebarItem}>
                                    <Link href='/dashboard/?tab=profile-settings'><a className={style.sidebarItemLink}>Profile settings</a></Link>
                                </div>
                                <div className={style.sidebarItem}>
                                    <Link href='/dashboard/?tab=account-settings'><a className={style.sidebarItemLink}>Account Settings</a></Link>

                                </div>
                                <div className={style.sidebarItem}>
                                    <Link href='/dashboard/?tab=purchase-summary'><a className={style.sidebarItemLink}>Purchase Summary</a></Link>

                                </div>
                                <div className={style.sidebarItem}>
                                    <Link href='/dashboard/?tab=reviews'><a className={style.sidebarItemLink}>Reviews</a></Link>

                                </div>
                                <div className={style.sidebarItem}>
                                    <Link href='/dashboard/?tab=downloads'><a className={style.sidebarItemLink}>Downloads</a></Link>

                                </div>
                                <div className={style.sidebarItem}>
                                    <Link href='/dashboard/?tab=wishlist'><a className={style.sidebarItemLink}>Wish list</a></Link>

                                </div>
                                <div className={style.sidebarItem}>
                                    <Link href='/dashboard/?tab=collection'><a className={style.sidebarItemLink}>Collection</a></Link>

                                </div>
                                <div className={style.sidebarItem}>
                                    <Link href='/dashboard/?tab=support-setting'><a className={style.sidebarItemLink}>Support setting</a></Link>

                                </div>

                            </div>
                        </div>
                        <div className='col-9'>
                            <div className={style.rightContent}>
                            {
                                tab === 'profile-settings' && <ProfileSettings />
                            }
                            {
                                tab === 'account-settings' && <AccountSettings />
                            }
                            {
                                tab === 'purchase-summary' && <Orders />
                            }
                               </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Dashboard




