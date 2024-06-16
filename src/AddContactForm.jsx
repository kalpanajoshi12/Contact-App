import React, { useState } from 'react'
import { db } from './firebase'
import { Navigate, useNavigate } from 'react-router-dom'

function AddContactForm() {
  const nevigate = useNavigate()
  const [contactName, setContactName] = useState("")

  function collectContactname(info) {
    setContactName(info.target.value)
  }

  const [ContactEmail, setEmailAddress] = useState("")
  function collectEmailAddress(info) {
    setEmailAddress(info.target.value)
  }

  const [ContactNumber, setContactNumber] = useState("")
  function collectNumber(info) {
    setContactNumber(info.target.value)
  }
  function saveTheContact() {
    db.collection("contact-collection").add({
      contactName,
      ContactEmail,
      ContactNumber

    })
    nevigate("/home")
  }

  return (
    <div>

      <div class="mb-2" style={{width:"50%"}}>
        <label for="exampleFormControlInput1" class="form-label">Enter name</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter a name" onChange={collectContactname} />
      </div>

      <div class="mb-2" style={{width:"50%"}}>
        <label for="exampleFormControlInput1" class="form-label">Enter Address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter a email" onChange={collectEmailAddress} />
      </div>
      <div class="mb-2" style={{width:"50%"}}>
        <label for="exampleFormControlInput1" class="form-label">Enter a Number</label>
        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter a number" onChange={collectNumber} />
      </div>
      <button className="btn btn-outline-success" style={{marginLeft:"25%"}} onClick={saveTheContact}>Save Contact</button>
    </div>
  )
}

export default AddContactForm
