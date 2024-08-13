import React from 'react'
import Heading from './Heading'
import Email from './Email'
import Svgs from '../Header/Announcement/Svgs'
import RightsSection from './RightsSection'

export default function Footer() {
    return (
        <footer>
            <Heading />
            <Email />
            <Svgs />
            <RightsSection />
        </footer>
    )
}
