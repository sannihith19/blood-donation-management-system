import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import axios from "axios";
import { baseUrl } from "../apiConfig";
import { useSnackbar } from "./SnackbarProvider";

const DeleteDonor = (props) => {
  const { handleClose, getData, rowData } = props;
  const { showSnackbar } = useSnackbar();

  const handleDelete = () => {
    axios
      .delete(`${baseUrl}delete_donor?id=${rowData.donor_id}`)
      .then(() => {
        showSnackbar("Donor deleted successfully!");
        handleClose();
        getData();
      })
      .catch((error) => {
        console.log(error.message);
        showSnackbar("An error occurred. Please try again.", "error");
      });
  };

  return (
    <Dialog open={true} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Deleting a Donor</DialogTitle>
      <Divider />
      <DialogContent>
        <Box mt={1} mb={2}>
          <Typography>
            Are you sure you want to delete Donor:{" "}
            <strong>{rowData.donor_name}</strong> with email{" "}
            <strong>{rowData.donor_email}</strong>?
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleDelete} variant="contained" color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDonor;
