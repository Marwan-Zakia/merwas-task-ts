import { Box } from '@mui/material'
import React from 'react'

export default function Hero() {
    return (
        <div>
            <Box sx={{
                background: {
                    md: `linear-gradient(90deg, rgba(68,76,95,1) 0%, rgba(68,76,95,0.9) 32%, rgba(55,66,92,0.41) 100%),url("/HeroImage.png")`,
                    xs: `linear-gradient(100deg, rgba(68,76,95,1) 0%, rgba(68,76,95,0.9) 32%, rgba(55,66,92,0.41) 100%),url("/HeroImage.png")`
                },
                height: {
                    md: "960px",
                    xs: "400px"
                },
                objectFit: {
                    md: "",
                    xs: "contain"
                },

                width: "100%",
                display: "flex",
                alignItems: "center",


            }}>
                <div className="" style={{ marginLeft: "20%" }}>Welcome to The OurWebsite Your Platform for Launching Towards Technological Success!</div>
            </Box>
        </div>
    )
}
