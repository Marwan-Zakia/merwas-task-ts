import React from 'react'
import Heading from './Heading'
import Email from './Email'
import Svgs from '../Header/Announcement/Svgs'
import RightsSection from './RightsSection'
import { Box } from '@mui/material'

export default function Footer() {
    return (
        <footer style={{
            backgroundColor: "#3F485E"
        }}>
            <Box sx={{
                display: "grid",
                placeContent: "center",
                placeItems: "center",


                gap: "1rem"
            }}>
                <Heading />
                <Email />
                <Box sx={{
                    display: "flex",
                    width: "fit-contet",
                    justifyContent: "center",
                    gap: "1rem"
                }}>

                    <Svgs />
                </Box>
            </Box>
            <RightsSection />
        </footer>
    )
}
