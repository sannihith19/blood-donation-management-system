import React, { useEffect, useState } from 'react'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import axios from 'axios';

const DeleteDonor = (props) => {
  const { handleClose, getData, rowData } = props

  const handleDelete = () => {
    axios.delete(`http://localhost:8800/delete_donor?id=${rowData.donor_id}`)
      .then(response => {
        console.log('DELETE request successful:');
        handleClose()
        getData()
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  return (
    <React.Fragment>
      <Dialog open={true} onClose={handleClose}>
        <DialogTitle>Deleting a Donor</DialogTitle>
        <DialogContent>
          <div style={{ width: '500px' }}>
            Are you sure you want to delete Donor: {rowData.donor_name} with email {rowData.donor_email}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={handleDelete}>
            delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment >
  )
}

export default DeleteDonor