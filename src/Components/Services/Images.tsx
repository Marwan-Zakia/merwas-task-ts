import Image from 'next/image'
import React from 'react'

export default function Images() {
    return (
        <div>
            <Image src={"/group.png"} alt='group of people setting in a rounded table' width={315} height={414} />
            <Image src={"/groupleft.png"} alt='group of people setting in a rectangle table' width={278} height={366} />
            <Image src={"/bar.png"} alt='group of people setting in a rounded table' width={268} height={352} />
        </div>
    )
}
