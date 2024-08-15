import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Hero() {
    return (
        <div>
            <Box sx={{
                background: {
                    xl: "",
                    lg: `linear-gradient(90deg, rgba(68,76,95,1) 0%, rgba(68,76,95,0.9) 32%, rgba(55,66,92,0.41) 100%),url("/HeroImage.png")`,
                    md: `linear-gradient(100deg, rgba(68,76,95,1) 0%, rgba(68,76,95,0.9) 32%, rgba(55,66,92,0.41) 100%),url("/heroLg.png")`,
                    xs: `linear-gradient(100deg, rgba(68,76,95,1) 0%, rgba(68,76,95,0.9) 32%, rgba(55,66,92,0.41) 100%),url("/heromd.png")`,
                },
                height: {
                    lg: "600px",
                    xs: "400px"
                },
                objectFit: {
                    lg: "",
                    md: "cover",
                    xs: "cover"
                },
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",

                width: "100%",
                display: "flex",
                alignItems: "center",


            }}>
                <Typography sx={{ marginLeft: { md: "22%", xs: "5%" }, fontFamily: "sans-serif", fontSize: { lg: "30px", md: "20px", xs: "15px" }, lineHeight: { lg: "40px", xs: "30px" }, fontWeight: 700, color: "#fff", maxWidth: "34rem" }}>Welcome to The <span className="" style={{ color: "#EB6B2A" }}>OurWebsite</span> Your Platform for Launching Towards Technological Success!</Typography>
            </Box>
        </div>
    )
}
