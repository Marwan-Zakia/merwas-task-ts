import { Box, Container } from '@mui/material'
import React from 'react'
import { aboutUsData } from './data'
import AboutUsCard from './Card'



export default function Cards() {
    return (
        <Container maxWidth="md">
            <Box sx={{
                display: "grid",
                gridTemplateColumns: {
                    md: "repeat(2,1fr)",
                    xs: '1fr'

                }

            }} >
                {aboutUsData.map((item) => <AboutUsCard key={item.title} aboutUsItem={item} />)}
            </Box>

        </Container>
    )
}
