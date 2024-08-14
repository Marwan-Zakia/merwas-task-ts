import React from 'react'
import { contactDetails } from './data'
import { Box, Typography } from '@mui/material'

export default function ContactDetails() {
    return (
        <Box>

            <Typography sx={{ marginTop: "2rem", fontFamily: "Nobile", fontSize: { lg: "22px", md: "20px", xs: "15px" }, lineHeight: { lg: "40px", xs: "25px" }, fontWeight: 700, color: "#3F485E", maxWidth: "34rem", paddingBottom: "2rem" }}>Contact details</Typography>
            <Box sx={{
                display: "grid",
                gridTemplateColumns: {
                    md: "repeat(2,1fr)",
                    xs: '1fr'

                },
                gap: "2rem",
                paddingBottom: "2rem"


            }} >

                {
                    contactDetails.map((detail) => {
                        return <Box sx={{}} key={detail.title}>
                            <Box sx={{
                                display: "flex",
                                width: "fit-contet",
                                justifyContent: "start",
                                gap: "1rem"
                            }} >
                                <div> {detail.svg}</div>
                                <Box sx={{
                                }} >
                                    <Typography sx={{ fontFamily: "Nobile", fontSize: { lg: "18px", md: "12px", xs: "12px" }, lineHeight: { lg: "35px", xs: "25px" }, fontWeight: 400, }}>{detail.title}</Typography>
                                    {Array.isArray(detail.children) ? detail.children?.map((item, index) => <Typography key={`${item}-${index}`} sx={{ fontFamily: "Nobile", fontSize: { lg: "12px", xs: "10px" }, fontWeight: 400, }}>{item}</Typography>) : null}
                                </Box>
                            </Box>
                            {!Array.isArray(detail.children) ? <Box sx={{
                                display: "flex",
                                width: "fit-contet",
                                justifyContent: "start",
                                gap: "1rem"
                            }}>
                                {detail.children}
                            </Box>
                                : null}
                        </Box>
                    })
                }
            </Box>
        </Box>
    )
}
