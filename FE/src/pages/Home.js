import React from 'react'
// import Button from '@mui/material/Button';
import { Button, makeStyles } from '@material-ui/core';
// import AddDonor from '../components/AddDonor';
import { observer } from "mobx-react-lite"

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
    homeContainer: {
        maxWidth: 800,
        margin: '0 auto',
        padding: 20,
    },
    header: {
        textAlign: 'center',
        marginBottom: 20,
    },
    section: {
        marginBottom: 30,
    },
    sectionHeader: {
        color: theme.palette.primary.main,
    },
    signupButton: {
        backgroundColor: theme.palette.secondary.main,
        color: '#fff',
        padding: '10px 20px',
        fontSize: 16,
        cursor: 'pointer',
        border: 'none',
        borderRadius: 5,
        textDecoration: 'none',
        display: 'inline-block',
    },
    signupButtonHover: {
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        },
    },
}));

const Home = () => {
    const classes = styles();

    return (<>
        <div className={classes.homeContainer}>
            <header className={classes.header}>
                <h1>Blood Donation Management System</h1>
                <p>Welcome to blood donation platform dedicated to saving lives.</p>
            </header>

            <section className={classes.section}>
                <h2 className={classes.sectionHeader}>How It Works</h2>
                <p>
                    Our Blood Donation Management System helps admin organise donors, receipts, and blood banks to create Events
                    and to help streamline blood donation process.
                </p>
                <p>
                    We can add Donors, create blood donation events and raise requests for blood
                    and manage requested blood supplies efficiently.
                </p>
            </section>

            <section className={classes.section}>
                <h2 className={classes.sectionHeader}>Get Involved</h2>
                <p>
                    If you are a potential donor, consider reaching out to us.
                </p>
                <p>
                    Hospitals and Blood banks can patner with us to improve blood inventory management
                    and enhance the blood donation experience for everyone involved.
                </p>
            </section>

            <section className={classes.section}>
                <h2 className={classes.sectionHeader}>Contact Us</h2>
                <p>
                    Have questions or need assistance? Feel free to contact our support team.
                </p>
                <p>Email: support@blooddonation.com</p>
            </section>
        </div>
    </>
    )
}

export default observer(Home)