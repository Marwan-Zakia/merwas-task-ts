import FaceBookIcon from '@/Components/SVG/FaceBookIcon'
import InstagramIcon from '@/Components/SVG/InstagramIcon'
import LinkedInIcon from '@/Components/SVG/LinkedInIcon'
import SkypeIcon from '@/Components/SVG/SkypeIcon'
import TwitterIcon from '@/Components/SVG/TwitterIcon'
import Link from 'next/link'
import React from 'react'

export default function Svgs() {
    return (
        <>
            <div className="svgParent">
                <Link href={"#"}><FaceBookIcon /> </Link>
            </div>
            <div className="svgParent">
                <Link href={"#"}><TwitterIcon /> </Link>
            </div>
            <div className="svgParent">
                <Link href={"#"}><InstagramIcon /> </Link>
            </div>
            <div className="svgParent">
                <Link href={"#"}><LinkedInIcon /> </Link>
            </div>
            <div className="svgParent">
                <Link href={"#"}><SkypeIcon /> </Link>
            </div>
        </>
    )
}
