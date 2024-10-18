"use client";

import BookingList from "@/app/components/driver/BookingList";
import { Box, Tabs, Tab } from "@mui/material";
import { useState, SyntheticEvent } from "react";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BookingPage() {
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div style={{ margin: 20 }}>
            <h3>
                Bookings
            </h3>

            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: "#aed6f1" }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Active Bookings" {...a11yProps(0)} />
                        <Tab label="Past Bookings" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <BookingList />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <BookingList />
                </CustomTabPanel>
            </Box>

        </div>
    );
}