
import React from 'react'
import { RoundedDirection, ServicesItem } from "./data"
import { Box, Container } from '@mui/material'
import Images from './Images'

type cardsType = {
    readonly item: ServicesItem,
    readonly roundedDirection: RoundedDirection
}

export default function RoundedCards({ item, roundedDirection }: cardsType) {
    return (
        <div>
            <Container maxWidth="md">
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        md: "30% 70%",
                        xs: '1fr'

                    }

                }} >
                    <Images />
                    <div className="">
                        {item.title}
                        {item.text}
                    </div>


                </Box>

            </Container>
        </div>
    )
}
