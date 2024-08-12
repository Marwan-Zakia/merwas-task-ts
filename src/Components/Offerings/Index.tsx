import React from 'react'
import OfferingsItems from './OfferingsItems'
import OfferingInvite from './OfferingInvite'

export default function Offerings() {

    return (
        <div>
            <div className="bg #3F485E">
                At The OurWebsite, we are dedicated to helping you excel in the world of technology. Our services are specifically designed to meet your needs
            </div>
            <OfferingsItems />
            <OfferingInvite />
        </div>
    )
}
