import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export default function Heading() {
    return (
        <Container maxWidth='lg' style={{ display: "grid" }}>
            <Box sx={{

                maxWidth: "35rem",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                flexDirection: "column",
                margin: { lg: "4rem auto", xs: "2rem auto" },
                textTransform: "capitalize"
            }}>
                <Typography sx={{ fontFamily: "sans-serif", fontSize: { lg: "24px", md: "20px", xs: "15px" }, lineHeight: { lg: "40px", xs: "25px" }, fontWeight: 700, color: "#fff", maxWidth: "34rem", textAlign: "center" }}>Subscribe to our newsletter</Typography>
                <Typography sx={{ fontFamily: "sans-serif", fontSize: { lg: "12px", md: "12px", xs: "12px" }, color: "#fff", lineHeight: { lg: "30px", xs: "25px" }, fontWeight: 400, textAlign: "center" }}>Your download should start automatically, if not Click here. Should I give up, huh?.</Typography>

            </Box>
        </Container>
    )
}
