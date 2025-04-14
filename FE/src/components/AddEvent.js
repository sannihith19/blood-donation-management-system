import React, { useState } from 'react'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import axios from 'axios';

const AddEvent = (props) => {
  const { handleClose, blood_bank_id } = props
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    let eventObj = {
      event_name: name,
      event_location: location,
      event_date: date,
      blood_bank_id: blood_bank_id
    }
    axios.post('http://localhost:8800/event_details', eventObj)
      .then((res) => {
        console.log("successfully added event")
        handleClose()
      })
      .catch((error) => {
        console.log(error.message);
      });
  }


  const allValuesEntered = name && location && date


  return (
    <React.Fragment>
      <Dialog open={true} onClose={handleClose}>
        <DialogTitle>Register your Event.</DialogTitle>
        <DialogContent>
          <div style={{ width: '500px' }}>
            <form>
              <div className="form-group">
                <label> Event Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name of your Event" onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-group">
                <label> Event Location</label>
                <input type="text" className="form-control" id="location" placeholder="Enter your event location" onChange={(e) => setLocation(e.target.value)} />
              </div>
              <div className="form-group">
                <label> Event Date</label>
                <input type="date" className="form-control" id="date" placeholder="" onChange={(e) => setDate(e.target.value)} />
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

export default AddEvent