import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import {
  WishListIcon,
  ContactUsIcon,
  CartIcon,
  MenuIcon,
  ProfileIcon,
  SearchIcon,
} from "@/utils/icons";

import IconButton from "@mui/material/IconButton";

import styles from "./Navbar.module.css";

export default function NavBar() {
  return (
    <AppBar position="sticky">
      <Toolbar variant="dense" className={styles.upperNav}>
        <div className={styles["main-container"]}>
          <Typography color="inherit" component="div">
            Welcome to Our Store Hiscraves
          </Typography>
          <Typography color="inherit" component="div">
            <ContactUsIcon /> Call Us: 1234567890
          </Typography>
        </div>
      </Toolbar>

      <Toolbar className={styles.lowerNav}>
        <div className={styles["main-container"]}>
          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon/>
            </IconButton>
          </div>
          <Typography className={styles.navLogo}>Logo Here</Typography>
          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <SearchIcon/>
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <WishListIcon/>
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <CartIcon/>
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <ProfileIcon/>
            </IconButton>
          </div>
        </div>
      </Toolbar>
      
    </AppBar>
  );
}
