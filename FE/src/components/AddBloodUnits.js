import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import axios from "axios";
import { baseUrl } from "../apiConfig";
import Table from "./Table";

const AddBloodUnits = ({ handleClose }) => {
  const [bloodUnitRecords, setBloodUnitRecords] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}blood_unit_record`)
      .then((res) => setBloodUnitRecords(res.data))
      .catch((error) => console.log(error.message));
  }, []);

  const columns = [
    { field: "blood_type", headerName: "Blood Type", width: 150 },
    { field: "blood_donation_date", headerName: "Donation Date", width: 150 },
    {
      field: "blood_expiration_date",
      headerName: "Expiration Date",
      width: 150,
    },
    { field: "blood_test_results", headerName: "Test Results", width: 150 },
    { field: "donor_id", headerName: "Donor ID", width: 150 },
    { field: "recipient_id", headerName: "Recipient ID", width: 150 },
  ];

  return (
    <Dialog open={true} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>
        <Typography variant="h6">Available Blood Units</Typography>
      </DialogTitle>
      <Divider />
      <DialogContent sx={{ pt: 2 }}>
        <div style={{ height: 500, width: "100%" }}>
          <Table
            rows={bloodUnitRecords}
            columns={columns}
            getRowId={(row) => row.blood_unit_id}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddBloodUnits;
