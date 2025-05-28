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


const AddEvent = ({ handleClose, blood_bank_id }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const { showSnackbar } = useSnackbar()

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventObj = {
      event_name: name,
      event_location: location,
      event_date: date,
      blood_bank_id: blood_bank_id,
    };
    axios
      .post(`${baseUrl}event_details`, eventObj)
      .then(() => {
        showSnackbar("Event added successfully!");
        handleClose();
      })
      .catch((error) => {
        console.log(error.message);
        showSnackbar("An error occurred. Please try again.", "error");
      });
  };

  const allValuesEntered = name && location && date;

  return (
    <Dialog open={true} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Register your Event</DialogTitle>
      <Divider />
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Event Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Event Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Event Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={date}
                onChange={(e) => setDate(e.target.value)}
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

export default AddEvent;
