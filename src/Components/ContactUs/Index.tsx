import React from 'react'
import Heading from './Heading'
import { Box, Container } from '@mui/material'
import Form from './Form'
import ContactDetails from './ContactDetails'

export default function ContactUs() {
    return (
        <div>
            <Heading />

            <Container maxWidth="lg">
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        md: "repeat(2,1fr)",
                        xs: '1fr'

                    }

                }} >

                    <ContactDetails />
                    <Form />

                </Box>
                <Box sx={{
                    display: "grid",

                }} >

                    <iframe title='Brooklyn' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47064.484804168365!2d-73.9807000081339!3d40.635975019064404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2sjo!4v1723576727751!5m2!1sen!2sjo" width="100%" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                </Box>

            </Container>
        </div>
    )
}

