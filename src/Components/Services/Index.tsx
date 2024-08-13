import React from 'react'
import Heading from './Heading'
import { RoundedDirection, servicesData } from './data'
import RoundedCards from './RoundedCards'
import TransparentCards from './TransparentCards'

export default function Services() {
    return (
        <div>
            <Heading />
            {servicesData.map((item) => item.cardType === "rounded" ? <RoundedCards key={item.title} item={item} roundedDirection={item.roundedDirection as RoundedDirection} /> : <TransparentCards key={item.title} item={item} />)}
        </div>
    )
}
