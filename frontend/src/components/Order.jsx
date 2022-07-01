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
        item: "",
        table: "",
        tableNo: ""
    })
    const [table, settable] = useState(false)

    function handelChange(event) {
        event.preventDefault()
        // alert(event.target.value);
        setdata({ ...data, [event.currentTarget.name]: (event.currentTarget.value).trim() })
    }

    function handleRadiobtn(event) {
        setdata({ ...data, [event.currentTarget.name]: event.currentTarget.value });
        // alert(event.target.value)
        if (event.target.value == "yes") {
            settable(true)
        }
        else if (event.target.value == "no") {
            // alert("no")
            settable(false)
        }
    }

    async function submitData(event) {
        alert("helo")
        const res = await axios.post("/api/foodorder", data)
        console.log(data);

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
        settable(false)
        var yesradioButton = document.getElementById('yesfood')
        var noradioButton = document.getElementById('nofood')
        yesradioButton.checked = false;
        noradioButton.checked = false;
        event.target.blur();
        // var submitBtn = document.getElementById('submitBtn');
        // submitBtn.focus = false;
        setdata({
            name: "",
            email: "",
            item: "",
            table: "",
            tableNo: ""
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
            <div class="login-box margini-box">
                <h2>Welcome Foodies to The Bhel House</h2>
                <form>
                    <div class="user-box">
                        <input type="text" name="name" required="" value={data.name} onChange={handelChange} />
                        <label>Foodie's Name :</label>
                    </div>
                    <div class="user-box">
                        <input type="text" name="email" required="" value={data.email} onChange={handelChange} />
                        <label>Foodie's Email :</label>
                    </div>
                    <div class="user-box1">
                        <label className='labelname'>Want Food On Table ? </label>
                        {/* <br></br> */}
                        <input type="radio" className='foodtable' id='yesfood' value="yes" name="table" onChange={handleRadiobtn} />
                        <label className='label1 foodtable yeslabel' htmlFor="yesfood" >Yes</label>
                        <input type="radio" className='foodtable' id='nofood' value="no" name="table" required="" onChange={handleRadiobtn} />
                        <label className='label1 foodtable' htmlFor="nofood">No</label>
                    </div>

                    {table === true ? <div class="user-box tablenodiv" id='tablenodiv'>
                        <input type="text" name="tableNo" value={data.tableNo} onChange={handelChange} />
                        <label>Enter Your Table Number :</label>
                    </div> : <div></div>}



                    {/* <div class="user-box">
                        <input type="password" name="" required="" />
                        <label>Password</label>
                    </div> */}
                    <div className='row1'>
                        <button className='itembtn' name='item' value="Waffer Kurkure Bhel" onClick={handelChange}>
                            <a href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Waffer Kurkure Bhel
                            </a>
                        </button>
                        <button className='itembtn' name='item' value="Pizza Bhel" onClick={handelChange}>
                            <a href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Pizza Bhel
                            </a>
                        </button>
                    </div>
                    <br></br>
                    <div className='row2'>
                        <button className='itembtn' name='item' value="Cream onion Bhel" onClick={handelChange}>
                            <a href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Cream onion Bhel
                            </a>
                        </button>
                        <button className='itembtn' name='item' value="Banana Bhel(Jain)" onClick={handelChange}>
                            <a href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Banana Bhel(Jain)
                            </a>
                        </button>
                    </div>
                    <div className='submitbtn' id='submitBtn' >
                        <a href="#" onClick={submitData}>
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