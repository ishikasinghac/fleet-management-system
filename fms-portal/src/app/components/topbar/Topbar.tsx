"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { USER_TYPE, UserType } from '@/lib/constants';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

interface NavItem {
    label: string,
    link: string,
}

const drawerWidth = 240;
const userType = localStorage.getItem(USER_TYPE) ?? UserType.USER;


const userNavData: NavItem[] = [
    {
        label: "Home",
        link: "/"
    },
    {
        label: "Book A Vehicle",
        link: "/book"
    },
    {
        label: "User Profile",
        link: "/profile"
    },
]

const driverNavData: NavItem[] = [
    {
        label: "Home",
        link: "/"
    },
    {
        label: "My Bookings",
        link: "/driver/bookings"
    },
    {
        label: "Driver Profile",
        link: "/driver"
    },
]

const navData: NavItem[] = userType === UserType.USER ? userNavData : driverNavData;

export default function Topbar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const router = useRouter();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Fleet Management System
            </Typography>
            <Divider />
            <List>
                {navData.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => router.push(item.link)}>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem key="Logout" disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => router.push("/auth")}>
                            <ListItemText primary={"Logout"} />
                        </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar sx={{ backgroundColor: "#f7f7f" }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Fleet Management System
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navData.map((item) => (
                            <Button key={item.label} sx={{ color: '#fff' }} onClick={() => router.push(item.link)}>
                                {item.label}
                            </Button>
                        ))}
                        <Button key={"Logout"} sx={{ color: '#fff' }} onClick={() => router.push("/auth")}>
                                {"Logout"}
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}