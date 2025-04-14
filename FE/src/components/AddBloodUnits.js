import React, { useEffect, useState } from 'react'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Container, makeStyles } from '@material-ui/core';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Typography } from '@material-ui/core';

const styles = makeStyles(theme => ({
  table: {
      height: '500px',
      width: '500px',
  },
}));

const AddBloodUnits = (props) => {
  const { handleClose } = props
  const [bloodUnitRecords, setBloodUnitRecords] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:8800/blood_unit_record')
        .then((res) => {
            setBloodUnitRecords(res.data)
        })
        .catch((error) => {
            console.log(error.message);
        });
  },[])

  const columns = [
    { field: 'blood_type', headerName: 'Blood Type', width: 200 },
    { field: 'blood_donation_date', headerName: 'Donation Date', width: 150 },
    { field: 'blood_expiration_date', headerName: 'Expiration Date', width: 150 },
    { field: 'blood_test_results', headerName: 'Test Results', width: 150 },
    { field: 'donor_id', headerName: 'Donor ID', width: 200 },
    { field: 'recipient_id', headerName: 'Recipient ID', width: 200 },

  ]


  const classes = styles();


  return (
    <React.Fragment>
      <Dialog open={true} onClose={handleClose}>
        <DialogTitle>
          <Button>
            Add Blood Units
          </Button>
        </DialogTitle>
        <DialogContent>
          <Typography>Availanble Units</Typography>
          <div className={classes.table}>
                    <DataGrid
                        rows={bloodUnitRecords}
                        columns={columns}
                        getRowId={(row) => row.blood_unit_id}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 10 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                    />
                </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment >
  )
}

export default AddBloodUnits