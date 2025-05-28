import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  makeStyles,
  Paper,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@material-ui/core";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddBloodBank from "../components/AddBloodBank";
import AddEvent from "../components/AddEvent";
import { baseUrl } from "../apiConfig";

const styles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  container: {
    textAlign: "center",
  },
  typography: {
    margin: theme.spacing(4, 0, 2),
  },
  paper: {
    margin: theme.spacing(2),
    borderRadius: theme.spacing(2.5),
    padding: theme.spacing(3),
  },
  gridContainer: {
    justifyContent: "center",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#E4E4E4",
    margin: theme.spacing(1),
    width: 300,
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.01)",
    },
  },
  cardContent: {
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "calibri",
  },
}));

const BloodBankDetails = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [optionsData, setOptionsData] = useState([]);
  const [isEventDialogOpen, setIsEventDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    getBloodBankDetails();
  }, []);

  const getBloodBankDetails = () => {
    axios
      .get(`${baseUrl}blood_bank_details`)
      .then((res) => {
        setOptionsData(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleAddEvent = (id) => {
    setSelectedId(id);
    setIsEventDialogOpen(true);
  };

  const classes = styles();

  return (
    <Container className={classes.container}>
      <div className={classes.typography}>
        <Typography variant="h3">Blood Bank Details</Typography>
      </div>
      <Button variant="contained" onClick={() => setIsDialogOpen(true)}>
        Add Blood Bank
      </Button>

      <Paper className={classes.paper} elevation={2}>
        <Grid container className={classes.gridContainer} spacing={2}>
          {optionsData.map((option) => (
            <Grid item key={option.blood_bank_id}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" gutterBottom>
                    {option.blood_bank_name}
                  </Typography>
                  <Typography variant="body2">
                    {option.blood_bank_location}
                  </Typography>
                  <Typography variant="body2">
                    {option.blood_bank_number}
                  </Typography>
                  <Typography variant="body2">
                    {option.blood_bank_address}
                  </Typography>
                </CardContent>
                <Divider />
                <div style={{ padding: "16px", textAlign: "center" }}>
                  <Button
                    variant="outlined"
                    size="small"
                    className={classes.button}
                    onClick={() => handleAddEvent(option.blood_bank_id)}
                  >
                    Organise Event
                  </Button>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {isDialogOpen && (
        <AddBloodBank
          handleClose={() => setIsDialogOpen(false)}
          getDetails={getBloodBankDetails}
        />
      )}

      {isEventDialogOpen && (
        <AddEvent
          handleClose={() => setIsEventDialogOpen(false)}
          blood_bank_id={selectedId}
        />
      )}
    </Container>
  );
};

export default BloodBankDetails;
