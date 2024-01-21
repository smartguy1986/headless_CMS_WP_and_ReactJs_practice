import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

const Homepage = () => {
    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <NavLink to='/arijitnandi/react/demos/tododemo'>Todolist</NavLink>
            </Box>
        </Container>
    );
}

export default Homepage;
