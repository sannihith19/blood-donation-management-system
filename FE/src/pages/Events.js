import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  makeStyles,
  Paper,
  Grid,
  Card,
  CardContent,
} from '@material-ui/core';
import Typography from '@mui/material/Typography';
import AddBloodUnits from '../components/AddBloodUnits';
import { baseUrl } from '../apiConfig';

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
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
    justifyContent: 'center',
  },
  card: {
    margin: theme.spacing(2),
    width: 250,
    transition: '0.3s',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.05)',
      border: '2px solid black',
    },
  },
  cardContent: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

const Events = () => {
  const classes = useStyles();
  const [eventsData, setEventsData] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    getEventDetails();
  }, []);

  const getEventDetails = () => {
    axios
      .get(`${baseUrl}blood_donate_event`)
      .then((res) => {
        setEventsData(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Container className={classes.container}>
      <div className={classes.typography}>
        <Typography variant="h3">Event Details</Typography>
      </div>

      <Paper className={classes.paper} elevation={2}>
        <Grid container className={classes.gridContainer}>
          {Object.values(eventsData).map((option) => (
            <Card
              key={option.event_id}
              onClick={() => setIsDialogOpen(true)}
              className={classes.card}
              elevation={3}
            >
              <CardContent className={classes.cardContent}>
                <Typography variant="h6">{option.event_name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {option.blood_bank_name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {new Date(option.event_date).toLocaleDateString('en-US')}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {option.event_location}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Paper>

      {isDialogOpen && (
        <AddBloodUnits handleClose={() => setIsDialogOpen(false)} />
      )}
    </Container>
  );
};

export default Events;
