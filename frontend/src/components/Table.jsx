import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function Table() {

    const [data, setdata] = useState([])

    async function fetchData() {
        const res = await axios.post()
    }

    useEffect(() => {
        fetchData()
    }, [])


    async function handleClick(event) {
        // alert(event.target.value)
        if (event.target.value == "allorder") {
            const res = await axios.get("/api/foodorder/getallactiveorders")
        }
        else if (event.target.value == "tableorder") {
            const res = await axios.get("/api/foodorder/getactivetableorder")
        }
        else if (event.target.value == "stallorder") {
            const res = await axios.get("/api/foodorder/getactiveshoporders")
        }
    }

    return (
        <div className='maintablediv container'>
            <div className="stdtable">
                <button className='btn btn-lg btn-primary' value="allorder" onClick={handleClick}>All Order</button>
                <button className='btn btn-lg btn-primary' value="tableorder" onClick={handleClick}>Table Order</button>
                <button className='btn btn-lg btn-primary' value="stallorder" onClick={handleClick}>Stall Order</button>

                <table className="table table-striped ">
                    <thead>
                        <tr>
                            <th scope="col">Sr No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Item</th>
                            <th scope="col">Table</th>
                            <th scope="col">TableNo</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>jhgcfb</td>
                            <td>hgdsv</td>
                            <td>jgvbsc vhjcxbn</td>
                            {/* <td><button className="btn btn-primary" onClick={() => window.open(`../../Photos/Files/sresume/${one.stddetails.resumename}`)} >View Resume</button></td> */}
                            {/* <td>{one.placementstatus ? <Selectedbtn /> : <Selectbtn id={one.stddetails._id} changestatus={setselectstatus} />}</td> */}
                        </tr>
                        {/* {compdata.map((one) => (

                            <tr>
                                <th scope="row">{s++}</th>
                                <td>{one.stddetails.name}</td>
                                <td>{one.stddetails.email.emailId}</td>
                                <td>{one.stddetails.cgpa}</td>
                                <td><button className="btn btn-primary" onClick={() => window.open(`../../Photos/Files/sresume/${one.stddetails.resumename}`)} >View Resume</button></td>
                                <td>{one.placementstatus ? <Selectedbtn /> : <Selectbtn id={one.stddetails._id} changestatus={setselectstatus} />}</td>
                            </tr>

                        ))
                        } */}



                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table