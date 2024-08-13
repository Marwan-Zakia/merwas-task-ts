import Image from 'next/image'
import React from 'react'

export default function Cards() {
    return (
        <div>
            <div className="">
                <Image alt='partner' src={"/partner.png"} width={237} height={212} />
                <div className="">
                    Agreement between xyz and ourwebsite
                </div>
            </div>
            <div className="">
                <Image alt='partner' src={"/partner.png"} width={237} height={212} />
                <div className="">
                    Agreement between xyz and ourwebsite
                </div>
            </div>
            <div className="">
                <Image alt='partner' src={"/partner.png"} width={237} height={212} />
                <div className="">
                    Agreement between xyz and ourwebsite
                </div>

            </div>

        </div>
    )
}
