import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, makeStyles } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RaiseRequest from "../components/RaiseRequest";
import { baseUrl } from "../apiConfig";
import Table from "../components/Table";

const styles = makeStyles((theme) => ({
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

const BloodRequests = () => {
  const [bloodRequests, setBloodRequests] = useState([]);
  const [isRequestDialogOpen, setIsRequestDialogOpen] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    { field: "blood_type", headerName: "Blood Type", width: 200 },
    { field: "request_reason", headerName: "Reason", width: 200 },
    { field: "requested_units", headerName: "Requested Units", width: 150 },
  ];

  const handleClose = () => {
    setIsRequestDialogOpen(false);
  };

  const getData = () => {
    axios
      .get(`${baseUrl}blood_request_details`)
      .then((res) => {
        setBloodRequests(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const classes = styles();

  return (
    <Container className={classes.container}>
      <div className={classes.typography}>
        <Typography variant="h3">Blood Requests</Typography>
      </div>

      <Button
        variant="contained"
        className={classes.button}
        onClick={() => setIsRequestDialogOpen(true)}
      >
        Raise Request
      </Button>

      {bloodRequests && (
        <Table
          rows={bloodRequests}
          columns={columns}
          getRowId={(row) => row.request_id}
        />
      )}

      {isRequestDialogOpen && <RaiseRequest handleClose={handleClose} />}
    </Container>
  );
};

export default BloodRequests;
