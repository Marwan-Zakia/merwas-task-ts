import { Box, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
export default function RightsSection() {
    return (
        <div>
            Copyright © 2024OurWebsite . All Right Reserved.
            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: "end" }}>
                <InputLabel id="label">
                    <LanguageIcon />
                </InputLabel>
                <Select size='small' labelId='label' id="select" value="en">
                    <MenuItem value="en">Engilsh</MenuItem>
                    <MenuItem value="ar">Arabic</MenuItem>
                </Select>


            </Box>
        </div>
    )
}
