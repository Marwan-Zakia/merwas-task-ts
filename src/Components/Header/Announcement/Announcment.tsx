import FaceBookIcon from '@/Components/SVG/FaceBookIcon'
import InstagramIcon from '@/Components/SVG/InstagramIcon'
import LinkedInIcon from '@/Components/SVG/LinkedInIcon'
import SkypeIcon from '@/Components/SVG/SkypeIcon'
import TwitterIcon from '@/Components/SVG/TwitterIcon'
import { AppBar, Box, Container, Toolbar } from '@mui/material'
import React from 'react'
import Svgs from './Svgs'

export default function Announcment() {
    return (
        <Box sx={{ backgroundColor: "#ffffff" }}>
            <Container maxWidth="xl"  >
                <Box sx={{
                    flexGrow: 1, display: 'flex', justifyContent: { xs: 'center', md: "end" }, alignItems: "center", height: 53,
                }} className="">
                    <Svgs />
                </Box>
            </Container>
        </Box>



    )
}



