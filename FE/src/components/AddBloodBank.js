import React, { useState } from 'react'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import axios from 'axios';

const AddBloodBank = (props) => {
  const { handleClose, getDetails } = props
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [number, setNumber] = useState('')
  const [address, setAddress] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let bloodBankObj = {
      blood_bank_name: name,
      blood_bank_location: location,
      blood_bank_number: number,
      blood_bank_address: address
    }
    axios.post('http://localhost:8800/blood_bank_details', bloodBankObj)
    .then((res) => {
        console.log("successfully added blood bank")
        getDetails()
        handleClose()
    })
    .catch((error) => {
        console.log(error.message);
    });
  }

  const allValuesEntered = name && location && number && address


  return (
    <React.Fragment>
      <Dialog open={true} onClose={handleClose}>
        <DialogTitle>Register your Blood Bank.</DialogTitle>
        <DialogContent>
          <div style={{ width: '500px' }}>
            <form>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name of your blood bank" onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input type="text" className="form-control" id="location" placeholder="Enter your city" onChange={(e) => setLocation(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Contact number</label>
                <input type="text" className="form-control" id="number" placeholder="Enter your mobile name" maxLength={10} pattern="[1-9]\d{9}" onChange={(e) => setNumber(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Address</label>
                <textarea className="form-control" id="address" rows="2" onChange={(e) => setAddress(e.target.value)}></textarea>
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
              Register
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment >
  )
}

export default AddBloodBank