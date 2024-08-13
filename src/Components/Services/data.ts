type cardType = "rounded" | "transparent"
export type RoundedDirection = "bottomLeft" | "topRight"
export type ServicesItem = {
    title: string,
    text: string,
    cardType: cardType,
    roundedDirection?: string
}
export type ServicesITems = ServicesItem[]
export const servicesData: ServicesITems = [
    {
        title: "Coworking Spaces",
        text: "Increase Your Productivity in Inspirational Workspaces. Our coworking spaces are more than just workplaces - they are hubs for innovation and collaboration. Choose from diverse options, including open workspaces, private offices, and fully-equipped meeting rooms. Immerse yourself in a dynamic environment designed to stimulate creativity and enhance productivity",
        cardType: "rounded",
        roundedDirection: "bottomLeft"
    },
    {
        title: "Mentoring and Training",
        text: "Grow with Expert Guidance. Our mentoring and training programs are your gateway to professional development. Gain insights and guidance from industry experts. Learn how to effectively apply your knowledge, navigate challenges, and expand your technological project",
        cardType: "transparent"
    },
    {
        title: "Coworking Spaces",
        text: "Increase Your Productivity in Inspirational Workspaces. Our coworking spaces are more than just workplaces - they are hubs for innovation and collaboration. Choose from diverse options, including open workspaces, private offices, and fully-equipped meeting rooms. Immerse yourself in a dynamic environment designed to stimulate creativity and enhance productivity",
        cardType: "rounded",
        roundedDirection: "topRight"
    },
    {
        title: "Mentoring and Training",
        text: "Grow with Expert Guidance. Our mentoring and training programs are your gateway to professional development. Gain insights and guidance from industry experts. Learn how to effectively apply your knowledge, navigate challenges, and expand your technological project",
        cardType: "transparent"
    },

]