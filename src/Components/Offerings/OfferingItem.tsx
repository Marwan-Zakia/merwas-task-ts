import React from 'react'

type Offering = {
    title: string;
    subTitle: string;
    path: string;
    imageSrc: string;
};

type Props = {
    readonly offering: Offering;
};

export default function OfferingItem({ offering }: Props) {
    return (
        <div>
            <h2>{offering.title}</h2>
            <h3>{offering.subTitle}</h3>
            <img src={offering.imageSrc} alt={offering.title} />
            <p>{offering.path}</p>
        </div>
    );
}