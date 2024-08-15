"use client"
import { Button, Fab, FormControl, InputLabel, TextField } from '@mui/material'
import React from 'react'

export default function Email() {
    return (
        <FormControl fullWidth sx={{ position: "relative", width: { lg: "100%", xs: "280px" } }}>

            <TextField
                sx={{
                    borderRadius: "25px",
                    border: "1px solid #eee",
                    padding: "0.5rem",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",

                    backgroundColor: "#fff"
                }}

                placeholder='Enter your email'

                variant="standard"
            />
            <FormControl sx={{
                width: "fit-content", position: "absolute",
                top: "1px",
                right: "1px"
            }}>
                <Fab variant="extended" size='large' sx={{
                    backgroundColor: "#3F485E", color: "#ffffff", fontSize: "12px", ":hover": {
                        borderTop: "2px solid #3F485E",
                        color: "#3F485E",
                    },
                    padding: "1.5rem",
                    fontFamily: "sans-serif",

                }}>

                    Subscribe
                </Fab>
            </FormControl>
        </FormControl>
    )
}
