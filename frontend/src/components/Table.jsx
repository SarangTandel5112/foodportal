import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import './table.css'

function Table() {

    const [data, setdata] = useState([])
    let s = 1;
    async function fetchData() {
        const res = await axios.get("/api/foodorder/getallactiveorders")
        setdata(res.data.data)
    }

    useEffect(() => {
        fetchData()
    }, [])


    async function handleClick(event) {
        // alert(event.target.value)
        if (event.target.value == "allorder") {
            const res = await axios.get("/api/foodorder/getallactiveorders")
            setdata(res.data.data)
            console.log(res.data.data)
        }
        else if (event.target.value == "tableorder") {
            const res = await axios.get("/api/foodorder/getactivetableorders")
            setdata(res.data.data)
            console.log(res.data.data)


        }
        else if (event.target.value == "stallorder") {
            const res = await axios.get("/api/foodorder/getactiveshoporders")
            setdata(res.data.data)
            console.log(res.data.data)


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
                       
                        {data.map((one) => (

                            <tr>
                                <th scope="row">{s++}</th>
                                <td>{one.name}</td>
                                <td>{one.email}</td>
                                <td>{one.item}</td>
                                <td>{one.table.toString()}</td>
                                <td>{one.tableNo}</td>
                                <td>{one.completed.toString()}</td>
                                {/* <td><button className="btn btn-primary" onClick={() => window.open(`../../Photos/Files/sresume/${one.stddetails.resumename}`)} >View Resume</button></td> */}
                                {/* <td>{one.placementstatus ? <Selectedbtn /> : <Selectbtn id={one.stddetails._id} changestatus={setselectstatus} />}</td> */}
                            </tr>

                        ))
                        }



                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table