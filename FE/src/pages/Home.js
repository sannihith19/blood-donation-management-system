import React from "react";
import { Paper, Typography, makeStyles } from "@material-ui/core";
import { Divider } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  homePaper: {
    maxWidth: 900,
    margin: "0 auto",
    padding: theme.spacing(4),
  },
  header: {
    textAlign: "center",
    marginBottom: theme.spacing(5),
  },
  section: {
    marginBottom: theme.spacing(4),
  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  paragraph: {
    marginBottom: theme.spacing(1.5),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.homePaper}>
      <header className={classes.header}>
        <Typography variant="h3" gutterBottom>
          Blood Donation Management System
        </Typography>
        <Typography variant="subtitle1">
          A centralized platform to manage donors, blood banks, and donation
          events.
        </Typography>
      </header>
      <Divider sx={{ mb: 2, borderBottomWidth: 2 }} />
      <section className={classes.section}>
        <Typography variant="h5" className={classes.sectionTitle}>
          Overview
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          This application is designed to streamline the coordination between
          donors, hospitals, and blood banks. It allows administrators to
          register donors, create donation events, manage blood unit inventory,
          and track blood requests efficiently.
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          With real-time visibility into available blood types and donation
          history, the system helps ensure timely and accurate matching of blood
          supply with patient needs.
        </Typography>
      </section>

      <section className={classes.section}>
        <Typography variant="h5" className={classes.sectionTitle}>
          Key Features
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          • Register and manage donor profiles
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          • Create and view upcoming donation events
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          • Monitor available blood units and types
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          • Handle blood requests submitted by hospitals
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          • Maintain clean, auditable records of all transactions
        </Typography>
      </section>

      <section className={classes.section}>
        <Typography variant="h5" className={classes.sectionTitle}>
          Who Can Use This System?
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          This platform is intended for hospital administrators, blood bank
          operators, and healthcare partners who are responsible for managing
          donor programs and ensuring an adequate blood supply.
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          It can also be extended to support public-facing portals for donor
          self-registration in future deployments.
        </Typography>
      </section>

      <section className={classes.section}>
        <Typography variant="h5" className={classes.sectionTitle}>
          Contact & Support
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          For technical support or inquiries regarding the platform, please
          contact our support team:
        </Typography>
        <Typography variant="body1">
          Email: support@blooddonation.org
        </Typography>
      </section>
    </Paper>
  );
};

export default Home;
