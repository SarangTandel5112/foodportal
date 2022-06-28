import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./order.css"

// toast.configure()
function Order() {
    const [data, setdata] = useState({
        name: "",
        item: ""
    })

    function handelChange(event) {
        event.preventDefault()
        // alert(event.target.value);
        setdata({ ...data, [event.currentTarget.name]: event.currentTarget.value })
    }
    async function submitData() {
        const res = await axios.post("/api/foodorder", data)


        if (res.status === 201) {
            toast.success(`${res.data.data}`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        } else {
            toast.error(`${res.data.data}`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        }
        setdata({
            name: "",
            item: ""
        })

    }

    return (
        <div>
            <ToastContainer
                // toastStyle={{ color: "#03e9f4" }}
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div class="login-box">
                <h2>Welcome Foodies</h2>
                <form>
                    <div class="user-box">
                        <input type="text" name="name" required="" value={data.name} onChange={handelChange} />
                        <label>Foodie's Name :</label>
                    </div>
                    {/* <div class="user-box">
                        <input type="radio" name="name" required="" onChange={handelChange} />
                        <label>Yes</label>
                        <input type="radio" name="name" required="" onChange={handelChange} />
                        <label>Want Food On Table ? </label>
                    </div> */}
                    {/* <div class="user-box">
                        <input type="password" name="" required="" />
                        <label>Password</label>
                    </div> */}
                    <div className='row1'>
                        <button className='itembtn' name='item' value="item1" onClick={handelChange}>
                            <a href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Item1
                            </a>
                        </button>
                        <button className='itembtn' name='item' value="item2" onClick={handelChange}>
                            <a href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Item2
                            </a>
                        </button>
                    </div>
                    <br></br>
                    <div className='row2'>
                        <button className='itembtn' name='item' value="item3" onClick={handelChange}>
                            <a href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Item3
                            </a>
                        </button>
                        <button className='itembtn' name='item' value="item4" onClick={handelChange}>
                            <a href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Item4
                            </a>
                        </button>
                    </div>
                    <div className='submitbtn' onClick={submitData}>
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Place Order
                        </a>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Order