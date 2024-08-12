import { Box, Container } from '@mui/material'
import React from 'react'
import { ListOfOfferings } from './data'
import OfferingItem from './OfferingItem'

export default function OfferingsItems() {
    return (
        <Container maxWidth="lg">
            <Box sx={{
                display: "grid",
                gridTemplateColumns: {
                    md: "repeat(2,1fr)",
                    xs: '1fr'

                }

            }} >
                {ListOfOfferings.map((offering) => <OfferingItem key={offering.title} offering={offering} />)}
            </Box>

        </Container>
    )
}
