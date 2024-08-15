import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Offering = {
    title: string;
    subTitle: string;
    path: string;
    imageSrc: string;
};

type Props = {
    readonly offering: Offering;
};

export default function OfferingItem({ offering }: Props) {
    return (
        <Box sx={{
            position: "relative",
            width: { lg: "400px", md: "300px", xs: "280px" },
            height: { lg: "400px", md: "300px", xs: "280px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            background: "linear-gradient(30deg, rgba(68,76,95,1) 10%, rgba(68,76,95,0.9) 0%, rgba(55,66,92,0.41) 100%)",
            // ":hover": {
            //     background: "linear-gradient(30deg, rgba(68,76,95,1) 0%, rgba(68,76,95,0.9) 32%, rgba(55,66,92,0.41) 100%)",
            //     backgroundPosition: "-400px -400px"
            // },
            borderRadius: "3%",
            overflow: "hidden"
            // transition: "background 2s ease-out"
        }} >
            <Image src={offering.imageSrc} alt={offering.title} width={500} height={500} style={{ width: "100%", height: "100%", position: "absolute", objectFit: "cover", borderRadius: "3%", zIndex: "-1" }} />

            <Box
                sx={{
                    // flexGrow: 1,
                    display: "grid",

                    height: "fit-content", paddingBottom: "5rem"

                }}

            >
                <Typography sx={{ fontFamily: "sans-serif", fontSize: { lg: "18px", md: "16px", xs: "12px" }, fontWeight: 500, paddingInline: "2rem", color: "#fff" }}>{offering.title}</Typography>
                <Typography sx={{ fontFamily: "sans-serif", fontSize: { lg: "12px", md: "12px", xs: "10px" }, fontWeight: 300, paddingInline: "2rem", color: "#fff" }}>{offering.subTitle}</Typography>
                <Link href={offering.path} style={{ color: "#fff" }}>
                    <Box sx={{

                        marginTop: "2rem",
                        display: "flex", alignItems: "center",
                        width: "fit-contet",
                        justifyContent: "start",
                        paddingInline: "2rem",
                        gap: "0.5rem",
                        ":hover": {
                            color: "#EB6B2A"
                        },


                    }} >

                        <Typography className="" sx={{

                        }} style={{}}>Learn more</Typography>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.9635 1.30225L16.0142 8.35297L8.9635 15.4037" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.0141 8.35303L1.01422 8.35303" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Box>

                </Link>
            </Box>



        </Box >
    );
}