import React from 'react'
import OfferingsItems from './OfferingsItems'
import OfferingInvite from './OfferingInvite'
import { Box, Typography } from '@mui/material'

export default function Offerings() {

    return (
        <div id="home">

            <Box sx={{ margin: "4rem 0rem", paddingInline: "20px" }}>
                <Typography sx={{ fontFamily: "sans-serif", fontSize: { lg: "18px", md: "16px", xs: "12px" }, lineHeight: { lg: "40px", xs: "30px" }, fontWeight: 500, textAlign: "center" }}>At The OurWebsite, we are dedicated to helping you excel in the world of technology.</Typography>
                <Typography sx={{ fontFamily: "sans-serif", fontSize: { lg: "18px", md: "16px", xs: "12px" }, lineHeight: { lg: "40px", xs: "30px" }, fontWeight: 500, textAlign: "center" }}>Our services are specifically designed to meet your needs</Typography>
            </Box>
            <OfferingsItems />
            <OfferingInvite />
        </div>
    )
}
