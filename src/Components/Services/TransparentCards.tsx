import React from 'react'
import { RoundedDirection, ServicesItem } from './data'
import { Box, Container, Typography } from '@mui/material'
import Images from './Images'
type cardsType = {
    readonly item: ServicesItem,
    readonly roundedDirection: RoundedDirection

}

export default function TransparentCards({ item, roundedDirection }: cardsType) {
    return (

        <Box sx={{
            display: "grid",
            height: { lg: "32rem" },
        }}>

            <Container maxWidth="xl" >
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        md: roundedDirection === "bottomLeft" ? "60% 40%" : "40% 60%",
                        xs: '1fr'

                    },


                    placeContent: "center",
                    alignItems: "center",
                    paddingBottom: "4rem "
                }} >
                    {roundedDirection === "bottomLeft" ?
                        <>
                            <Box sx={{ position: "relative", width: "100%" }} >
                                <Typography sx={{ fontFamily: "sans-serif", fontSize: { lg: "34px", md: "24px", xs: "16px" }, lineHeight: { lg: "70px", xs: "30px" }, fontWeight: 500, color: "#000000", maxWidth: "34rem", }}> {item.title}</Typography>
                                <Typography sx={{ fontFamily: "sans-serif", fontSize: { lg: "16px", md: "16px", xs: "14px" }, lineHeight: { lg: "40px", xs: "30px" }, fontWeight: 400, color: "#000000" }}>{item.text}</Typography>





                            </Box>
                            <Box sx={{

                                display: "grid",
                                height: "30rem",
                                overflow: "hidden",
                                alignItems: "center",
                                paddingTop: "2rem"

                            }}>
                                <Images />
                            </Box>
                        </>

                        :
                        <>

                            <Box sx={{

                                display: "grid",
                                height: "30rem",
                                overflow: "hidden",
                                alignItems: "center",
                                paddingTop: "2rem"

                            }}>
                                <Images />
                            </Box>
                            <Box sx={{ position: "relative", width: "100%" }} >
                                <Typography sx={{ fontFamily: "sans-serif", fontSize: { lg: "34px", md: "24px", xs: "16px" }, lineHeight: { lg: "70px", xs: "30px" }, fontWeight: 500, color: "#000000", maxWidth: "34rem", }}> {item.title}</Typography>
                                <Typography sx={{ fontFamily: "sans-serif", fontSize: { lg: "16px", md: "16px", xs: "14px" }, lineHeight: { lg: "40px", xs: "30px" }, fontWeight: 400, color: "#000000" }}>{item.text}</Typography>

                            </Box>
                        </>}




                </Box>

            </Container>
        </Box >
    )
}
