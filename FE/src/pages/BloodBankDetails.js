import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, makeStyles, Paper, Grid, Card } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddBloodBank from '../components/AddBloodBank';
import AddEvent from '../components/AddEvent';
import Home from './Home';

const styles = makeStyles(theme => ({
    button: {
        margin: "10px !important"
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
        backgroundColor: '#E4E4E4',
        margin: "10px",
        width: "500px",
        height: "fit-content"
    },
    cardContent: {
        padding: "20px",
        height: "175px",
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'calibri',
    }
}));


const BloodBankDetails = () => {

    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [optionsData, setOptionsData] = useState([])
    const [isEventDialogOpen, setIsEventDialogOpen] = useState(false)
    const [selectedId, setSelectedId] = useState()




    useEffect(() => {
        getBloodBankDetails()
    }, [])

    const getBloodBankDetails = () => {
        axios.get('http://localhost:8800/blood_bank_details')
            .then((res) => {
                setOptionsData(res.data)
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const handleAddEvent = (id) => {
        setSelectedId(id)
        setIsEventDialogOpen(true)
    }

    const classes = styles();

    return (
        <Container className={classes.container}>
            <div className={classes.typography}>
                <Typography variant="h3">Blood Bank Details </Typography>
            </div>
            <Button onClick={() => { setIsDialogOpen(true) }}>Add Blood Bank</Button>
            <Paper className={classes.paper}>
                <Grid container>

                    {Object.values(optionsData).map((option) =>
                        <Card className={classes.card}>

                            <Grid item className={classes.cardContent}>

                                <p>{option.blood_bank_name}</p>
                                <p>{option.blood_bank_location}</p>
                                <p>{option.blood_bank_number}</p>
                                <p>{option.blood_bank_address}</p>

                            </Grid>
                            <hr />
                            <Button className={classes.button}
                                onClick={()=>handleAddEvent(option.blood_bank_id)}>
                                organise event
                            </Button>
                        </Card>
                    )}
                </Grid>
            </Paper>

            {isDialogOpen &&
                <AddBloodBank
                    handleClose={() => setIsDialogOpen(false)}
                    getDetails={getBloodBankDetails} />}


            {isEventDialogOpen &&
                <AddEvent
                    handleClose={() => setIsEventDialogOpen(false)}
                    blood_bank_id = {selectedId} />}

        </Container>
    )
}

export default BloodBankDetails