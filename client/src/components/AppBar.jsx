import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createTheme, SvgIcon } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import PetsIcon from '@mui/icons-material/Pets';



const pages = ['Home', 'Summary'];

function MainAppBar({ username, userId }) {
    const navigate = useNavigate();

    const handleNavMenu = (page) => {
        // Navigate to AddPost page
        if (pages.indexOf(page) === 0) {
            navigate('/');
        }
        if (pages.indexOf(page) === 1) {
            navigate('/summary');
        }
    }

    const customTheme = createTheme({
        palette: {
            secondary: {
                main: "#FFFFFF",
                contrastText: "#7065f0 "
            }
        }
    });

    return (
        <ThemeProvider theme={customTheme}>
            <AppBar color={"secondary"} position="static" sx={{ height: '4rem' }}>
                <Box
                    sx={{
                        paddingX: 5,
                    }}
                >
                    <Toolbar disableGutters>
                        <SvgIcon component="a" fontSize="large" href="/" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, pt: '3px' }}>
                            <PetsIcon />
                        </SvgIcon>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={() => handleNavMenu(page)}
                                    sx={{ my: 2, color: '#100a55', display: 'block', font: 'bold' }}
                                >
                                    <p className='font-sans text-center font-bold text-1xl '>
                                        {page}
                                    </p>
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Box>
            </AppBar>
        </ThemeProvider>
    );
}
export default MainAppBar;