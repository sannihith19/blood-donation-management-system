import React, { useEffect, useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import axios from "axios";
import { baseUrl } from "../apiConfig";
import { useSnackbar } from "./SnackbarProvider";

const AddDonor = (props) => {
  const { isDonorEdit, handleClose, getData, rowData } = props;
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [address, setAddress] = useState("");
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (isDonorEdit) {
      setName(rowData.donor_name);
      setNumber(rowData.donor_number);
      setEmail(rowData.donor_email);
      setAge(rowData.donor_age);
      setGender(rowData.donor_gender);
      setBloodType(rowData.donor_bloodType);
      setAddress(rowData.donor_address);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const donorObj = {
      donor_name: name,
      donor_number: number,
      donor_email: email,
      donor_age: age,
      donor_gender: gender,
      donor_bloodType: bloodType,
      donor_address: address,
      ...(isDonorEdit && { donor_id: rowData.donor_id }),
    };

    const url = isDonorEdit
      ? `${baseUrl}edit_donor_details`
      : `${baseUrl}add_donor_details`;

    axios
      .post(url, donorObj)
      .then(() => {
        showSnackbar(
          isDonorEdit
            ? "Donor updated successfully!"
            : "Donor added successfully!"
        );
        handleClose();
        getData();
      })
      .catch((error) => {
        console.error(error.message);
        showSnackbar("An error occurred. Please try again.", "error");
      });
  };

  const allValuesEntered =
    name && number && email && age && gender && bloodType && address;

  return (
    <>
      <Dialog open={true} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          {isDonorEdit
            ? "Edit Donor Information"
            : "Register to become a Donor"}
        </DialogTitle>
        <Divider />
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
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
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Age"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  inputProps={{ min: 18, max: 65 }}
                  required
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel>Gender</InputLabel>
                  <Select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    label="Gender"
                  >
                    <MenuItem value="M">Male</MenuItem>
                    <MenuItem value="F">Female</MenuItem>
                    <MenuItem value="other">Choose not to specify</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

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
                  label="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  fullWidth
                  multiline
                  rows={2}
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
            {isDonorEdit ? "Edit" : "Register"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddDonor;
