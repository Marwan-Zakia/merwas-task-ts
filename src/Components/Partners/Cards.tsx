import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function Cards() {
    return (
        <div className="" >
            <Container maxWidth="lg" sx={{

            }} >
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                    flexWrap: "wrap",
                    flexBasis: "33.3"

                }}>
                    <Box sx={{
                        backgroundColor: "#fff",
                        padding: "2rem 1rem 5rem 1rem",
                        display: "grid",
                        placeContent: "center",
                        placeItems: "center",
                        rowGap: "1rem",
                        borderRadius: "25px",
                        position: "relative",
                        height: "260px",
                        ":after": {
                            position: "absolute",
                            content: "''",
                            borderBottom: "7px solid  #EB6B2A90",
                            width: "70%",
                            transform: "translateX(-50%)",
                            bottom: "0px",
                            left: "50%",
                            borderRadius: "25px 25px 0  0"
                        }
                    }} className="">
                        <Image alt='partner' src={"/partner.png"} width={100} height={75} style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }} />
                        <Typography sx={{ fontFamily: "sans-serif", fontSize: { lg: "16px", md: "12px", xs: "12px" }, lineHeight: { lg: "30px", xs: "25px" }, fontWeight: 400, textAlign: "center", color: "#000" }}>
                            Agreement between xyz and ourwebsite
                        </Typography>
                    </Box>
                    <Box sx={{
                        backgroundColor: "#fff",
                        padding: "2rem 1rem 5rem 1rem",
                        display: "grid",
                        placeContent: "center",
                        placeItems: "center",
                        rowGap: "1rem",
                        borderRadius: "25px",
                        position: "relative",
                        height: "260px",
                        ":after": {
                            position: "absolute",
                            content: "''",
                            borderBottom: "7px solid  #EB6B2A90",
                            width: "70%",
                            transform: "translateX(-50%)",
                            bottom: "0px",
                            left: "50%",
                            borderRadius: "25px 25px 0  0"
                        }
                    }} className="">
                        <Image alt='partner' src={"/partner.png"} width={100} height={75} style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }} />
                        <Typography sx={{ fontFamily: "sans-serif", fontSize: { lg: "16px", md: "12px", xs: "12px" }, lineHeight: { lg: "30px", xs: "25px" }, fontWeight: 400, textAlign: "center", color: "#000" }}>
                            Agreement between xyz and ourwebsite
                        </Typography>
                    </Box>
                    <Box sx={{
                        backgroundColor: "#fff",
                        padding: "2rem 1rem 5rem 1rem",
                        display: "grid",
                        placeContent: "center",
                        placeItems: "center",
                        rowGap: "1rem",
                        borderRadius: "25px",
                        position: "relative",
                        height: "260px",
                        ":after": {
                            position: "absolute",
                            content: "''",
                            borderBottom: "7px solid  #EB6B2A90",
                            width: "70%",
                            transform: "translateX(-50%)",
                            bottom: "0px",
                            left: "50%",
                            borderRadius: "25px 25px 0  0"
                        }
                    }} className="">
                        <Image alt='partner' src={"/partner.png"} width={100} height={75} style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }} />
                        <Typography sx={{ fontFamily: "sans-serif", fontSize: { lg: "16px", md: "12px", xs: "12px" }, lineHeight: { lg: "30px", xs: "25px" }, fontWeight: 400, textAlign: "center", color: "#000" }}>
                            Agreement between xyz and ourwebsite
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

