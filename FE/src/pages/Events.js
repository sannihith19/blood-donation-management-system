import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, makeStyles, Paper, Grid, Card, CardContent } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import AddBloodUnits from '../components/AddBloodUnits';


const styles = makeStyles(theme => ({
    button: {
        // margin: "5px !important"
    },
    container: {

        textAlign: "center"
    },
    table: {
        height: '100%',
        width: '100%',
    },
    typography: {
        margin: "20px"
    },
    paper: {
        margin: '10px',
        borderRadius: '20px',
        padding: '20px',
    },
    card: {
        margin: '10px',
        cursor: 'pointer',
        width: '20%',
        '&:hover': {
            height: 'calc(25% + 20px)',
            width: 'calc(25% + 20px)',
            border: '5px solid black'
        }
    },
    cardContent: {
        padding: "20px",
        height: "75px"
    }
}));

const Events = () => {
    const [eventsData, setEventsData] = useState([])
    const [isDialogOpen, setIsDialogOpen] = useState(false)


    useEffect(() => {
        getEventDetails()
    }, [])


    const getEventDetails = () => {
        axios.get('http://localhost:8800/blood_donate_event')
            .then((res) => {
                setEventsData(res.data)
            })
            .catch((error) => {
                console.log(error.message);
            });

    }


    const classes = styles();

    return (
        <Container className={classes.container}>
            <div className={classes.typography}>
                <Typography variant="h3">Event Details </Typography>
            </div>
            <Paper className={classes.paper}>
                <Grid container>

                    {Object.values(eventsData).map((option) =>
                        <Card onClick={() => { setIsDialogOpen(true) }} className={classes.card}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {option.event_name}
                                </Typography>
                                <Typography color="textSecondary">
                                    {option.blood_bank_name}
                                </Typography>
                                <Typography color="textSecondary">
                                    {new Date(option.event_date).toLocaleDateString('en-US')}
                                </Typography>
                                <Typography color="textSecondary">
                                    {option.event_location}
                                </Typography>
                            </CardContent>
                        </Card>
                    )}
                </Grid>
            </Paper>

            {isDialogOpen && 
                <AddBloodUnits 
                handleClose = {() => setIsDialogOpen(false)}/>
            }

        </Container>
    )
}

export default Events