import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid';
import { Container, makeStyles } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddRecipient from '../components/AddRecipient';


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

const Recipients = () => {
    const [recipients, setrecipients] = useState([])
    const [isrecipientDialogOpen, setIsrecipientDialogOpen] = useState(false)

    useEffect(() => {
        getData()
    }, [])


const columns = [
    { field: 'recipient_name', headerName: 'Name', width: 200 },
    { field: 'recipient_number', headerName: 'Phone number', width: 150 },
    { field: 'recipient_address', headerName: 'Address', width: 250 },
    { field: 'blood_type', headerName: 'Blood Type', width: 250 },
];
    const handleClose = () => {
        setIsrecipientDialogOpen(false)
    }

    const getData = () =>{
        axios.get('http://localhost:8800/recipient_details')
        .then((res) => {
            setrecipients(res.data)
        })
        .catch((error) => {
            console.log(error.message);
        });
    }
    const classes = styles();

    return (
        <Container className={classes.container}>
            <div className={classes.typography}>
                <Typography variant="h3">Recipient Details </Typography>
            </div>
            <Button onClick={() => { setIsrecipientDialogOpen(true) }}>Add recipient</Button>

            {recipients && (
                <div className={classes.table}>
                    <DataGrid
                        rows={recipients}
                        columns={columns}
                        getRowId={(row) => row.recipient_id}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 10 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                    />
                </div>
            )}

            {isrecipientDialogOpen &&
                <AddRecipient
                handleClose = {()=>setIsrecipientDialogOpen(false)}/>
            }
        </Container>
    )
}

export default Recipients