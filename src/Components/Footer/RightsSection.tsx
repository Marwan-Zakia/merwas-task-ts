import { Box, Container, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
export default function RightsSection() {
    return (
        <Container maxWidth="lg" >


            <Box sx={{
                display: { xs: 'none', md: 'flex' }, justifyContent: "space-between", alignItems: "center",
                padding: "1.5rem 0",
                borderTop: "1px solid #fff ",
                marginTop: "1.5rem"

            }}>
                <Typography sx={{ fontFamily: "sans-serif", fontSize: { lg: "12px", md: "12px", xs: "12px" }, color: "#fff", lineHeight: { lg: "30px", xs: "25px" }, fontWeight: 400, textAlign: "center" }}>Copyright © 2024OurWebsite . All Right Reserved.</Typography>
                <Select size='small' labelId='label' id="LangSelect" value="en" sx={{
                    border: "0px",
                    padding: 0,
                    fontSize: "small",
                    display: "flex",
                }}>

                    <MenuItem value="en">
                        <Box
                            sx={{
                                display: 'flex', justifyContent: "end", gap: "4px", alignItems: "center"
                            }}
                        >
                            <LanguageIcon sx={{ width: "20px", height: "20px" }} />
                            <div className="">Engilsh</div>
                        </Box>
                    </MenuItem>
                    <MenuItem value="ar">
                        <Box
                            sx={{
                                display: 'flex', justifyContent: "end", gap: "4px", alignItems: "center"
                            }}
                        >
                            <LanguageIcon sx={{ width: "20px", height: "20px" }} />
                            <div className="">Arabic</div>
                        </Box>


                    </MenuItem>
                </Select>
            </Box>
        </Container>
    )
}
