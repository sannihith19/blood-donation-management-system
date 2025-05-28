import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Divider,
} from "@mui/material";

const RaiseRequest = (props) => {
  const { handleClose, blood_bank_id } = props;

  const [bloodType, setBloodType] = useState("");
  const [reason, setReason] = useState("");
  const [requestedUnits, setRequestedUnits] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    //api call
  };

  const allValuesEntered = bloodType && reason && requestedUnits;

  return (
    <Dialog open={true} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Raise a Blood Request</DialogTitle>
      <Divider />
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Blood Type</InputLabel>
                <Select
                  value={bloodType}
                  onChange={(e) => setBloodType(e.target.value)}
                  label="Blood Type"
                >
                  {["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"].map(
                    (type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Reason"
                placeholder="Enter your reason for request"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Requested Units"
                type="number"
                inputProps={{ max: 10, min: 1 }}
                placeholder="You can request up to 10 units"
                value={requestedUnits}
                onChange={(e) => setRequestedUnits(e.target.value)}
                required
                fullWidth
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={handleSubmit}
          disabled={!allValuesEntered}
          variant="contained"
        >
          Register
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RaiseRequest;
