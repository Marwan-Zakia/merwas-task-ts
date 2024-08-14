import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Cards from './Cards'
import Image from 'next/image'

export default function AboutUsContents() {
    return (
        <div className="">

            <Container style={{ display: "grid", }}>
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

                            <Typography sx={{ fontFamily: "Nobile", fontSize: { lg: "34px", md: "24px", xs: "16px" }, lineHeight: { lg: "60px", xs: "30px" }, fontWeight: 700, color: "#EB6B2A", maxWidth: "34rem", }}>OurWebsite</Typography>
                            <Typography sx={{ fontFamily: "Nobile", fontSize: { lg: "28px", md: "24px", xs: "16px" }, lineHeight: { lg: "40px", xs: "30px" }, fontWeight: 700, color: "#3F485E" }}>We offer more than just a workspace</Typography>

                        </Box>

                        <Cards />


                    </div>
                    <Box sx={{

                        objectFit: "cover",
                        marginInline: '0 auto',
                        maxWidth: { lg: "100%", xs: "calc(100% - 1rem)" },



                    }} >

                        <Image src={"/aboutus.png"} width={400} height={500} alt='About us living room' style={{ objectFit: "cover", borderRadius: "20px", }} />


                    </Box>

                </Box>

            </Container>
        </div>
    )
}

