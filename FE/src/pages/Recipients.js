import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, makeStyles } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddRecipient from "../components/AddRecipient";
import { baseUrl } from "../apiConfig";
import Table from "../components/Table";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
  },
  typography: {
    margin: theme.spacing(4, 0, 2),
  },
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
}));

const Recipients = () => {
  const classes = useStyles();
  const [recipients, setRecipients] = useState([]);
  const [isRecipientDialogOpen, setIsRecipientDialogOpen] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`${baseUrl}recipient_details`)
      .then((res) => {
        setRecipients(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleClose = () => {
    setIsRecipientDialogOpen(false);
  };

  const columns = [
    { field: "recipient_name", headerName: "Name", flex: 1 },
    { field: "recipient_number", headerName: "Phone Number", flex: 1 },
    { field: "recipient_address", headerName: "Address", flex: 1.5 },
    { field: "blood_type", headerName: "Blood Type", flex: 0.8 },
  ];

  return (
    <Container className={classes.container}>
      <div className={classes.typography}>
        <Typography variant="h3">Recipient Details</Typography>
      </div>

      <Button
        variant="contained"
        className={classes.button}
        onClick={() => setIsRecipientDialogOpen(true)}
      >
        Add Recipient
      </Button>

      {recipients && (
        <Table
          rows={recipients}
          columns={columns}
          getRowId={(row) => row.recipient_id}
        />
      )}

      {isRecipientDialogOpen && <AddRecipient handleClose={handleClose} />}
    </Container>
  );
};

export default Recipients;
