import React from 'react'
import { ServicesItem } from './data'
import { Box, Container } from '@mui/material'
import Images from './Images'
type cardsType = {
    readonly item: ServicesItem,

}

export default function TransparentCards({ item }: cardsType) {
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
