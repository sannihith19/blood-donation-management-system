import React, { useEffect, useState } from 'react'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import axios from 'axios';

const AddDonor = (props) => {
  const { isDonorEdit, handleClose, getData, rowData } = props
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState('')
  const [bloodType, setBloodType] = useState('')
  const [address, setAddress] = useState('')

  useEffect(() => {
    if (isDonorEdit) {
      setName(rowData.donor_name)
      setNumber(rowData.donor_number)
      setEmail(rowData.donor_email)
      setAge(rowData.donor_age)
      setGender(rowData.donor_gender)
      setBloodType(rowData.donor_bloodType)
      setAddress(rowData.donor_address)
    }
  }, [])




  const onBloodTypeSelect = (e) => {
    setBloodType(e.target.value)
  }

  const onGenderSelect = (e) => {
    setGender(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let donorObj = {
      donor_name: name,
      donor_number: number,
      donor_email: email,
      donor_age: age,
      donor_gender: gender,
      donor_bloodType: bloodType,
      donor_address: address
    }
    if (isDonorEdit) {
      donorObj = {...donorObj, donor_id: rowData.donor_id}
      axios.post('http://localhost:8800/edit_donor_details', donorObj)
        .then((res) => {
          console.log("successfully edited")
          handleClose()
          getData()
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      axios.post('http://localhost:8800/add_donor_details', donorObj)
        .then((res) => {
          console.log("successfully added")
          handleClose()
          getData()
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }

  const allValuesEntered = name && number && email && age && gender && bloodType && address


  return (
    <React.Fragment>
      <Dialog open={true} onClose={handleClose}>
        <DialogTitle>{isDonorEdit ? "Edit Donor Information." : "Register to become a Donor."}</DialogTitle>
        <DialogContent>
          <div style={{ width: '500px' }}>
            <form>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} value={name} />
              </div>
              <div className="form-group">
                <label>Phone number</label>
                <input type="text" className="form-control" id="number" placeholder="Enter your mobile name" maxLength={10} pattern="[1-9]\d{9}" onChange={(e) => setNumber(e.target.value)} value={number} />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} value={email} />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input type="Number" className="form-control" id="age" placeholder="Enter your age" onChange={(e) => setAge(e.target.value)} value={age} />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select className="form-control" id="gender" onChange={onGenderSelect} value={gender}>
                  <option value='' hidden></option>
                  <option value='M'>Male</option>
                  <option value='F'>Female</option>
                  <option value='other'>Choose not to specify</option>
                </select>
              </div>
              <div className="form-group">
                <label>Blood Type</label>
                <select className="form-control" id="bloodType" onChange={onBloodTypeSelect} value={bloodType}>
                  <option value='' hidden></option>
                  <option value='O+' >O+</option>
                  <option value='O-' >O-</option>
                  <option value='A+' >A+</option>
                  <option value='A-' >A-</option>
                  <option value='B+' >B+</option>
                  <option value='B-' >B-</option>
                  <option value='AB+' >AB+</option>
                  <option value='AB-' >AB-</option>
                </select>
              </div>
              <div className="form-group">
                <label>Address</label>
                <textarea className="form-control" id="address" rows="2" onChange={(e) => setAddress(e.target.value)} value={address}></textarea>
              </div>
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={handleSubmit}
            disabled={!allValuesEntered}
          >
            {isDonorEdit ? "Edit" : "Register"}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment >
  )
}

export default AddDonor