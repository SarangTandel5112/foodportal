import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
// axios.defaults.withCredentials = true;

export const Selectbtn = (props) => {

  function changeOrderStatus(event) {
    // alert(event.target.value)
    props.changeOrderStatus(true)
  }

  // const { onecomp } = useParams();
  // let sendplacementstatus = async (event) => {

  //   let response = await axios.post("/setplacementstatus", {
  //     jobid: onecomp,
  //     studentid: event.target.value
  //   })
  //   if (response.data.msg) {

  //     props.changestatus(true);
  //     // history.push(`/companypost/${onecomp}/studentdetails`)
  //   }
  // }
  return (
    <div>
      <button className="btn btn-primary" onClick={changeOrderStatus} value={props.id}>
        Place Order
      </button>
    </div>
  )
}