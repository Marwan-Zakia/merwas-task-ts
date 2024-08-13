import React from 'react'
import { contactDetails } from './data'

export default function ContactDetails() {
    return (
        <div>
            {
                contactDetails.map((detail) => {
                    return <>
                        {detail.title}
                        {Array.isArray(detail.children) ? detail.children?.map((item) => <>{item}</>) : detail.children}
                        {detail.svg}
                    </>

                })
            }
        </div>
    )
}
