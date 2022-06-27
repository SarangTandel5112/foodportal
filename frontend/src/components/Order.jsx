import React from 'react'
import { useState } from 'react'

function Order() {

    const [data, setdata] = useState({
        name: "",
        item: ""
    })

    function handelChange(event) {
        event.preventDefault();
        alert(event.target.value);
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    function submitData() {
        console.log(data);
    }

    return (
        <div>
            <div class="login-box">
                <h2>Welcome Foodies</h2>
                <form>
                    <div class="user-box">
                        <input type="text" name="name" required="" value={data.name} onChange={handelChange} />
                        <label>Foodie's Name :</label>
                    </div>
                    {/* <div class="user-box">
                        <input type="password" name="" required="" />
                        <label>Password</label>
                    </div> */}
                    <div className='row1'>
                        <button className='itembtn' type='button' name='item' value="item1" onChange={handelChange}>
                            <a href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Item1
                            </a>
                        </button>
                        <button className='itembtn' name='item' value="item2" onChange={handelChange}>
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
                        <button className='itembtn' name='item' value="item3" onChange={handelChange}>
                            <a href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Item3
                            </a>
                        </button>
                        <button className='itembtn' name='item' value="item4" onChange={handelChange}>
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