"use client"

import { Box, Button, Fab, FormControl, InputLabel, NativeSelect, TextField, Typography } from '@mui/material'
import React from 'react'

export default function Form() {
    return (

        <Box>
            <Typography sx={{ marginTop: "2rem", fontFamily: "sans-serif", fontSize: { lg: "22px", md: "20px", xs: "15px" }, lineHeight: { lg: "40px", xs: "25px" }, fontWeight: 700, color: "#3F485E", maxWidth: "34rem", paddingBottom: "2rem" }}>Have a question?</Typography>
            <Box sx={{
                display: "grid",

                gap: "2rem",
                paddingBottom: "2rem"


            }} >
                <FormControl fullWidth sx={{ position: "relative" }}>
                    <Typography sx={{ position: "absolute", top: "0px", left: "0", fontFamily: "sans-serif", fontSize: "15px", color: "#3F485E", maxWidth: "34rem", paddingBottom: "2rem" }}>Types</Typography>
                    <NativeSelect
                        id='typesSelect'
                        sx={{
                            borderRadius: "25px",
                            border: "1px solid #eee",
                            padding: "0.75rem",
                            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                            marginTop: "1.8rem",
                        }}
                        defaultValue={"Careers"}
                        inputProps={{
                            name: 'type',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <option value={"Careers"}>Career </option>
                        <option value={"Complain"}>Complain</option>

                    </NativeSelect>
                </FormControl>
                <Box
                    sx={{
                        display: "flex",
                        flexBasis: "50",
                        gap: "1rem"
                    }}
                >


                    <FormControl fullWidth sx={{ position: "relative" }}>
                        <Typography sx={{ position: "absolute", top: "0px", left: "0", fontFamily: "sans-serif", fontSize: "15px", color: "#3F485E", maxWidth: "34rem", paddingBottom: "2rem" }}>Name</Typography>

                        <TextField
                            sx={{
                                borderRadius: "25px",
                                border: "1px solid #eee",
                                padding: "0.5rem",
                                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                marginTop: "1.8rem",
                            }}



                            variant="standard"
                            defaultValue={"ali"}
                        />
                        <Typography sx={{ position: "absolute", bottom: "-20px", right: "2px", fontFamily: "sans-serif", fontSize: "10px", color: "#3F485E", maxWidth: "34rem", }}>Optinal</Typography>
                    </FormControl>
                    <FormControl fullWidth sx={{ position: "relative" }}>
                        <Typography sx={{ position: "absolute", top: "0px", left: "0", fontFamily: "sans-serif", fontSize: "15px", color: "#3F485E", maxWidth: "34rem", paddingBottom: "2rem" }}>Email</Typography>

                        <TextField
                            sx={{
                                borderRadius: "25px",
                                border: "1px solid #eee",
                                padding: "0.5rem",
                                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                marginTop: "1.8rem",
                            }}



                            variant="standard"
                        />
                    </FormControl>
                </Box>
                <FormControl fullWidth sx={{ position: "relative" }}>
                    <Typography sx={{ position: "absolute", top: "0px", left: "0", fontFamily: "sans-serif", fontSize: "15px", color: "#3F485E", maxWidth: "34rem", paddingBottom: "2rem" }}>Message</Typography>
                    <TextField
                        sx={{
                            borderRadius: "25px",
                            border: "1px solid #eee",
                            padding: "0.75rem",
                            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                            marginTop: "1.8rem",
                        }}


                        placeholder=""
                        multiline
                        variant="standard"
                        defaultValue={"Content ?? "}
                        rows={5}
                    />
                </FormControl>

                <FormControl sx={{ width: "50%" }}>
                    <Fab variant="extended" size='large' sx={{
                        backgroundColor: "#3F485E", color: "#ffffff", fontSize: "12px", ":hover": {
                            borderTop: "2px solid #3F485E",
                            color: "#3F485E",
                        },
                        padding: "1.5rem",
                        fontFamily: "sans-serif"
                    }}>

                        Send
                    </Fab>
                </FormControl>

            </Box>
        </Box>



    )
}
