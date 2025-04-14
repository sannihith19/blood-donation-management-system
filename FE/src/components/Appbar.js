import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AppBarComponent = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Blood Donation Management System
        </Typography>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/donors" color="inherit">
          Donors
        </Button>
        <Button component={Link} to="/bloodBankDetails" color="inherit">
          Blood Bank Details
        </Button>
        <Button component={Link} to="/events" color="inherit">
          Events
        </Button>
        <Button component={Link} to="/bloodRequests" color="inherit">
          Blood Requests
        </Button>
        <Button component={Link} to="/recipients" color="inherit">
          Recipiants
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;