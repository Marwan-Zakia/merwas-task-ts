/* eslint-disable @next/next/no-img-element */
"use client"
import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function Images() {
    return (
        <Box sx={{}}>
            <Box sx={{ display: { md: "block", xs: "none", } }}>
                <Box sx={{ position: "relative", width: { lg: "31rem", xs: "calc(100% - 1rem)" }, height: "37rem", }} >
                    <Box sx={{ width: { lg: "15rem", xs: "calc(50% - 0.25rem)" }, height: "21rem", position: "absolute", right: "0px", objectFit: "cover" }} >
                        <img draggable={false} src={"/group.png"} alt='group of people setting in a rounded table' style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "25px" }} />
                    </Box>
                    <Box sx={{ width: { lg: "15rem", xs: "calc(50% - 0.25rem)" }, height: "20rem", position: "absolute", left: "0px", zIndex: 3, objectFit: "cover" }} >

                        <img draggable={false} src={"/groupleft.png"} alt='group of people setting in a rectangle table' style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "25px" }} />
                    </Box>
                    <Box sx={{ width: { lg: "15rem", xs: "calc(50% - 0.25rem)" }, height: "18rem", position: "absolute", bottom: "0px", zIndex: 2, left: "50%", transform: "translate(-50%,-50%)", objectFit: "cover" }} >

                        <img draggable={false} src={"/bar.png"} alt='group of people setting in a rounded table' style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "25px" }} />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ md: "none", xs: "block", }}>
                <Carousel showArrows infiniteLoop autoPlay axis='horizontal' showStatus={false} showThumbs={false}  >
                    <div>
                        <img draggable={false} src={"/group.png"} alt='group of people setting in a rounded table' style={{ objectFit: "cover", borderRadius: "25px", maxWidth: "260px" }} />
                    </div>
                    <div>

                        <img draggable={false} src={"/groupleft.png"} alt='group of people setting in a rectangle table' style={{ objectFit: "cover", borderRadius: "25px", maxWidth: "260px" }} />
                    </div>
                    <div>
                        <img draggable={false} src={"/bar.png"} alt='group of people setting in a rounded table' style={{ objectFit: "cover", borderRadius: "25px", maxWidth: "260px" }} />
                    </div>
                </Carousel>

            </Box>
        </Box>
    )
}
