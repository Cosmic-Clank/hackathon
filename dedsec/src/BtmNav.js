import React from 'react';
import './BtmNav.css';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SearchIcon from '@mui/icons-material/Search';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import HailIcon from '@mui/icons-material/Hail';
import SettingsIcon from '@mui/icons-material/Settings';
function BtmNav() {
    const [value, setValue] = React.useState(2);
    return (
        <Box sx={{ width: 500 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    console.log(event.target.textContent)
                    if (event.target.textContent === "Trending") {
                        window.location.href = "http://localhost:3001";

                    } else if (event.target.textContent === "Feed") {
                        window.location.href = "http://localhost:3000";

                    } else if (event.target.textContent === "Seller") {
                        console.log();
                    }
                    // window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
                }}
            >
                <BottomNavigationAction label="Search" icon={<SearchIcon />} />
                <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
                <BottomNavigationAction label="Feed" icon={<SwapHorizIcon />} />
                <BottomNavigationAction label="Seller" icon={<HailIcon />} />
                <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
            </BottomNavigation>
        </Box>
    );
}

export default BtmNav