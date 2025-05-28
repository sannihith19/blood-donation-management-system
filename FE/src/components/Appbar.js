import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Donors", path: "/donors" },
  { label: "Blood Bank", path: "/bloodBankDetails" },
  { label: "Events", path: "/events" },
  { label: "Requests", path: "/bloodRequests" },
  { label: "Recipients", path: "/recipients" },
];

const AppBarComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap fontSize="1.5rem">
            Blood Donation Management System
          </Typography>

          {/* Hamburger menu for small screens */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Buttons in AppBar for big screens */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navLinks.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                color="inherit"
                sx={{
                  fontWeight:
                    location.pathname === item.path ? "bold" : "normal",
                  fontSize: "1rem",
                  color: location.pathname === item.path ? "#000" : "#fff",
                  backgroundColor:
                    location.pathname === item.path ? "#e0e0e0" : "transparent",
                  "&:hover": {
                    backgroundColor: "#d5d5d5",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for small screens */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setDrawerOpen(false)}
        >
          <List>
            {navLinks.map((item) => (
              <ListItem
                button
                component={Link}
                to={item.path}
                key={item.label}
                selected={location.pathname === item.path}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight:
                      location.pathname === item.path ? "bold" : "normal",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default AppBarComponent;
