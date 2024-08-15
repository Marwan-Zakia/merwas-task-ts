import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Cards from './Cards'
import Image from 'next/image'

export default function AboutUsContents() {
    return (
        <div className="">

            <Container style={{ display: "grid", position: "relative" }}>
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        md: "60% 40%",
                        xs: '1fr'

                    },
                    margin: { lg: '4rem auto' },
                    overflow: "hidden",
                    gap: "1rem"


                }} >
                    <div className="" style={{ display: "grid" }}>
                        <Box sx={{
                            margin: "0rem 3.5rem",

                        }} >

                            <Typography sx={{ fontFamily: "sans-serif", fontSize: { lg: "34px", md: "24px", xs: "16px" }, lineHeight: { lg: "60px", xs: "30px" }, fontWeight: 700, color: "#EB6B2A", maxWidth: "34rem", }}>OurWebsite</Typography>
                            <Typography sx={{ fontFamily: "sans-serif", fontSize: { lg: "28px", md: "24px", xs: "16px" }, lineHeight: { lg: "40px", xs: "30px" }, fontWeight: 700, color: "#3F485E" }}>We offer more than just a workspace</Typography>

                        </Box>

                        <Cards />


                    </div>
                    <Box sx={{

                        objectFit: "cover",
                        marginRight: { lg: "1rem", xs: '4rem' },
                        Width: { lg: "100%", xs: "calc(100% - 1rem)" },
                        position: { md: "relative", xs: "absolute" },
                        height: "100%",
                        borderRadius: { md: "20px", xs: "0" },
                        overflow: "hidden",
                        opacity: { md: "1", xs: "0.2" }


                    }} >

                        <Image src={"/aboutus.png"} width={450} height={500} alt='About us living room' style={{ objectFit: "cover", }} />


                    </Box>

                </Box>

            </Container>
        </div>
    )
}

