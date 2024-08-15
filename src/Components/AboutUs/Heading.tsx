import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export default function Heading() {
    return (


        <Container maxWidth='lg' style={{ display: "grid" }}>
            <Box sx={{

                maxWidth: "30rem",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                flexDirection: "column",
                margin: { lg: "4rem auto", xs: "2rem auto" },
                textTransform: "capitalize"
            }}>

                <Typography sx={{ fontFamily: "sans-serif", fontSize: { lg: "30px", md: "20px", xs: "15px" }, lineHeight: { lg: "40px", xs: "25px" }, fontWeight: 700, color: "#3F485E", maxWidth: "34rem", textAlign: "center" }}>About Us </Typography>
                <Typography sx={{ fontFamily: "sans-serif", fontSize: { lg: "16px", md: "12px", xs: "12px" }, lineHeight: { lg: "30px", xs: "25px" }, fontWeight: 400, textAlign: "center" }}>With lots of unique blocks, you can easily build a page easily without any coding.</Typography>
            </Box>
        </Container>

    )
}
