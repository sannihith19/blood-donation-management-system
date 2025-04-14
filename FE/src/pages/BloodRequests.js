import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid';
import { Container, makeStyles } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import EditDeleteButtons from '../components/EditDeleteButtons';
import Button from '@mui/material/Button';
import RaiseRequest from '../components/RaiseRequest';


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
    }
}));

const BloodRequests = () => {
    const [bloodRequests, setBloodRequests] = useState([])
    const [isRequestDialogOpen, setIsRequestDialogOpen] = useState(false)

    useEffect(() => {
        getData()
    }, [])


const columns = [
    { field: 'blood_type', headerName: 'Blood Type', width: 200 },
    { field: 'request_reason', headerName: 'Reason', width: 200 },
    { field: 'requested_units', headerName: 'Requested Units', width: 150 },
];
    const handleClose = () => {
        setIsRequestDialogOpen(false)
    }

    const getData = () =>{
        axios.get('http://localhost:8800/blood_request_details')
        .then((res) => {
            setBloodRequests(res.data)
        })
        .catch((error) => {
            console.log(error.message);
        });
    }
    const classes = styles();

    return (
        <Container className={classes.container}>
            <div className={classes.typography}>
                <Typography variant="h3">Blood Requests </Typography>
            </div>
            <Button onClick={() => { setIsRequestDialogOpen(true) }}>Raise Request</Button>

            {bloodRequests && (
                <div className={classes.table}>
                    <DataGrid
                        rows={bloodRequests}
                        columns={columns}
                        getRowId={(row) => row.request_id}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 10 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                    />
                </div>
            )}

            {isRequestDialogOpen &&
                <RaiseRequest
                handleClose={()=>setIsRequestDialogOpen(false)}/>
            }
        </Container>
    )
}

export default BloodRequests