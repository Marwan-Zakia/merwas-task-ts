import FaceBookIcon from '@/Components/SVG/FaceBookIcon'
import InstagramIcon from '@/Components/SVG/InstagramIcon'
import LinkedInIcon from '@/Components/SVG/LinkedInIcon'
import SkypeIcon from '@/Components/SVG/SkypeIcon'
import TwitterIcon from '@/Components/SVG/TwitterIcon'
import { AppBar, Box, Container, Toolbar } from '@mui/material'
import React from 'react'

export default function Announcment() {
    return (
        <Toolbar disableGutters style={{ backgroundColor: "#ffffff" }} >
            <Container maxWidth="xl">
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "end", color: "red" }}>
                    <FaceBookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <LinkedInIcon />
                    <SkypeIcon />
                </Box>


            </Container>
        </Toolbar>

    )
}
