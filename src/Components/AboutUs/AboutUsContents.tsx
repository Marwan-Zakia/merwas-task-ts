import { Box, Container } from '@mui/material'
import React from 'react'
import Cards from './Cards'
import Image from 'next/image'

export default function AboutUsContents() {
    return (
        <div className="">

            <Container maxWidth="lg">
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        md: "80% 20%",
                        xs: '1fr'

                    }

                }} >
                    <div className="">
                        <h1>OurWebsite</h1>
                        <p>We offer more than just a workspace</p>
                        <Cards />

                    </div>
                    <div className="">
                        <Image src={"/aboutus.png"} width={626} height={687} alt='About us living room' />
                    </div>

                </Box>

            </Container>
        </div>
    )
}

