import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './profile.module.css'
import BeatLoader from "react-spinners/BeatLoader";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import * as Icon from 'react-feather'

function ProfileSettings() {
    const { userData } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const [isEdit, setIsEdit] = useState(false)
    const [isEditLoading, setIsEditLoading] = useState(false)
    const [isEditProfile, setIsEditProfile] = useState(false)
    const [isEditProfileLoading, setIsEditProfileLoading] = useState(false)
    const [isNIDLoading, setIsNIDLoading] = useState(false)

    const [userName, setUserName] = useState("")

    const [mobile, setMobile] = useState("")
    const [paymentNumber, setPaymentNumber] = useState("")
    const [bankDetails, setBankDetails] = useState("")

    const [slectedProfile, setSelectedProfile] = useState(null)
    const [profilePicture, setProfilePicture] = useState("")

    const [selecetdFront, setSelectedFront] = useState(null)
    const [selecetdBack, setSelectedBack] = useState(null)
    const [front, setFront] = useState('')
    const [back, setBack] = useState('')



    useEffect(() => {
        setUserName(userData.userName)
        setMobile(userData.mobile)
        setPaymentNumber(userData.paymentNumber)
        setBankDetails(userData.bankDetails)
        setProfilePicture(userData.profilePicture)
        setFront(userData.NID?.front)
        setBack(userData.NID?.back)
    }, [userData])


    const toastMsg = (type, message) => {
        if (type === 'success') {
            toast.success(message, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            })
        } else if (type === 'error') {
            toast.error(message, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            })
        }

    }


    const handleSaverPersonal = () => {
        setIsEditLoading(true)
        let data = {
            userName,
            mobile,
            paymentNumber,
            bankDetails,
        }

        axios.patch('/user/editpersonalinformation', data)
            .then(res => {
                if (res.data.success) {
                    dispatch({
                        type: "SET_USER",
                        payload: res.data.user
                    })
                    toastMsg('success', 'saved successfully')
                    setIsEdit(false)
                    setIsEditLoading(false)
                }
            })
            .catch(err => {
                setIsEditLoading(false)
                err && err.response && toastMsg('error', err.response.data.error)
            })

    }


    const handleSaveProfile = () => {
        setIsEditProfileLoading(true)
        let formData = new FormData()
        formData.append("profilePicture", slectedProfile)
        axios.put('/user/editprofileimage', formData)
            .then(res => {
                if (res.data.success) {
                    dispatch({
                        type: "SET_USER",
                        payload: res.data.user
                    })
                    toastMsg('success', 'saved successfully')
                    setIsEditProfileLoading(false)
                    setIsEditProfile(false)
                    setSelectedProfile(null)
                }
            })
            .catch(err => {
                setIsEditProfileLoading(false)
                err && err.response && toastMsg('error', err.response.data.error)
            })
    }

    const handleSaveNID=()=>{
        setIsNIDLoading(true)
        let formData = new FormData()
        formData.append('front',selecetdFront)
        formData.append('back',selecetdBack)

        axios.put('/user/editnid',formData)
        .then(res => {
            if (res.data.success) {
                dispatch({
                    type: "SET_USER",
                    payload: res.data.user
                })
                toastMsg('success', 'saved successfully')
                setIsNIDLoading(false)
                setSelectedBack(null)
                setSelectedFront(null)
            }
        })
        .catch(err => {
            setIsNIDLoading(false)
            err && err.response && toastMsg('error', err.response.data.error)
        })
    }
    return (
        <div className={styles.content}>
            <ToastContainer />
            <div class={styles.heading}>
                <span style={{ fontSize: "20px" }} >Personal Information</span>
                {
                    !isEdit && <span className={styles.text} onClick={() => setIsEdit(true)}>Change Information</span>
                }

            </div>


            <label className={styles.label}>User Name</label>
            <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                className={styles.input}
                disabled={!isEdit}
                placeholder="username" />



            <label className={styles.label}>Phone Number</label>
            <input
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                type="text"
                className={styles.input}
                disabled={!isEdit}
                placeholder="Mobile Number" />

            <label className={styles.label}>Bkash/Rocket</label>
            <input
                value={paymentNumber}
                onChange={(e) => setPaymentNumber(e.target.value)}
                type="text"
                className={styles.input}
                disabled={!isEdit}
                placeholder="Bkash/Rocket number" />
            <label className={styles.label}>Bank Details</label>
            <input
                value={bankDetails}
                onChange={(e) => setBankDetails(e.target.value)}
                type="text"
                className={styles.input}
                disabled={!isEdit}
                placeholder="Your bank details" />


            {
                isEdit && <div className='my-3'>
                    {
                        isEditLoading ? <BeatLoader
                            size={15}
                            color={"#123abc"}
                            loading={true}
                        /> : <><button onClick={() => handleSaverPersonal()} className={styles.btnSave}>Save</button>
                                <button onClick={() => setIsEdit(false)} className={styles.btnCancel}>Cancel</button></>
                    }

                </div>
            }



            <div className={`${styles.heading} mt-4`}>
                <span style={{ fontSize: "20px" }} >Profile Image</span>
                {
                    !isEditProfile && <span className={styles.text} onClick={() => setIsEditProfile(true)}>Change profile image</span>
                }

            </div>
            <label className={styles.label}>Profile image</label>

            <img className={styles.profileImage} src={slectedProfile ? URL.createObjectURL(slectedProfile) : profilePicture ? profilePicture : "https://via.placeholder.com/150"}></img>
            {
                isEditProfile && <><input onChange={(e) => setSelectedProfile(e.target.files[0])} accept='image/*' type="file" id="uploadProfile" hidden />
                    <label htmlFor="uploadProfile" className={`${styles.fileLabel} ml-5`}>Choose file</label></>
            }


            {
                slectedProfile && <div className='my-3'>
                    {
                        isEditProfileLoading ? <BeatLoader
                            size={15}
                            color={"#123abc"}
                            loading={true}
                        /> : <><button onClick={() => handleSaveProfile()} className={styles.btnSave}>Save</button>
                                <button onClick={() => { setSelectedProfile(null); setIsEditProfile(false) }} className={styles.btnCancel}>Cancel</button></>
                    }

                </div>
            }

            <div className={`${styles.heading} mt-4`}>
                <span style={{ fontSize: "20px" }} >National ID card</span>
            </div>
            <div className={styles.cardContainer}>
                <div style={{ backgroundImage: `url(${selecetdFront ? URL.createObjectURL(selecetdFront) : front})` }} className={styles.idcard}>
                {
                    !front && <><input onChange={(e) => setSelectedFront(e.target.files[0])} accept='image/*' type="file" id="uploadFront" hidden />
                        <label style={{ fontSize: "15px", cursor: "pointer" }} htmlFor="uploadFront"> <Icon.Upload style={{marginRight:"5px"}} />Upload front</label></>
                }
                    
                </div>
                <div style={{ backgroundImage: `url(${selecetdBack ? URL.createObjectURL(selecetdBack) : back})` }} className={styles.idcard}>
                {
                    !front && <><input onChange={(e) => setSelectedBack(e.target.files[0])} accept='image/*' type="file" id="uploadBack" hidden />
                        <label style={{ fontSize: "15px", cursor: "pointer" }} htmlFor="uploadBack"><Icon.Upload style={{marginRight:"5px"}} />Upload back</label></>
                }
                    
                </div>
            </div>


            {
                selecetdFront && selecetdBack && <div className='my-3'>
                    {
                        isNIDLoading ? <BeatLoader
                            size={15}
                            color={"#123abc"}
                            loading={true}
                        /> : <button onClick={() => handleSaveNID()} className={styles.btnSave}>Save</button>
                    }
                </div>
            }


            {/* <button onClick={() => setIsEdit(false)} className={styles.btnCancel}>Cancel</button> */}


        </div>
    )
}

export default ProfileSettings
