import React from 'react'

type AboutUsItem = {
    title: string,
    text: string,
    svg: JSX.Element

}
type Props = {
    aboutUsItem: AboutUsItem
}
export default function AboutUsCard({ aboutUsItem }: Props) {
    return (
        <div>
            <h2>{aboutUsItem.title}</h2>
            <h3>{aboutUsItem.text}</h3>
            {aboutUsItem.svg
            }
        </div>

    )
}
