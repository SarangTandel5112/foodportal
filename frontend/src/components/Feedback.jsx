import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./feedback.css"


// toast.configure()
function Feedback() {
    const [data, setdata] = useState({
        name: "",
        email:"",
        feedback: "",
        rate: ""
    })

    function handelChange(event) {
        // alert(event.currentTarget.value)
        // event.preventDefault()
        // event.currentTarget.name.checked = "true";
        // alert(event.target.value);
        setdata({ ...data, [event.currentTarget.name]: event.currentTarget.value })
    }
    async function submitData(event) {
        event.preventDefault()
        console.log(data);
        const res = await axios.post("/api/feedback", data);
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
            feedback: "",
            rate: "3"
        })

    }

    return (
        <div className='maindiv' id='maindiv'>
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
                <h2>Please Share Your Feedback</h2>
                <form>
                    <div class="user-box">
                        <input type="text" name="name" required="" value={data.name} onChange={handelChange} />
                        <label>Foodie's Name :</label>
                    </div>
                    <div class="user-box">
                        <input type="email" name="email" required="" value={data.email} onChange={handelChange} />
                        <label>Foodie's Email :</label>
                    </div>
                    <div class="user-box">
                        <input type="text" name="feedback" required="" value={data.feedback} onChange={handelChange} />
                        <label>Foodie's Feedback :</label>
                    </div>
                    {/* <div class="user-box">
                        <input type="password" name="" required="" />
                        <label>Password</label>
                    </div> */}
                    <div className='feedbackemoji'>
                        <div class="wrapper " id='feedbackemoji'>
                            {/* <a href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span> */}
                            <input type="radio" name="rate" value="1" id="star-1" onChange={handelChange}  />
                            <input type="radio" name="rate" value="2" id="star-2" onChange={handelChange} />
                            <input type="radio" name="rate" value="3" id="star-3" onChange={handelChange} defaultChecked />
                            <input type="radio" name="rate" value="4" id="star-4" onChange={handelChange} />
                            <input type="radio" name="rate" value="5" id="star-5" onChange={handelChange} />
                            <div class="content">
                                <div class="outer">
                                    <div class="emojis">
                                        <li class="slideImg"><img src="../../emoji-1.png" alt="" /></li>
                                        <li><img src="../../emoji-2.png" alt="" /></li>
                                        <li><img src="../../emoji-3.png" alt="" /></li>
                                        <li><img src="../../emoji-4.png" alt="" /></li>
                                        <li><img src="../../emoji-6.png" alt="" /></li>
                                    </div>
                                </div>
                                <div class="stars">
                                    <label htmlFor="star-1" class="star-1 fas fa-star"></label>
                                    <label htmlFor="star-2" class="star-2 fas fa-star"></label>
                                    <label htmlFor="star-3" class="star-3 fas fa-star"></label>
                                    <label htmlFor="star-4" class="star-4 fas fa-star"></label>
                                    <label htmlFor="star-5" class="star-5 fas fa-star"></label>
                                </div>
                            </div>
                            <div class="footer">
                                <span class="text"></span>
                                <span class="numb"></span>
                            </div>
                            {/* </a> */}
                        </div>
                    </div>
                    <div className='submitbtn' >
                        <a href="#" onClick={submitData}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit Review
                        </a>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Feedback