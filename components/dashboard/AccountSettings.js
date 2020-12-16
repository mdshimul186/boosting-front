import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BeatLoader from "react-spinners/BeatLoader";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import * as Icon from 'react-feather'
import styles from './account.module.css'

function AccountSettings() {
    const { userData } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const [isEditPass, setIsEditPass] = useState(false)
    const [isEditPassLoading, setIsEditPassLoading] = useState(false)

    const [newPassword, setNewPassword] = useState('')
    const [newConfirmPassword, setNewConfirmPassword] = useState('')

    const [isEditEmail, setIsEditEmail] = useState(false)
    const [isEditEmailLoading, setIsEditEmailLoading] = useState(false)
    const [email, setEmail] = useState("")

    useEffect(()=>{
        setEmail(userData.email)
    },[userData])

    
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

    const handleSaverPassword=()=>{
        setIsEditPassLoading(true)
        let data = {
            newPassword,
            confirmPassword:newConfirmPassword,
       
        }

        axios.patch('/user/editpassword', data)
            .then(res => {
                if (res.data.success) {
                    toastMsg('success', 'Password updated successfully')
                    setIsEditPass(false)
                    setIsEditPassLoading(false)
                }
            })
            .catch(err => {
                setIsEditPassLoading(false)
                err && err.response && toastMsg('error', err.response.data.error)
            })
    }

    const handleSaveEmail=()=>{
        setIsEditEmailLoading(true)
        let data = {
            email
        }

        axios.patch('/user/editemail', data)
            .then(res => {
                if (res.data.success) {
                    dispatch({
                        type: "SET_USER",
                        payload: res.data.user
                    })
                    toastMsg('success', 'Changed successfully')
                    setIsEditEmail(false)
                    setIsEditEmailLoading(false)
                }
            })
            .catch(err => {
                setIsEditEmailLoading(false)
                err && err.response && toastMsg('error', err.response.data.error)
            })
    }
    return (
        <div className={styles.content}>
        <ToastContainer />
        <div class={styles.heading}>
            <span style={{ fontSize: "20px" }} >Password</span>
            {
                !isEditPass && <span className={styles.text} onClick={() => setIsEditPass(true)}>Change Password</span>
            }

        </div>


        <label className={styles.label}>New Password</label>
        <input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            className={styles.input}
            disabled={!isEditPass}
            placeholder="******" />



        <label className={styles.label}>Confirm Password</label>
        <input
            value={newConfirmPassword}
            onChange={(e) => setNewConfirmPassword(e.target.value)}
            type="password"
            className={styles.input}
            disabled={!isEditPass}
            placeholder="******" />



        {
            isEditPass && <div className='my-3'>
                {
                    isEditPassLoading ? <BeatLoader
                        size={15}
                        color={"#123abc"}
                        loading={true}
                    /> : <><button onClick={() => handleSaverPassword()} className={styles.btnSave}>Save</button>
                            <button onClick={() => setIsEditPass(false)} className={styles.btnCancel}>Cancel</button></>
                }

            </div>
        }



        <div className={`${styles.heading} mt-4`}>
            <span style={{ fontSize: "20px" }} >Email</span>
            {
                !isEditEmail && <span className={styles.text} onClick={() => setIsEditEmail(true)}>Change Email</span>
            }

        </div>
        <label className={styles.label}>Your Email</label>
        <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className={styles.input}
            disabled={!isEditEmail}
            placeholder="example@email.com" />
        
        


        {
            isEditEmail && <div className='my-3'>
                {
                    isEditEmailLoading ? <BeatLoader
                        size={15}
                        color={"#123abc"}
                        loading={true}
                    /> : <><button onClick={() => handleSaveEmail()} className={styles.btnSave}>Save</button>
                            <button onClick={() => {setIsEditEmail(false) }} className={styles.btnCancel}>Cancel</button></>
                }

            </div>
        }

       

    </div>
    )
}

export default AccountSettings
