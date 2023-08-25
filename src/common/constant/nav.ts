import { Cog8ToothIcon, DocumentTextIcon, EnvelopeIcon, CreditCardIcon, ClockIcon, UserIcon, CalendarIcon,Squares2X2Icon } from '@heroicons/react/24/solid'

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
