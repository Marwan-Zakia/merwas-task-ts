"use client"
import { Button, FormControl, InputLabel, TextField } from '@mui/material'
import React from 'react'

export default function Email() {
    return (
        <div>
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Age
                </InputLabel>
                <TextField
                    id="standard-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                    variant="standard"
                />
            </FormControl>
            <FormControl fullWidth>
                <Button
                    onClick={() => {

                    }}
                >
                    Click me
                </Button>
            </FormControl>
        </div>
    )
}
