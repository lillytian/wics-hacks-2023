import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

// navbar icons
import HomeIcon from '@mui/icons-material/Home';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';

function NavBar() {
    const location = useLocation();
    console.log(location);

    return (
        <BottomNavigation
            showLabels
            value={location.pathname}
            className={"navbar"}
        >
            <BottomNavigationAction 
                label="Home" 
                icon={<HomeIcon/>}
                component={Link}
                to="/"
                value="/"
                className={"navbar-item"} />
            <BottomNavigationAction 
                label="Lockdown" 
                icon={<LockIcon/>}
                component={Link}
                to="/setup"
                value="/setup"
                className={"navbar-item"} />
            <BottomNavigationAction 
                label="Profile" 
                icon={<PersonIcon/>}
                component={Link}
                to="/profile"
                value="/profile"
                className={"navbar-item"} />
        </BottomNavigation>
    );
}

export default NavBar;