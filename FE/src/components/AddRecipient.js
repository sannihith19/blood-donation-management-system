import React, { useState } from 'react'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import axios from 'axios';

const AddRecipient = (props) => {
  const { handleClose } = props
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [address, setAddress] = useState('')
  const [bloodType, setBloodType] = useState('')


  const handleSubmit = (e) => {
  //api call
  }


  return (
    <React.Fragment>
      <Dialog open={true} onClose={handleClose}>
        <DialogTitle>Add Recipient.</DialogTitle>
        <DialogContent>
          <div style={{ width: '500px' }}>
            <form>
              <div className="form-group">
                <label> Recipient Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name of recipient" onChange={(e) => setName(e.target.value)} value={name}/>
              </div>
              <div className="form-group">
                <label>Phone number</label>
                <input type="text" className="form-control" id="number" placeholder="Enter your mobile name" maxLength={10} pattern="[1-9]\d{9}" onChange={(e) => setNumber(e.target.value)} value={number} />
              </div>
              <div className="form-group">
                <label> Recipient Address</label>
                <input type="text" className="form-control" id="location" placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Blood Type</label>
                <select className="form-control" id="bloodType" onChange={(e)=>setBloodType(e.target.value)} value={bloodType}>
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
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
          onClick={handleSubmit}
          >
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment >
  )
}

export default AddRecipient