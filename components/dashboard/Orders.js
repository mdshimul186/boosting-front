import React, { useState, useEffect } from 'react'
import styles from './orders.module.css'
import axios from 'axios'
import moment from 'moment'
import BeatLoader from "react-spinners/BeatLoader";

function Orders() {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('/order/myorders')
            .then(res => {
                setOrders(res.data.order)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })
    }, [])
    return (
        <div className={styles.content}>
            <div class={styles.heading}>
                <span style={{ fontSize: "20px" }} >Order Lists</span>

            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Amount</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Method</th>
                        <th scope="col">TrxId/Email</th>
                        <th scope="col">Status</th>
                        <th scope="col">Order ID</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loading ? <div style={{margin:"20px auto"}}>
                        <BeatLoader
                        size={15}
                        color={"#123abc"}
                        loading={true}
                        
                    />
                        </div>:
                        orders.length ? orders.map((order, index) => {
                            return (
                                <tr>
                                    <th>{index+1}</th>
                                    <td>{order.total} BDT</td>
                                    <td>{order.name}</td>
                                    <td>{order.paymentMethod}</td>
                                    <td>{order.paymentDetails}</td>
                                    <td>{order.status}</td>
                                    <td>{order.orderId}</td>
                                    <td>{moment(order.createdAt).fromNow()}</td>
                                </tr>
                            )
                        }):
                        <p>No orders found</p>
                    }


                </tbody>
            </table>
        </div>
    )
}

export default Orders
