import Image from 'next/image'
import React from 'react'
import PlayIcon from '../SVG/PlayIcon'
import { Box, Container, Typography } from '@mui/material'

export default function OfferingInvite() {
    return (
        <Container maxWidth="lg">
            <Box sx={{
                display: "grid",
                gridTemplateColumns: {
                    md: "repeat(2,1fr)",
                    xs: '1fr',


                },
                placeItems: "center",
                gap: "px",
                background: "#3F485E",
                padding: {
                    lg: "4rem",
                    xs: "1rem"
                },
                borderRadius: "25px",
                margin: "4rem 0rem"
            }}>


                <Box sx={{
                    position: "relative",
                    maxWidth: {
                        lg: "24rem",
                        xs: "calc(100% - 2rem)"
                    },
                    maxHeight: "20rem",
                    overflow: "hidden",
                    borderRadius: "25px",


                }}>
                    <Image src={"/OffringInviteImage.png"} width={400} height={300} alt='lecture' />
                    <Box sx={{
                        position: "absolute",
                        margin: "auto",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)"

                    }}>
                        <PlayIcon />
                    </Box>
                </Box>

                <Typography sx={{ alignSelf: "center", fontFamily: "Nobile", fontSize: { lg: "24px", md: "20px", xs: "15px" }, lineHeight: { lg: "40px", xs: "30px" }, fontWeight: 400, color: "#fff", maxWidth: "34rem" }}> <span className="" style={{ color: "#EB6B2A" }}>OurWebsite</span> Your Gateway to Technological Excellence
                    Get a quick glimpse into thedynamic environment at The OurWebsite and the benefits that await you</Typography>
            </Box>
        </Container>
    )
}
