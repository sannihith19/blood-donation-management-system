import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";

const AddRecipient = ({ handleClose }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [bloodType, setBloodType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //api call
  };

  const allValuesEntered = name && number && address && bloodType;

  return (
    <Dialog open={true} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Add Recipient</DialogTitle>
      <Divider />
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Recipient Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
                fullWidth
                inputProps={{ maxLength: 10, pattern: "[1-9]\\d{9}" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Recipient Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
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

export default AddRecipient;
