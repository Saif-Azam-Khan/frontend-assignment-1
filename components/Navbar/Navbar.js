import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import {
  wishListIcon,
  contactUsIcon,
  cartIcon,
  menuIcon,
  profileIcon,
  searchIcon,
} from "@/utils/icons";

import IconButton from "@mui/material/IconButton";

import styles from "./Navbar.module.css";

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense" className={styles.upperNav}>
        <Typography color="inherit" component="div">
          Welcome to Our Store Hiscraves
        </Typography>
        <Typography color="inherit" component="div">
          {contactUsIcon} Call Us: 1234567890
        </Typography>
      </Toolbar>

      <Toolbar className={styles.lowerNav}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          {menuIcon}
        </IconButton>
        <Typography variant="h6">LOGO</Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          {searchIcon}
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          {wishListIcon}
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          {cartIcon}
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          {profileIcon}
        </IconButton>
        
      </Toolbar>
    </AppBar>
  );
}
