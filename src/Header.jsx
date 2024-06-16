import React from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from './firebase'
import { useState, useEffect } from 'react'

function Header() {
  const [contactsData, setContactsData] = useState([])
  const [filteredContextData, setfilteredContextData] = useState([])

  const [InputBoxData, setinputBoxData] = useState("")

  const nevi = useNavigate()

  function addContactForm() {
    nevi("/add")
  }
  useEffect(function () {
    db.collection("contact-collection").orderBy("contactName", "asc").onSnapshot(function (snapshot) {
      //snapshot = ["doc1,doc2,doc3............"]
      setContactsData(snapshot.docs.map(function (i) {

        return { DocId: i.id, DocData: i.data() }
      }))

    })
  }, [])

  function collectsTheData(event) {
    setfilteredContextData(contactsData.filter(function (i) {
      if (i.DocData.contactName.toLowerCase().includes(event.target.value.toLowerCase())) {
        return i.DocData
      }
    }))
  }

  function deleteTheData(recevedDocId) {
    db.collection("contact-collection").doc(recevedDocId).delete()
    alert("Deleted successfully!!!!!!!!!!!!!!")
  }



  return (
    <div>


      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input className="form-control me-2" style={{ height: "50px" }} type="search" placeholder="Search" aria-label="Search" onChange={collectsTheData} />
            <button className="btn btn-outline-success" style={{ height: "50px", width: "200px" }} type="submit" onClick={addContactForm}>Add Contact</button>
          </form>
        </div>
      </nav>

      {
        filteredContextData.length == 0 ? <div>{
          contactsData.map(function (i) {
            {/* <h2>{i.DocData.contactName}</h2>
              <h3>{i.DocData.ContactNumber}</h3>
              <h3>{i.DocData.ContactEmail}</h3>
              <button onClick={function () {
                deleteTheData(i.DocId)
              }
              }>Delete</button> */}

            <div class="card" style={{ width: "35%" }}>
              <h5 class="card-header">{i.DocData.contactName}</h5>
              <div class="card-body">
                <h5 class="card-title">{i.DocData.ContactNumber}</h5>
                <p class="card-text">{i.DocData.ContactEmail}</p>
                <button className="btn btn-outline-danger" onClick={function () {
                  deleteTheData(i.DocId)
                }
                }>Delete</button>
              </div>
            </div>
          })}</div> : <div>{
            filteredContextData.map(function (i) {


              return <div>
                <div class="card" style={{ width: "25%" }}>
                  <h5 class="card-header">{i.DocData.contactName}</h5>
                  <div class="card-body">
                    <h5 class="card-title">{i.DocData.ContactNumber}</h5>
                    <p class="card-text">{i.DocData.ContactEmail}</p>
                    <button className="btn btn-outline-danger" onClick={function () {
                      deleteTheData(i.DocId)
                    }}>Delete</button>
                  </div>
                </div>
              </div>
            })}
        </div>}

    </div>)
}
          
export default Header