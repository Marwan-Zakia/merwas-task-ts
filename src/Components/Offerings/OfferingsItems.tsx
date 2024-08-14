import { Box, Container } from '@mui/material'
import React from 'react'
import { ListOfOfferings } from './data.ts'
import OfferingItem from './OfferingItem'

export default function OfferingsItems() {
    return (
        <Container maxWidth="md">
            <Box sx={{
                display: "grid",
                gridTemplateColumns: {
                    md: "repeat(2,1fr)",
                    xs: '1fr',


                },
                placeItems: "center",
                gap: "30px"

            }} >
                {ListOfOfferings.map((offering) => <OfferingItem key={offering.title} offering={offering} />)}
            </Box>

        </Container>
    )
}
