import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import axios from "axios";
import { baseUrl } from "../apiConfig";
import { useSnackbar } from "./SnackbarProvider";

const AddBloodBank = ({ handleClose, getDetails }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const { showSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bloodBankObj = {
      blood_bank_name: name,
      blood_bank_location: location,
      blood_bank_number: number,
      blood_bank_address: address,
    };

    axios
      .post(`${baseUrl}blood_bank_details`, bloodBankObj)
      .then(() => {
        showSnackbar("Successfully added blood bank");
        getDetails();
        handleClose();
      })
      .catch((error) => {
        console.error(error.message);
        showSnackbar("An error occurred. Please try again.", "error");
      });
  };

  const allValuesEntered = name && location && number && address;

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{ sx: { borderRadius: 3 } }}
    >
      <DialogTitle>Register your Blood Bank</DialogTitle>
      <Divider />
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                fullWidth
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Location"
                fullWidth
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Contact Number"
                fullWidth
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                inputProps={{ maxLength: 10, pattern: "[1-9]\\d{9}" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                fullWidth
                required
                multiline
                rows={2}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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

export default AddBloodBank;
