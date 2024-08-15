
import React from 'react'
import { RoundedDirection, ServicesItem } from "./data"
import { Box, Container, Typography } from '@mui/material'
import Images from './Images'

type cardsType = {
    readonly item: ServicesItem,
    readonly roundedDirection: RoundedDirection
}

export default function RoundedCards({ item, roundedDirection }: cardsType) {
    return (
        <Box sx={{
            display: "grid", backgroundColor: "#3F485E", borderRadius: {
                lg: roundedDirection === "bottomLeft" ? "0% 0% 10% 10% / 10% 10% 0% 15% " : "0% 0% 10% 0% / 10% 10% 15% 0% "
            },
            borderLeft: {
                lg: roundedDirection === "bottomLeft" ? "50px solid white" : "0"
            },
            borderRight: {
                lg: roundedDirection === "bottomLeft" ? 0 : "50px solid white"
            },
            height: { lg: "32rem" },
        }}>
            <Container maxWidth="xl" >
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        md: roundedDirection === "bottomLeft" ? "40% 60%" : "60% 40%",
                        xs: '1fr'

                    },


                    placeContent: "center",
                    alignItems: "center",
                    padding: "2rem"
                }} >
                    {roundedDirection === "bottomLeft" ?
                        <>
                            <Box sx={{

                                display: "grid",
                                height: "30rem",
                                overflow: "hidden",
                                alignItems: "center",


                            }}>
                                <Images />
                            </Box>
                            <Box sx={{ position: "relative", width: "100%" }} >
                                <Typography sx={{ fontFamily: "sans-serif", fontSize: { lg: "34px", md: "24px", xs: "16px" }, lineHeight: { lg: "70px", xs: "30px" }, fontWeight: 500, color: "#EB6B2A", maxWidth: "34rem", }}> {item.title}</Typography>
                                <Typography sx={{ fontFamily: "sans-serif", fontSize: { lg: "16px", md: "16px", xs: "14px" }, lineHeight: { lg: "40px", xs: "30px" }, fontWeight: 400, color: "#fff" }}>{item.text}</Typography>





                            </Box>
                        </>
                        :
                        <>

                            <Box sx={{ position: "relative", width: "100%", padding: "4rem 0" }} >
                                <Typography sx={{ fontFamily: "sans-serif", fontSize: { lg: "34px", md: "24px", xs: "16px" }, lineHeight: { lg: "70px", xs: "30px" }, fontWeight: 500, color: "#EB6B2A", maxWidth: "34rem", }}> {item.title}</Typography>
                                <Typography sx={{ fontFamily: "sans-serif", fontSize: { lg: "16px", md: "16px", xs: "14px" }, lineHeight: { lg: "40px", xs: "30px" }, fontWeight: 400, color: "#fff" }}>{item.text}</Typography>

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

                    }




                </Box>

            </Container>
        </Box>
    )
}
