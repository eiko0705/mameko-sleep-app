import { useRef, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const Navbar = () => {
  const [auth, setAuth] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState<boolean>(false);
  const menuAnchorEl = useRef<HTMLButtonElement>(null);
  const accountAnchorEl = useRef<HTMLButtonElement>(null);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  }

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleAccountMenuClick = () => {
    setAccountMenuOpen(!accountMenuOpen);
  }

  const handleAccountMenuClose = () => {
    setAccountMenuOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton
            ref={menuAnchorEl}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuClick}
            >
            <MenuIcon />
          </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={menuAnchorEl.current}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              open={menuOpen}
              onClose={handleMenuClose}
              elevation={5}
              >
              {auth ? (
                <>
                  <MenuItem>Logs</MenuItem>
                  <MenuItem>Summary</MenuItem>
                </>
              ) : (
                <>
                  <MenuItem>Log in</MenuItem>
                  <MenuItem>Sign up</MenuItem>
                </>
              )}
            </Menu>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            mameko-sleep-app
          </Typography>
          <div>
            {auth ? (
              <>
                <IconButton
                  ref={accountAnchorEl}
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  onClick={handleAccountMenuClick}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id='accoutn-menu-appbar'
                  anchorEl={accountAnchorEl.current}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  open={accountMenuOpen}
                  onClose={handleAccountMenuClose}
                  elevation={5}
                >
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem>Sign out</MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button
                  variant='contained'
                  color='primary'
                  sx={{ textTransform: "none" }}
                >Log in</Button>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
};

export default Navbar;
