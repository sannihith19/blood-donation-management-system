import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import axios from 'axios';

const RaiseRequest = (props) => {
  const { handleClose, blood_bank_id } = props

  const [bloodType, setBloodType] = useState('')
  const [reason, setReason] = useState('')
  const [requestedUnits, setRequestedUnits] = useState()


  const handleSubmit = (e) => {
    //api call
  }




  return (
    <React.Fragment>
      <Dialog open={true} onClose={handleClose}>
        <DialogTitle>Raise a Blood Requests.</DialogTitle>
        <DialogContent>
          <div style={{ width: '500px' }}>
            <form>
              <div className="form-group">
                <label>Blood Type</label>
                <select className="form-control" id="bloodType" onChange={(e) => setBloodType(e.target.value)} value={bloodType}>
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
                <label> Reason</label>
                <input type="text" className="form-control" id="reason" placeholder="Enter your reason for request" onChange={(e) => setReason(e.target.value)} />
              </div>
              <div className="form-group">
                <label> Requested Units</label>
                <input type="number" className="form-control" id="requestedUnits" max={10} placeholder="You can request upto 10 units" onChange={(e) => setRequestedUnits(e.target.value)} />
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

export default RaiseRequest