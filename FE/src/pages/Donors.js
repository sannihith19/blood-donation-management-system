import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, makeStyles } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EditDeleteButtons from "../components/EditDeleteButtons";
import AddDonor from "../components/AddDonor";
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

const Donors = () => {
  const classes = useStyles();
  const [donors, setDonors] = useState([]);
  const [isDonorDialogOpen, setIsDonorDialogOpen] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`${baseUrl}donor_details`)
      .then((res) => {
        setDonors(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleClose = () => {
    setIsDonorDialogOpen(false);
  };

  const columns = [
    { field: "donor_name", headerName: "Name", flex: 1 },
    { field: "donor_number", headerName: "Phone number", flex: 1 },
    { field: "donor_email", headerName: "Email", flex: 1 },
    { field: "donor_age", headerName: "Age", flex: 0.5 },
    { field: "donor_gender", headerName: "Gender", flex: 0.7 },
    { field: "donor_bloodType", headerName: "Blood Type", flex: 0.7 },
    { field: "donor_address", headerName: "Address", flex: 1.2 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.8,
      renderCell: (params) => (
        <EditDeleteButtons rowData={params.row} getData={getData} />
      ),
    },
  ];

  return (
    <Container className={classes.container}>
      <div className={classes.typography}>
        <Typography variant="h3">Donor Details</Typography>
      </div>

      <Button
        variant="contained"
        className={classes.button}
        onClick={() => setIsDonorDialogOpen(true)}
      >
        Add Donor
      </Button>

      {donors && (
        <Table
          rows={donors}
          columns={columns}
          getRowId={(row) => row.donor_id}
        />
      )}

      {isDonorDialogOpen && (
        <AddDonor
          isDonorEdit={false}
          handleClose={handleClose}
          getData={getData}
        />
      )}
    </Container>
  );
};

export default Donors;
