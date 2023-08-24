import { CalendarDaysIcon,UserIcon,VideoCameraIcon,BuildingOffice2Icon } from "@heroicons/react/24/solid"
import { infoCards } from "../interfaces/overviewpage"


const cards:infoCards[] = [
    {
        label:"appointments",
        totals:24.4,
        Icon:CalendarDaysIcon,
        iconbg:"bg-violetSecondary",
        backgroundColor:"bg-violetMain",
        textcolor:"white",
        iconcolor:"white",
    },  {
        label:"total patients",
        totals:166.3,
        Icon:UserIcon,
        iconbg:"bg-redSecondary",
        backgroundColor:"bg-redMain",
        textcolor:"white",
        iconcolor:"white",
    },  {
        label:"clinic consulting",
        totals:53.5,
        Icon:BuildingOffice2Icon,
        iconbg:"bg-orangeSecondary",
        backgroundColor:"bg-orangeMain",
        textcolor:"white",
        iconcolor:"white",
    },  {
        label:"video consulting",
        totals:28.0,
        Icon:VideoCameraIcon,
        iconbg:"bg-skySecondary",
        backgroundColor:"bg-skyMain",
        textcolor:"white",
        iconcolor:"white",
    }
]
export {
  cards
}