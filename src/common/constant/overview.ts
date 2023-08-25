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

const patients = [
    {
      "id": "64e83c39632663dc8acb5cfd",
      "email": "@gmail.com",
      "username": "undefined89",
      "profile": {
        "firstname": "Justine",
        "lastname": " Wilkins",
        "dob": "1989-06-29",
        "address": "66 Roosevelt Place, Barrelville, Puerto Rico",
        "about": "Exercitation dolore id id id eiusmod veniam nisi non irure id. Minim eu reprehenderit ea ea laboris ullamco nostrud dolor nostrud consectetur aute et tempor ut.",
        "gender": "male",
        "mobile": "+91 10000000000",
        "pic": "/1.png"
      },
      "roles": "new patient",
      "health": {
        "weight": 81,
        "height": 180,
        "bp": "72/192",
        "disease": "BP"
      },
      "joinedDate": "2014-09-21T21:53:44.838Z",
      "currentComplaint": {
        "appointmentDate": "2023-08-28T05:29:29.459Z",
        "status": "conformed",
        "concern": [
          "fever",
          "cold",
          "Hepatitis"
        ]
      }
    },
    {
      "id": "64e83c39c46fe55c0cb75bed",
      "email": "@gmail.com",
      "username": "undefined91",
      "profile": {
        "firstname": "Maria",
        "lastname": " Miles",
        "dob": "1991-01-15",
        "address": "49 Batchelder Street, Needmore, Wyoming",
        "about": "Lorem duis laborum ad amet cillum mollit aliquip. Velit fugiat ad id elit ex nostrud anim incididunt tempor.",
        "gender": "male",
        "mobile": "+91 10000000000",
        "pic": "/2.png"
      },
      "roles": "new patient",
      "health": {
        "weight": 82,
        "height": 161,
        "bp": "65/197",
        "disease": "Hepatitis"
      },
      "joinedDate": "2011-04-12T16:37:36.539Z",
      "currentComplaint": {
        "appointmentDate": "2023-08-28T05:29:29.460Z",
        "status": "declined",
        "concern": [
          "fever",
          "cough",
          "diabites",
          "tumor"
        ]
      }
    },
    {
      "id": "64e83c391ed82417373cea70",
      "email": "@gmail.com",
      "username": "undefined93",
      "profile": {
        "firstname": "Herring",
        "lastname": " Bryant",
        "dob": "1993-03-26",
        "address": "37 Eldert Lane, Strong, Delaware",
        "about": "Laborum eu Lorem deserunt in ex commodo aliqua mollit duis qui laborum ex amet aliquip. Exercitation enim laboris ad occaecat nulla laboris amet fugiat consequat culpa.",
        "gender": "male",
        "mobile": "+91 10000000000",
        "pic": "/3.png"
      },
      "roles": "new patient",
      "health": {
        "weight": 64,
        "height": 179,
        "bp": "78/199",
        "disease": "Hepatitis"
      },
      "joinedDate": "2011-04-24T07:36:18.728Z",
      "currentComplaint": {
        "appointmentDate": "2023-08-28T05:29:29.460Z",
        "status": "inprogress",
        "concern": [
          "cough",
          "diabites"
        ]
      }
    },
    {
      "id": "64e83c394d305f7d89e43dd2",
      "email": "@gmail.com",
      "username": "undefined92",
      "profile": {
        "firstname": "Lindsay",
        "lastname": " Cooper",
        "dob": "1992-10-21",
        "address": "99 George Street, Comptche, Connecticut",
        "about": "Mollit ad reprehenderit veniam fugiat ipsum Lorem eu esse minim quis. Officia Lorem magna adipisicing minim Lorem non occaecat.",
        "gender": "female",
        "mobile": "+91 10000000000",
        "pic": "/4.png"
      },
      "roles": "old patient",
      "health": {
        "weight": 83,
        "height": 160,
        "bp": "67/140",
        "disease": "tumor"
      },
      "joinedDate": "2010-09-27T00:02:18.096Z",
      "currentComplaint": {
        "appointmentDate": "2023-08-28T05:29:29.460Z",
        "status": "declined",
        "concern": [
          "diabites",
          "BP"
        ]
      }
    },
    {
      "id": "64e83c39633f65faf51bdca1",
      "email": "@gmail.com",
      "username": "undefined90",
      "profile": {
        "firstname": "Gomez",
        "lastname": " Hendrix",
        "dob": "1990-02-26",
        "address": "15 Lancaster Avenue, Wikieup, Pennsylvania",
        "about": "Irure ut veniam adipisicing tempor dolore eu. Tempor ipsum nulla amet commodo anim officia fugiat dolore excepteur amet eiusmod.",
        "gender": "female",
        "mobile": "+91 10000000000",
        "pic": "/5.png"
      },
      "roles": "old patient",
      "health": {
        "weight": 58,
        "height": 158,
        "bp": "71/161",
        "disease": "cold"
      },
      "joinedDate": "2012-10-14T11:25:39.031Z",
      "currentComplaint": {
        "appointmentDate": "2023-08-28T05:29:29.460Z",
        "status": "conformed",
        "concern": [
          "tumor",
          "BP",
          "Hepatitis"
        ]
      }
    },
    {
      "id": "64e83c39100fa5537c75eb85",
      "email": "@gmail.com",
      "username": "undefined90",
      "profile": {
        "firstname": "Holman",
        "lastname": " Hester",
        "dob": "1990-02-22",
        "address": "19 Bush Street, Golconda, Illinois",
        "about": "Fugiat id ullamco anim tempor. Laboris dolore nulla excepteur aute eiusmod.",
        "gender": "male",
        "mobile": "+91 10000000000",
        "pic": "/6.png"
      },
      "roles": "new patient",
      "health": {
        "weight": 67,
        "height": 161,
        "bp": "78/158",
        "disease": "cough"
      },
      "joinedDate": "2014-08-30T14:16:33.936Z",
      "currentComplaint": {
        "appointmentDate": "2023-08-28T05:29:29.461Z",
        "status": "declined",
        "concern": [
          "head ache",
          "fever"
        ]
      }
    },
    {
      "id": "64e83c392e27c5294aad6094",
      "email": "@gmail.com",
      "username": "undefined93",
      "profile": {
        "firstname": "Constance",
        "lastname": " Morris",
        "dob": "1993-10-30",
        "address": "78 Nixon Court, Allentown, Arkansas",
        "about": "Est reprehenderit magna dolor exercitation consequat sunt cillum. Excepteur exercitation dolore ad consectetur officia non consectetur ipsum velit qui id excepteur ipsum.",
        "gender": "female",
        "mobile": "+91 10000000000",
        "pic": "/7.png"
      },
      "roles": "old patient",
      "health": {
        "weight": 71,
        "height": 150,
        "bp": "79/152",
        "disease": "BP"
      },
      "joinedDate": "2010-02-17T03:56:43.457Z",
      "currentComplaint": {
        "appointmentDate": "2023-08-28T05:29:29.461Z",
        "status": "inprogress",
        "concern": [
          "cold",
          "diabites",
          "Hepatitis"
        ]
      }
    },
    {
      "id": "64e83c39101eb53b780dc470",
      "email": "@gmail.com",
      "username": "undefined90",
      "profile": {
        "firstname": "Marilyn",
        "lastname": " Combs",
        "dob": "1990-07-06",
        "address": "94 Harbor Lane, Brookfield, Virgin Islands",
        "about": "Quis adipisicing aliqua proident nisi qui Lorem nisi incididunt ipsum dolore ex ad ex. Do id eu elit quis aliquip deserunt nulla consequat officia.",
        "gender": "male",
        "mobile": "+91 10000000000",
        "pic": "/8.png"
      },
      "roles": "new patient",
      "health": {
        "weight": 50,
        "height": 159,
        "bp": "63/111",
        "disease": "cold"
      },
      "joinedDate": "2014-06-01T12:36:03.041Z",
      "currentComplaint": {
        "appointmentDate": "2023-08-28T05:29:29.461Z",
        "status": "conformed",
        "concern": [
          "cold",
          "Hepatitis",
          "diabites"
        ]
      }
    },
    {
      "id": "64e83c3943ff975cccb3420b",
      "email": "@gmail.com",
      "username": "undefined94",
      "profile": {
        "firstname": "Hamilton",
        "lastname": " Burnett",
        "dob": "1994-05-02",
        "address": "6 Plaza Street, Caroline, Mississippi",
        "about": "Nisi ad eiusmod dolor eiusmod nisi nisi cupidatat elit. Incididunt ex velit ex aute voluptate culpa consequat deserunt cupidatat duis cillum sunt.",
        "gender": "male",
        "mobile": "+91 10000000000",
        "pic": "/9.png"
      },
      "roles": "new patient",
      "health": {
        "weight": 56,
        "height": 179,
        "bp": "64/113",
        "disease": "diabites"
      },
      "joinedDate": "2012-02-08T10:17:19.587Z",
      "currentComplaint": {
        "appointmentDate": "2023-08-28T05:29:29.461Z",
        "status": "conformed",
        "concern": [
          "Hepatitis",
          "allergies",
          "head ache",
          "fever"
        ]
      }
    },
    {
      "id": "64e83c39975301c23946cbbb",
      "email": "@gmail.com",
      "username": "undefined91",
      "profile": {
        "firstname": "Lester",
        "lastname": " Ortega",
        "dob": "1991-07-11",
        "address": "16 Kensington Walk, Cetronia, Alaska",
        "about": "Fugiat eu aliquip id eiusmod voluptate occaecat consectetur. Mollit anim duis amet incididunt eu dolor in consequat dolore.",
        "gender": "male",
        "mobile": "+91 10000000000",
        "pic": "/10.png"
      },
      "roles": "new patient",
      "health": {
        "weight": 80,
        "height": 190,
        "bp": "77/122",
        "disease": "head ache"
      },
      "joinedDate": "2012-06-05T03:54:50.253Z",
      "currentComplaint": {
        "appointmentDate": "2023-08-28T05:29:29.461Z",
        "status": "conformed",
        "concern": [
          "head ache",
          "diabites",
          "tumor",
          "cough"
        ]
      }
    },
    {
      "id": "64e83c3935694a073dc0df5f",
      "email": "@gmail.com",
      "username": "undefined91",
      "profile": {
        "firstname": "Barbra",
        "lastname": " Sutton",
        "dob": "1991-12-13",
        "address": "20 Stryker Court, Beaverdale, New Hampshire",
        "about": "Ipsum fugiat mollit velit minim officia ad ut. Eiusmod irure qui veniam elit ipsum pariatur.",
        "gender": "female",
        "mobile": "+91 10000000000",
        "pic": "/11.png"
      },
      "roles": "old patient",
      "health": {
        "weight": 57,
        "height": 162,
        "bp": "73/192",
        "disease": "BP"
      },
      "joinedDate": "2011-03-02T05:53:34.718Z",
      "currentComplaint": {
        "appointmentDate": "2023-08-28T05:29:29.461Z",
        "status": "conformed",
        "concern": [
          "BP",
          "diabites",
          "allergies"
        ]
      }
    },
    {
      "id": "64e83c395e78297bc2700ac0",
      "email": "@gmail.com",
      "username": "undefined88",
      "profile": {
        "firstname": "Garza",
        "lastname": " Browning",
        "dob": "1988-12-02",
        "address": "4 Sunnyside Court, Fedora, Colorado",
        "about": "Exercitation Lorem exercitation reprehenderit esse labore enim ea elit minim proident dolore. Officia fugiat est veniam irure dolore ut incididunt ut.",
        "gender": "female",
        "mobile": "+91 10000000000",
        "pic": "/12.png"
      },
      "roles": "new patient",
      "health": {
        "weight": 59,
        "height": 172,
        "bp": "76/123",
        "disease": "BP"
      },
      "joinedDate": "2011-04-23T16:18:37.289Z",
      "currentComplaint": {
        "appointmentDate": "2023-08-28T05:29:29.461Z",
        "status": "conformed",
        "concern": [
          "cold",
          "diabites",
          "BP"
        ]
      }
    },
    {
      "id": "64e83c3929d8403e70a0ba01",
      "email": "@gmail.com",
      "username": "undefined90",
      "profile": {
        "firstname": "Paula",
        "lastname": " Haley",
        "dob": "1990-10-31",
        "address": "15 Amherst Street, Barstow, Marshall Islands",
        "about": "Est eu irure id amet mollit laborum irure nulla ullamco exercitation aliqua occaecat ex consectetur. Ad Lorem nulla veniam nisi minim dolor aliquip.",
        "gender": "female",
        "mobile": "+91 10000000000",
        "pic": "/13.png"
      },
      "roles": "new patient",
      "health": {
        "weight": 70,
        "height": 186,
        "bp": "77/186",
        "disease": "fever"
      },
      "joinedDate": "2013-05-03T09:46:58.358Z",
      "currentComplaint": {
        "appointmentDate": "2023-08-28T05:29:29.461Z",
        "status": "declined",
        "concern": [
          "cough",
          "BP",
          "head ache"
        ]
      }
    },
    {
      "id": "64e83c3983203adb7695cbdb",
      "email": "@gmail.com",
      "username": "undefined89",
      "profile": {
        "firstname": "Donovan",
        "lastname": " Hancock",
        "dob": "1989-01-21",
        "address": "59 Hope Street, Abrams, Wisconsin",
        "about": "Velit id elit sunt velit adipisicing do elit eiusmod dolor et amet. Nostrud in occaecat nisi et eu cupidatat aute et minim quis adipisicing nisi nulla.",
        "gender": "female",
        "mobile": "+91 10000000000",
        "pic": "/14.png"
      },
      "roles": "old patient",
      "health": {
        "weight": 87,
        "height": 173,
        "bp": "75/191",
        "disease": "head ache"
      },
      "joinedDate": "2011-09-17T16:13:36.459Z",
      "currentComplaint": {
        "appointmentDate": "2023-08-28T05:29:29.461Z",
        "status": "conformed",
        "concern": [
          "tumor",
          "diabites",
          "Hepatitis",
          "allergies"
        ]
      }
    },
    {
      "id": "64e83c3956160228f0446233",
      "email": "@gmail.com",
      "username": "undefined88",
      "profile": {
        "firstname": "Roy",
        "lastname": " Rosario",
        "dob": "1988-12-22",
        "address": "80 Navy Street, Tecolotito, Idaho",
        "about": "Tempor velit do qui occaecat magna reprehenderit sunt Lorem amet ea aliqua. Sunt occaecat reprehenderit sint ut do incididunt sunt anim adipisicing ad mollit.",
        "gender": "male",
        "mobile": "+91 10000000000",
        "pic": "/15.png"
      },
      "roles": "new patient",
      "health": {
        "weight": 76,
        "height": 152,
        "bp": "65/148",
        "disease": "diabites"
      },
      "joinedDate": "2011-12-07T15:31:30.142Z",
      "currentComplaint": {
        "appointmentDate": "2023-08-28T05:29:29.461Z",
        "status": "inprogress",
        "concern": [
          "tumor",
          "cold"
        ]
      }
    },
    {
      "id": "64e83c392714a908ef6c1a00",
      "email": "@gmail.com",
      "username": "undefined88",
      "profile": {
        "firstname": "Elvia",
        "lastname": " Foreman",
        "dob": "1988-04-10",
        "address": "1 Lamont Court, Bentley, Utah",
        "about": "Nulla proident fugiat sunt non veniam consequat Lorem duis magna deserunt laborum laborum. Aute adipisicing deserunt deserunt et magna culpa.",
        "gender": "female",
        "mobile": "+91 10000000000",
        "pic": "/16.png"
      },
      "roles": "old patient",
      "health": {
        "weight": 64,
        "height": 183,
        "bp": "70/148",
        "disease": "Hepatitis"
      },
      "joinedDate": "2012-02-17T16:23:13.171Z",
      "currentComplaint": {
        "appointmentDate": "2023-08-28T05:29:29.462Z",
        "status": "inprogress",
        "concern": [
          "allergies",
          "fever",
          "tumor"
        ]
      }
    }
  ]

export {
  cards,patients
}