import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid';
import { Container, makeStyles } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import EditDeleteButtons from '../components/EditDeleteButtons';
import AddDonor from '../components/AddDonor';
import Button from '@mui/material/Button';


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

const Donors = () => {
    const [donors, setDonors] = useState([])
    const [isDonorDialogOpen, setIsDonorDialogOpen] = useState(false)

    useEffect(() => {
        getData()
    }, [])


const columns = [
    { field: 'donor_name', headerName: 'Name', width: 200 },
    { field: 'donor_number', headerName: 'Phone number', width: 150 },
    { field: 'donor_email', headerName: 'Email', width: 200 },
    { field: 'donor_age', headerName: 'Age', width: 100 },
    { field: 'donor_gender', headerName: 'Gender', width: 100 },
    { field: 'donor_bloodType', headerName: 'Blood Type', width: 100 },
    { field: 'donor_address', headerName: 'Address', width: 250 },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 150,
        renderCell: (params) => (
            <EditDeleteButtons
                rowData={params.row}
                getData={getData}
            />
        ),
    },

];
    const handleClose = () => {
        setIsDonorDialogOpen(false)
    }

    const getData = () =>{
        axios.get('http://localhost:8800/donor_details')
        .then((res) => {
            setDonors(res.data)
        })
        .catch((error) => {
            console.log(error.message);
        });
    }
    const classes = styles();

    return (
        <Container className={classes.container}>
            <div className={classes.typography}>
                <Typography variant="h3">Donor Details </Typography>
            </div>
            <Button onClick={() => { setIsDonorDialogOpen(true) }}>Add Donor</Button>

            {donors && (
                <div className={classes.table}>
                    <DataGrid
                        rows={donors}
                        columns={columns}
                        getRowId={(row) => row.donor_id}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 10 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                    />
                </div>
            )}

            {isDonorDialogOpen &&
                <AddDonor 
                isDonorEdit={false}
                handleClose= {handleClose}
                getData= {getData}/>}
        </Container>
    )
}

export default Donors