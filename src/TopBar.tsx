import { AppBar, Toolbar, IconButton, Typography, Button, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export function TopBar() {

    return <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" >
            <Toolbar variant="dense">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Konica Tab Maker
                </Typography>
            </Toolbar>
        </AppBar>
    </Box >
}