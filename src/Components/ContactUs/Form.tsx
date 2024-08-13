"use client"

import { Button, FormControl, InputLabel, NativeSelect, TextField } from '@mui/material'
import React from 'react'

export default function Form() {
    return (
        <div>
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Age
                </InputLabel>
                <NativeSelect
                    defaultValue={30}
                    inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </NativeSelect>
            </FormControl>
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
