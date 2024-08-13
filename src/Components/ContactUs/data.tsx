import Svgs from '../Header/Announcement/Svgs'
import FindUs from '../SVG/FindUs'
import FollowUs from '../SVG/FollowUs'
import Phone from '../SVG/Phone'
import WorkingHours from '../SVG/WorkingHours'
import WriteToUS from '../SVG/WriteToUS'
export type ContactDetail = {
    title: string,
    children?: string[] | JSX.Element
    svg: JSX.Element

}
export type ContactDetails = ContactDetail[]
export const contactDetails: ContactDetails = [
    {
        title: "Find Us",
        children: ["2301 AMMAN . JORDAN"],
        svg: <FindUs />
    },
    {
        title: "Phone",
        children: ["+ (06) 111-1111", "+ (06) 111-1111"],
        svg: <Phone />
    },
    {
        title: "Working Hours",
        children: ["Mon-Fri: 8 AM - 5 PM", "Sat-Sun: 8 AM - 2 PM"],
        svg: <WorkingHours />
    },
    {
        title: "Write to Us",
        children: ["info@ourwebsite.com", "courses@ourwebsite.com"],
        svg: <WriteToUS />
    },
    {
        title: "Follow Us",
        children: <Svgs />,
        svg: <FollowUs />,

    }

]


