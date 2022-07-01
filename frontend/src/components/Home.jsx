import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div class="login-box homi-box">
            <form>

                <div className='row1'>

                    <button className='itembtn' name='item' value="Waffer Kurkure Bhel">
                        <Link to="/order">
                            <a href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Place Order
                            </a>
                        </Link>
                    </button>

                    <button className='itembtn' name='item' value="Pizza Bhel" >
                        <Link to="/feedback">
                            <a href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Give Feedback
                            </a>
                        </Link>
                    </button>

                    {/* <button className='itembtn' name='item' value="Banana Bhel(Jain)">
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Banana Bhel(Jain)
                        </a>
                    </button> */}


                </div>


            </form>
        </div>
    )
}

export default Home