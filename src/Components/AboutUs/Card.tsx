import { Box, Typography } from '@mui/material'
import React from 'react'

type AboutUsItem = {
    title: string,
    text: string,
    svg: JSX.Element

}
type Props = {
    aboutUsItem: AboutUsItem
}
export default function AboutUsCard({ aboutUsItem }: Props) {
    return (
        <div>
            <Box sx={{
                display: "flex",
                width: "fit-contet",
                justifyContent: "start",
                gap: "1rem"

            }} >


                <div> {aboutUsItem.svg}</div>

                <Box sx={{


                }} >



                    <Typography sx={{ fontFamily: "Nobile", fontSize: { lg: "16px", md: "12px", xs: "12px" }, lineHeight: { lg: "35px", xs: "25px" }, fontWeight: 400, }}>{aboutUsItem.title}</Typography>

                    <Typography sx={{ fontFamily: "Nobile", fontSize: { lg: "12px", xs: "10px" }, fontWeight: 400, }}>{aboutUsItem.text}</Typography>
                </Box>
            </Box>

        </div>

    )
}
