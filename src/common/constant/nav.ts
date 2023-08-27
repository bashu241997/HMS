import { Cog8ToothIcon, DocumentTextIcon,InboxIcon,BellAlertIcon, EnvelopeIcon, CreditCardIcon, KeyIcon, UserIcon, CalendarIcon,Squares2X2Icon } from '@heroicons/react/24/solid'

export const menu = [
  {
    label: "overview",
    link: "/overview",
    Icon: Squares2X2Icon,
  },
  {
    label: "appointment",
    link: "/appointment",
    Icon: CalendarIcon,
  },{
    label: "my patients",
    link: "/patients",
    Icon: UserIcon,
  },
  // {
  //   label: "schedule timings",
  //   link: "/schedule",
  //   Icon: ClockIcon,
  // },
  {
    label: "payments",
    link: "/transactions",
    Icon: CreditCardIcon,
  },
  {
    label: "message",
    link: "/chat",
    Icon: EnvelopeIcon,
  },
  ,
  {
    label: "blog",
    link: "/posts",
    Icon: DocumentTextIcon,
  },
  {
    label: "settings",
    link: "/configuration",
    Icon: Cog8ToothIcon,
  },
];
export const Settings = [
  {
    label: "my profile",
    link: "/configuration/profile",
    Icon: UserIcon,
  },
  {
    label: "change password",
    link: "/configuration/changepassword",
    Icon: KeyIcon,
  },{
    label: "notifications",
    link: "/configuration/alerts",
    Icon: BellAlertIcon,
  },
  {
    label: "review",
    link: "/configuration/transactions",
    Icon: InboxIcon,
  },
];