import Collaboration from "../SVG/Collaboration"
import Innovation from "../SVG/Innovation"
import Mission from "../SVG/Mission"
import Vision from "../SVG/Vision"

export type AboutUsItems = {
    title: string,
    text: string,
    svg: JSX.Element

}[]
export const aboutUsData: AboutUsItems = [
    {
        title: "Fostering Collaboration",
        text: "Encouraging synergy among different entities in the technology ecosystem, includingstartups, freelancers, compaes, academia, and government",
        svg: <Collaboration />,
    },
    {
        title: "Mission Statement",
        text: "A technological revolution in East amman through fostering innovation, collaboration, education, and community growth",
        svg: <Mission />
    },

    {
        title: "Promoting Innovation",
        text: "By providing support and guidance/ training, the center aims to cultivate an environment where new ideas and innovative solutions can thrive",
        svg: <Innovation />

    },
    {
        title: "Vision Statement",
        text: "Establishing a leading technological hub as a catalyst for technological advancement and social development in East amman",
        svg: <Vision />


    },
]