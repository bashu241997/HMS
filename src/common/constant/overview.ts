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
export const docchat = {
  "conversation": [
    {
      "role": "doctor",
      "message": "Hello! This is Dr. Smith. How can I help you today?"
    },
    {
      "role": "patient",
      "message": "Hi Dr. Smith, I've been experiencing a persistent headache for the past week, and I'm concerned about it."
    },
    {
      "role": "doctor",
      "message": "I'm sorry to hear that you're experiencing a headache. Can you please describe the nature of the headache? Is it throbbing or constant? Do you have any other symptoms?"
    },
    {
      "role": "patient",
      "message": "The headache is constant, and it's mostly on the right side of my head. I've also been feeling a bit dizzy at times."
    },
    {
      "role": "doctor",
      "message": "Thank you for sharing that information. It's important to understand your symptoms. Have you had any recent injuries or changes in your daily routine that might be contributing to the headache?"
    },
    {
      "role": "patient",
      "message": "I can't think of any recent injuries, but I've been under a lot of stress at work lately. Could stress be causing this headache?"
    },
    {
      "role": "doctor",
      "message": "Stress can certainly contribute to headaches. We'll explore that possibility. I recommend a physical examination to rule out any underlying issues. Can you come to the clinic for an appointment?"
    },
    {
      "role": "patient",
      "message": "Yes, I can come in for an appointment. What day and time works for you?"
    },
    {
      "role": "doctor",
      "message": "Great! I have availability on Monday at 2:00 PM. Does that work for you?"
    },
    {
      "role": "patient",
      "message": "Monday at 2:00 PM works for me. I'll see you then, Dr. Smith."
    }
  ]
}

const patients = [
  {
    "id": "64e8acf885c2aadd4f970707",
    "email": "jami@gmail.com",
    "username": "jami280391",
    "profile": {
      "firstname": "Jami",
      "lastname": " Alvarado",
      "dob": "1991-03-28",
      "address": "33 Pilling Street, Gila, West Virginia",
      "about": "Amet reprehenderit officia magna amet aliquip occaecat ullamco. Laboris ex irure aute id aute ullamco cillum minim cupidatat officia amet.",
      "gender": "male",
      "mobile": "+91 10000000000",
      "pic": "/1.png"
    },
    "roles": "old patient",
    "health": {
      "lastVisit": "2023-07-25T13:30:32.612Z",
      "weight": 75,
      "height": 157,
      "bp": "60/179",
      "platelet": "192388 mm3",
      "HB": "13 G/DL",
      "MCHC": "33 %",
      "TC": "3155 mm3",
      "DCP": "50 %",
      "AEC": "89 /mm3",
      "TRBC": "3.38 millions/mm3%",
      "HCT": "50 fl",
      "MCV": "91 %",
      "MCH": "30 pg",
      "disease": [
        "diabites",
        "cough",
        "Hepatitis",
        "BP"
      ]
    },
    "joinedDate": "2023-03-31T04:42:42.841Z",
    "currentComplaint": {
      "appointmentDate": "2023-08-26T13:30:32.613Z",
      "status": "conformed",
      "weight": 61,
      "height": 154,
      "bp": "64/162",
      "platelet": "410241 mm3",
      "HB": "18 G/DL",
      "MCHC": "34 %",
      "TC": "8986 mm3",
      "DCP": "64 %",
      "AEC": "240 /mm3",
      "TRBC": "3.54 millions/mm3%",
      "HCT": "44 fl",
      "MCV": "87 %",
      "MCH": "30 pg",
      "concern": [
        "diabites",
        "tumor",
        "cough"
      ]
    }
  },
  {
    "id": "64e8acf8de722a0e01f8d294",
    "email": "avery@gmail.com",
    "username": "avery190592",
    "profile": {
      "firstname": "Avery",
      "lastname": " Dickson",
      "dob": "1992-05-19",
      "address": "49 Cooper Street, Goldfield, Delaware",
      "about": "Voluptate occaecat ullamco veniam cillum ut aliquip fugiat do nisi. Pariatur tempor incididunt qui exercitation anim sunt fugiat ut cupidatat aliquip mollit.",
      "gender": "female",
      "mobile": "+91 10000000000",
      "pic": "/2.png"
    },
    "roles": "new patient",
    "health": {
      "lastVisit": "2023-07-25T13:30:32.614Z",
      "weight": 83,
      "height": 151,
      "bp": "79/185",
      "platelet": "404291 mm3",
      "HB": "13 G/DL",
      "MCHC": "33 %",
      "TC": "5906 mm3",
      "DCP": "47 %",
      "AEC": "423 /mm3",
      "TRBC": "4.44 millions/mm3%",
      "HCT": "40 fl",
      "MCV": "92 %",
      "MCH": "29 pg",
      "disease": [
        "BP",
        "head ache",
        "cough",
        "cough"
      ]
    },
    "joinedDate": "2023-07-27T13:10:25.964Z",
    "currentComplaint": {
      "appointmentDate": "2023-08-26T13:30:32.614Z",
      "status": "inprogress",
      "weight": 76,
      "height": 168,
      "bp": "65/181",
      "platelet": "291870 mm3",
      "HB": "13 G/DL",
      "MCHC": "36 %",
      "TC": "4247 mm3",
      "DCP": "69 %",
      "AEC": "50 /mm3",
      "TRBC": "3.71 millions/mm3%",
      "HCT": "48 fl",
      "MCV": "92 %",
      "MCH": "31 pg",
      "concern": [
        "cold",
        "fever"
      ]
    }
  },
  {
    "id": "64e8acf8474fc41435ecda60",
    "email": "randi@gmail.com",
    "username": "randi261091",
    "profile": {
      "firstname": "Randi",
      "lastname": " Ewing",
      "dob": "1991-10-26",
      "address": "72 Madison Street, Weogufka, Maine",
      "about": "Tempor irure veniam commodo minim mollit Lorem consequat id nulla proident in laborum. Culpa quis duis tempor do occaecat.",
      "gender": "female",
      "mobile": "+91 10000000000",
      "pic": "/3.png"
    },
    "roles": "old patient",
    "health": {
      "lastVisit": "2023-07-25T13:30:32.614Z",
      "weight": 56,
      "height": 174,
      "bp": "65/186",
      "platelet": "241319 mm3",
      "HB": "15 G/DL",
      "MCHC": "32 %",
      "TC": "5983 mm3",
      "DCP": "53 %",
      "AEC": "253 /mm3",
      "TRBC": "3.37 millions/mm3%",
      "HCT": "50 fl",
      "MCV": "92 %",
      "MCH": "30 pg",
      "disease": [
        "cold",
        "cough",
        "allergies",
        "Hepatitis"
      ]
    },
    "joinedDate": "2023-04-14T14:15:52.931Z",
    "currentComplaint": {
      "appointmentDate": "2023-08-26T13:30:32.614Z",
      "status": "inprogress",
      "weight": 80,
      "height": 174,
      "bp": "74/159",
      "platelet": "405089 mm3",
      "HB": "16 G/DL",
      "MCHC": "35 %",
      "TC": "5757 mm3",
      "DCP": "69 %",
      "AEC": "81 /mm3",
      "TRBC": "4.65 millions/mm3%",
      "HCT": "46 fl",
      "MCV": "85 %",
      "MCH": "29 pg",
      "concern": [
        "cough",
        "allergies",
        "fever",
        "tumor"
      ]
    }
  },
  {
    "id": "64e8acf821c340158ce6bea1",
    "email": "ophelia@gmail.com",
    "username": "ophelia210890",
    "profile": {
      "firstname": "Ophelia",
      "lastname": " Harvey",
      "dob": "1990-08-21",
      "address": "54 Neptune Court, Crown, Florida",
      "about": "Tempor reprehenderit enim et occaecat. Non culpa elit proident aute ad qui officia nostrud aliquip.",
      "gender": "female",
      "mobile": "+91 10000000000",
      "pic": "/4.png"
    },
    "roles": "old patient",
    "health": {
      "lastVisit": "2023-07-25T13:30:32.615Z",
      "weight": 89,
      "height": 175,
      "bp": "63/157",
      "platelet": "140658 mm3",
      "HB": "15 G/DL",
      "MCHC": "34 %",
      "TC": "6288 mm3",
      "DCP": "42 %",
      "AEC": "66 /mm3",
      "TRBC": "4.09 millions/mm3%",
      "HCT": "40 fl",
      "MCV": "92 %",
      "MCH": "29 pg",
      "disease": [
        "allergies",
        "cough",
        "Hepatitis",
        "allergies"
      ]
    },
    "joinedDate": "2023-03-25T17:09:19.965Z",
    "currentComplaint": {
      "appointmentDate": "2023-08-26T13:30:32.615Z",
      "status": "declined",
      "weight": 81,
      "height": 157,
      "bp": "60/142",
      "platelet": "398885 mm3",
      "HB": "17 G/DL",
      "MCHC": "36 %",
      "TC": "4760 mm3",
      "DCP": "40 %",
      "AEC": "111 /mm3",
      "TRBC": "5.15 millions/mm3%",
      "HCT": "48 fl",
      "MCV": "82 %",
      "MCH": "28 pg",
      "concern": [
        "head ache",
        "cold",
        "allergies"
      ]
    }
  },
  {
    "id": "64e8acf84b363fea5c9ba87e",
    "email": "deanne@gmail.com",
    "username": "deanne110394",
    "profile": {
      "firstname": "Deanne",
      "lastname": " Middleton",
      "dob": "1994-03-11",
      "address": "1 Bank Street, Bellamy, Illinois",
      "about": "Sint deserunt voluptate sunt sint incididunt amet tempor nulla minim officia ut culpa aute. Exercitation anim voluptate consectetur est qui excepteur voluptate qui.",
      "gender": "female",
      "mobile": "+91 10000000000",
      "pic": "/5.png"
    },
    "roles": "new patient",
    "health": {
      "lastVisit": "2023-07-25T13:30:32.615Z",
      "weight": 67,
      "height": 172,
      "bp": "70/144",
      "platelet": "376769 mm3",
      "HB": "13 G/DL",
      "MCHC": "33 %",
      "TC": "6342 mm3",
      "DCP": "62 %",
      "AEC": "28 /mm3",
      "TRBC": "4.99 millions/mm3%",
      "HCT": "45 fl",
      "MCV": "80 %",
      "MCH": "31 pg",
      "disease": [
        "Hepatitis",
        "cough",
        "tumor",
        "tumor"
      ]
    },
    "joinedDate": "2023-01-15T16:37:12.871Z",
    "currentComplaint": {
      "appointmentDate": "2023-08-26T13:30:32.615Z",
      "status": "conformed",
      "weight": 59,
      "height": 190,
      "bp": "74/114",
      "platelet": "337038 mm3",
      "HB": "14 G/DL",
      "MCHC": "32 %",
      "TC": "9045 mm3",
      "DCP": "58 %",
      "AEC": "82 /mm3",
      "TRBC": "4.05 millions/mm3%",
      "HCT": "40 fl",
      "MCV": "92 %",
      "MCH": "28 pg",
      "concern": [
        "tumor",
        "fever",
        "cough"
      ]
    }
  },
  {
    "id": "64e8acf866a63d301a84fe7f",
    "email": "raymond@gmail.com",
    "username": "raymond040688",
    "profile": {
      "firstname": "Raymond",
      "lastname": " Booker",
      "dob": "1988-06-04",
      "address": "95 Kings Hwy, Fulford, Virginia",
      "about": "Elit eiusmod proident pariatur sint id Lorem aliqua excepteur velit laboris enim et eiusmod. Magna enim consequat laboris laborum.",
      "gender": "female",
      "mobile": "+91 10000000000",
      "pic": "/6.png"
    },
    "roles": "old patient",
    "health": {
      "lastVisit": "2023-07-25T13:30:32.615Z",
      "weight": 63,
      "height": 183,
      "bp": "73/163",
      "platelet": "366971 mm3",
      "HB": "17 G/DL",
      "MCHC": "32 %",
      "TC": "4918 mm3",
      "DCP": "39 %",
      "AEC": "85 /mm3",
      "TRBC": "4.34 millions/mm3%",
      "HCT": "49 fl",
      "MCV": "84 %",
      "MCH": "31 pg",
      "disease": [
        "fever",
        "cold",
        "Hepatitis"
      ]
    },
    "joinedDate": "2023-08-04T13:11:34.341Z",
    "currentComplaint": {
      "appointmentDate": "2023-08-26T13:30:32.615Z",
      "status": "declined",
      "weight": 55,
      "height": 187,
      "bp": "66/178",
      "platelet": "240698 mm3",
      "HB": "18 G/DL",
      "MCHC": "33 %",
      "TC": "8186 mm3",
      "DCP": "47 %",
      "AEC": "367 /mm3",
      "TRBC": "4.64 millions/mm3%",
      "HCT": "41 fl",
      "MCV": "90 %",
      "MCH": "30 pg",
      "concern": [
        "cough",
        "allergies"
      ]
    }
  },
  {
    "id": "64e8acf88eec649826e44131",
    "email": "bradshaw@gmail.com",
    "username": "bradshaw011094",
    "profile": {
      "firstname": "Bradshaw",
      "lastname": " Cardenas",
      "dob": "1994-10-01",
      "address": "76 Hutchinson Court, Hillsboro, Texas",
      "about": "Ex aliquip tempor consectetur irure commodo ea irure ex aute dolore labore laborum aliquip in. Qui officia do nostrud Lorem aliqua ullamco exercitation aliqua quis voluptate magna.",
      "gender": "female",
      "mobile": "+91 10000000000",
      "pic": "/7.png"
    },
    "roles": "old patient",
    "health": {
      "lastVisit": "2023-07-25T13:30:32.615Z",
      "weight": 69,
      "height": 170,
      "bp": "76/142",
      "platelet": "275598 mm3",
      "HB": "17 G/DL",
      "MCHC": "32 %",
      "TC": "10129 mm3",
      "DCP": "41 %",
      "AEC": "463 /mm3",
      "TRBC": "5.06 millions/mm3%",
      "HCT": "50 fl",
      "MCV": "85 %",
      "MCH": "29 pg",
      "disease": [
        "allergies",
        "cold",
        "cough"
      ]
    },
    "joinedDate": "2023-03-24T23:23:52.241Z",
    "currentComplaint": {
      "appointmentDate": "2023-08-26T13:30:32.615Z",
      "status": "declined",
      "weight": 84,
      "height": 190,
      "bp": "77/169",
      "platelet": "311671 mm3",
      "HB": "18 G/DL",
      "MCHC": "32 %",
      "TC": "3935 mm3",
      "DCP": "57 %",
      "AEC": "268 /mm3",
      "TRBC": "4.21 millions/mm3%",
      "HCT": "48 fl",
      "MCV": "82 %",
      "MCH": "29 pg",
      "concern": [
        "diabites",
        "tumor",
        "allergies"
      ]
    }
  },
  {
    "id": "64e8acf8df1640879c979a1a",
    "email": "bettie@gmail.com",
    "username": "bettie040992",
    "profile": {
      "firstname": "Bettie",
      "lastname": " Whitehead",
      "dob": "1992-09-04",
      "address": "3 Joval Court, Dennard, Mississippi",
      "about": "Non elit eiusmod do incididunt pariatur incididunt. Sunt duis magna occaecat cupidatat in ex eiusmod reprehenderit enim amet.",
      "gender": "male",
      "mobile": "+91 10000000000",
      "pic": "/8.png"
    },
    "roles": "old patient",
    "health": {
      "lastVisit": "2023-07-25T13:30:32.615Z",
      "weight": 86,
      "height": 168,
      "bp": "73/188",
      "platelet": "422955 mm3",
      "HB": "16 G/DL",
      "MCHC": "36 %",
      "TC": "3610 mm3",
      "DCP": "40 %",
      "AEC": "367 /mm3",
      "TRBC": "3.61 millions/mm3%",
      "HCT": "49 fl",
      "MCV": "80 %",
      "MCH": "30 pg",
      "disease": [
        "allergies",
        "Hepatitis",
        "fever"
      ]
    },
    "joinedDate": "2023-01-07T11:05:00.420Z",
    "currentComplaint": {
      "appointmentDate": "2023-08-26T13:30:32.615Z",
      "status": "declined",
      "weight": 64,
      "height": 164,
      "bp": "65/160",
      "platelet": "386834 mm3",
      "HB": "14 G/DL",
      "MCHC": "36 %",
      "TC": "7991 mm3",
      "DCP": "38 %",
      "AEC": "221 /mm3",
      "TRBC": "4.15 millions/mm3%",
      "HCT": "47 fl",
      "MCV": "83 %",
      "MCH": "31 pg",
      "concern": [
        "fever",
        "allergies",
        "BP"
      ]
    }
  },
  {
    "id": "64e8acf8ac687ad4106b35ac",
    "email": "kristin@gmail.com",
    "username": "kristin050392",
    "profile": {
      "firstname": "Kristin",
      "lastname": " Sutton",
      "dob": "1992-03-05",
      "address": "89 Hubbard Street, Catharine, Arkansas",
      "about": "Velit officia culpa ullamco aliquip. Aliquip tempor consectetur ex excepteur excepteur labore consequat aliquip aute deserunt ea.",
      "gender": "female",
      "mobile": "+91 10000000000",
      "pic": "/9.png"
    },
    "roles": "new patient",
    "health": {
      "lastVisit": "2023-07-25T13:30:32.615Z",
      "weight": 73,
      "height": 161,
      "bp": "63/158",
      "platelet": "136325 mm3",
      "HB": "16 G/DL",
      "MCHC": "33 %",
      "TC": "6032 mm3",
      "DCP": "64 %",
      "AEC": "276 /mm3",
      "TRBC": "4.17 millions/mm3%",
      "HCT": "41 fl",
      "MCV": "80 %",
      "MCH": "32 pg",
      "disease": [
        "cold",
        "cough",
        "allergies"
      ]
    },
    "joinedDate": "2023-07-15T12:29:44.791Z",
    "currentComplaint": {
      "appointmentDate": "2023-08-26T13:30:32.615Z",
      "status": "conformed",
      "weight": 65,
      "height": 183,
      "bp": "69/168",
      "platelet": "143984 mm3",
      "HB": "15 G/DL",
      "MCHC": "32 %",
      "TC": "5779 mm3",
      "DCP": "77 %",
      "AEC": "309 /mm3",
      "TRBC": "3.25 millions/mm3%",
      "HCT": "44 fl",
      "MCV": "81 %",
      "MCH": "30 pg",
      "concern": [
        "BP",
        "cough",
        "cold"
      ]
    }
  },
  {
    "id": "64e8acf83c3034188b17cbf8",
    "email": "paulette@gmail.com",
    "username": "paulette120190",
    "profile": {
      "firstname": "Paulette",
      "lastname": " Davidson",
      "dob": "1990-01-12",
      "address": "9 Blake Avenue, Mappsville, Georgia",
      "about": "Esse ipsum do anim est ullamco tempor tempor eu laborum cupidatat. Est irure duis aute duis minim id et enim commodo culpa aliqua excepteur nisi cillum.",
      "gender": "male",
      "mobile": "+91 10000000000",
      "pic": "/10.png"
    },
    "roles": "new patient",
    "health": {
      "lastVisit": "2023-07-25T13:30:32.616Z",
      "weight": 53,
      "height": 158,
      "bp": "80/167",
      "platelet": "224707 mm3",
      "HB": "16 G/DL",
      "MCHC": "34 %",
      "TC": "9870 mm3",
      "DCP": "52 %",
      "AEC": "349 /mm3",
      "TRBC": "4.14 millions/mm3%",
      "HCT": "41 fl",
      "MCV": "86 %",
      "MCH": "30 pg",
      "disease": [
        "diabites",
        "BP",
        "Hepatitis",
        "Hepatitis"
      ]
    },
    "joinedDate": "2023-07-01T23:38:30.403Z",
    "currentComplaint": {
      "appointmentDate": "2023-08-26T13:30:32.616Z",
      "status": "inprogress",
      "weight": 50,
      "height": 172,
      "bp": "74/180",
      "platelet": "287067 mm3",
      "HB": "18 G/DL",
      "MCHC": "33 %",
      "TC": "4325 mm3",
      "DCP": "43 %",
      "AEC": "486 /mm3",
      "TRBC": "4.04 millions/mm3%",
      "HCT": "45 fl",
      "MCV": "91 %",
      "MCH": "27 pg",
      "concern": [
        "cough",
        "fever",
        "allergies"
      ]
    }
  },
  {
    "id": "64e8acf8807b60d5c08c6e1c",
    "email": "juliet@gmail.com",
    "username": "juliet210992",
    "profile": {
      "firstname": "Juliet",
      "lastname": " Campos",
      "dob": "1992-09-21",
      "address": "26 Woodrow Court, Greer, Ohio",
      "about": "Irure cillum sit pariatur anim minim est do. Voluptate labore eu incididunt occaecat quis mollit tempor pariatur qui id.",
      "gender": "male",
      "mobile": "+91 10000000000",
      "pic": "/11.png"
    },
    "roles": "new patient",
    "health": {
      "lastVisit": "2023-07-25T13:30:32.616Z",
      "weight": 87,
      "height": 164,
      "bp": "68/158",
      "platelet": "130148 mm3",
      "HB": "18 G/DL",
      "MCHC": "35 %",
      "TC": "4093 mm3",
      "DCP": "59 %",
      "AEC": "117 /mm3",
      "TRBC": "4.69 millions/mm3%",
      "HCT": "43 fl",
      "MCV": "86 %",
      "MCH": "30 pg",
      "disease": [
        "BP",
        "diabites",
        "head ache"
      ]
    },
    "joinedDate": "2023-05-01T21:57:04.679Z",
    "currentComplaint": {
      "appointmentDate": "2023-08-26T13:30:32.616Z",
      "status": "inprogress",
      "weight": 77,
      "height": 189,
      "bp": "78/121",
      "platelet": "239568 mm3",
      "HB": "14 G/DL",
      "MCHC": "36 %",
      "TC": "6979 mm3",
      "DCP": "58 %",
      "AEC": "448 /mm3",
      "TRBC": "4.52 millions/mm3%",
      "HCT": "40 fl",
      "MCV": "85 %",
      "MCH": "32 pg",
      "concern": [
        "diabites",
        "BP",
        "tumor",
        "cold"
      ]
    }
  },
  {
    "id": "64e8acf87c4c9f877ffe13a5",
    "email": "hatfield@gmail.com",
    "username": "hatfield100489",
    "profile": {
      "firstname": "Hatfield",
      "lastname": " Moreno",
      "dob": "1989-04-10",
      "address": "68 Juliana Place, Wawona, Puerto Rico",
      "about": "Eu dolore proident elit sunt ut quis tempor et ea. Ipsum amet occaecat deserunt sunt sint.",
      "gender": "male",
      "mobile": "+91 10000000000",
      "pic": "/12.png"
    },
    "roles": "old patient",
    "health": {
      "lastVisit": "2023-07-25T13:30:32.616Z",
      "weight": 87,
      "height": 151,
      "bp": "67/134",
      "platelet": "155277 mm3",
      "HB": "15 G/DL",
      "MCHC": "35 %",
      "TC": "7389 mm3",
      "DCP": "68 %",
      "AEC": "471 /mm3",
      "TRBC": "4.61 millions/mm3%",
      "HCT": "45 fl",
      "MCV": "81 %",
      "MCH": "31 pg",
      "disease": [
        "BP",
        "Hepatitis",
        "allergies",
        "cold"
      ]
    },
    "joinedDate": "2023-07-06T13:31:40.440Z",
    "currentComplaint": {
      "appointmentDate": "2023-08-26T13:30:32.616Z",
      "status": "conformed",
      "weight": 74,
      "height": 185,
      "bp": "62/188",
      "platelet": "162438 mm3",
      "HB": "14 G/DL",
      "MCHC": "34 %",
      "TC": "10211 mm3",
      "DCP": "48 %",
      "AEC": "279 /mm3",
      "TRBC": "4.16 millions/mm3%",
      "HCT": "47 fl",
      "MCV": "85 %",
      "MCH": "27 pg",
      "concern": [
        "allergies",
        "Hepatitis",
        "fever"
      ]
    }
  },
  {
    "id": "64e8acf8a0a47b848055b714",
    "email": "chelsea@gmail.com",
    "username": "chelsea060192",
    "profile": {
      "firstname": "Chelsea",
      "lastname": " Brock",
      "dob": "1992-01-06",
      "address": "5 Linwood Street, Marshall, Wyoming",
      "about": "Cillum ad consequat occaecat eu nostrud et ex labore qui in ut. Deserunt magna cupidatat ad aliqua irure consectetur reprehenderit.",
      "gender": "male",
      "mobile": "+91 10000000000",
      "pic": "/13.png"
    },
    "roles": "new patient",
    "health": {
      "lastVisit": "2023-07-25T13:30:32.616Z",
      "weight": 85,
      "height": 173,
      "bp": "62/128",
      "platelet": "252880 mm3",
      "HB": "16 G/DL",
      "MCHC": "35 %",
      "TC": "9435 mm3",
      "DCP": "43 %",
      "AEC": "388 /mm3",
      "TRBC": "3.75 millions/mm3%",
      "HCT": "41 fl",
      "MCV": "89 %",
      "MCH": "31 pg",
      "disease": [
        "cough",
        "cough",
        "Hepatitis",
        "BP"
      ]
    },
    "joinedDate": "2023-04-05T01:52:59.586Z",
    "currentComplaint": {
      "appointmentDate": "2023-08-26T13:30:32.616Z",
      "status": "inprogress",
      "weight": 88,
      "height": 179,
      "bp": "71/143",
      "platelet": "358880 mm3",
      "HB": "13 G/DL",
      "MCHC": "35 %",
      "TC": "7016 mm3",
      "DCP": "40 %",
      "AEC": "325 /mm3",
      "TRBC": "5.24 millions/mm3%",
      "HCT": "44 fl",
      "MCV": "90 %",
      "MCH": "30 pg",
      "concern": [
        "diabites",
        "tumor",
        "cold"
      ]
    }
  },
  {
    "id": "64e8acf8a4818e3337eccfe3",
    "email": "dotson@gmail.com",
    "username": "dotson050290",
    "profile": {
      "firstname": "Dotson",
      "lastname": " Mckenzie",
      "dob": "1990-02-05",
      "address": "19 Conselyea Street, Calvary, Missouri",
      "about": "Mollit ut ipsum culpa veniam in aliqua. Occaecat do et dolor incididunt.",
      "gender": "female",
      "mobile": "+91 10000000000",
      "pic": "/14.png"
    },
    "roles": "new patient",
    "health": {
      "lastVisit": "2023-07-25T13:30:32.616Z",
      "weight": 86,
      "height": 154,
      "bp": "60/180",
      "platelet": "353165 mm3",
      "HB": "14 G/DL",
      "MCHC": "32 %",
      "TC": "6946 mm3",
      "DCP": "42 %",
      "AEC": "383 /mm3",
      "TRBC": "4.97 millions/mm3%",
      "HCT": "47 fl",
      "MCV": "82 %",
      "MCH": "30 pg",
      "disease": [
        "fever",
        "BP",
        "cold"
      ]
    },
    "joinedDate": "2023-07-20T02:09:27.704Z",
    "currentComplaint": {
      "appointmentDate": "2023-08-26T13:30:32.616Z",
      "status": "declined",
      "weight": 62,
      "height": 175,
      "bp": "76/180",
      "platelet": "343377 mm3",
      "HB": "14 G/DL",
      "MCHC": "33 %",
      "TC": "9865 mm3",
      "DCP": "65 %",
      "AEC": "237 /mm3",
      "TRBC": "3.85 millions/mm3%",
      "HCT": "42 fl",
      "MCV": "84 %",
      "MCH": "27 pg",
      "concern": [
        "cough",
        "tumor",
        "fever"
      ]
    }
  },
  {
    "id": "64e8acf8cba609bf3a681404",
    "email": "moreno@gmail.com",
    "username": "moreno081088",
    "profile": {
      "firstname": "Moreno",
      "lastname": " Chambers",
      "dob": "1988-10-08",
      "address": "60 Gilmore Court, Cedarville, Connecticut",
      "about": "Sint aliquip veniam dolore et sunt tempor excepteur deserunt. Aute dolore cupidatat veniam esse in velit id tempor nisi esse nulla occaecat cupidatat.",
      "gender": "female",
      "mobile": "+91 10000000000",
      "pic": "/15.png"
    },
    "roles": "new patient",
    "health": {
      "lastVisit": "2023-07-25T13:30:32.616Z",
      "weight": 53,
      "height": 174,
      "bp": "77/185",
      "platelet": "309762 mm3",
      "HB": "14 G/DL",
      "MCHC": "33 %",
      "TC": "9447 mm3",
      "DCP": "45 %",
      "AEC": "116 /mm3",
      "TRBC": "3.22 millions/mm3%",
      "HCT": "43 fl",
      "MCV": "86 %",
      "MCH": "27 pg",
      "disease": [
        "fever",
        "cough",
        "fever",
        "diabites"
      ]
    },
    "joinedDate": "2023-04-15T04:41:32.197Z",
    "currentComplaint": {
      "appointmentDate": "2023-08-26T13:30:32.616Z",
      "status": "inprogress",
      "weight": 59,
      "height": 174,
      "bp": "73/180",
      "platelet": "157905 mm3",
      "HB": "17 G/DL",
      "MCHC": "32 %",
      "TC": "6499 mm3",
      "DCP": "55 %",
      "AEC": "1 /mm3",
      "TRBC": "4.62 millions/mm3%",
      "HCT": "40 fl",
      "MCV": "83 %",
      "MCH": "29 pg",
      "concern": [
        "BP",
        "cough"
      ]
    }
  },
  {
    "id": "64e8acf8d20ed5b78ade17e9",
    "email": "willie@gmail.com",
    "username": "willie091089",
    "profile": {
      "firstname": "Willie",
      "lastname": " Gill",
      "dob": "1989-10-09",
      "address": "47 Clove Road, Sylvanite, Nevada",
      "about": "Fugiat irure dolor eu tempor voluptate commodo velit amet consectetur velit irure labore ipsum. Ut duis ad quis eiusmod.",
      "gender": "male",
      "mobile": "+91 10000000000",
      "pic": "/16.png"
    },
    "roles": "old patient",
    "health": {
      "lastVisit": "2023-07-25T13:30:32.616Z",
      "weight": 67,
      "height": 159,
      "bp": "68/112",
      "platelet": "360338 mm3",
      "HB": "13 G/DL",
      "MCHC": "33 %",
      "TC": "4970 mm3",
      "DCP": "64 %",
      "AEC": "373 /mm3",
      "TRBC": "3.43 millions/mm3%",
      "HCT": "40 fl",
      "MCV": "84 %",
      "MCH": "29 pg",
      "disease": [
        "head ache",
        "Hepatitis",
        "BP",
        "cold"
      ]
    },
    "joinedDate": "2023-07-08T17:57:25.418Z",
    "currentComplaint": {
      "appointmentDate": "2023-08-26T13:30:32.616Z",
      "status": "declined",
      "weight": 51,
      "height": 174,
      "bp": "63/126",
      "platelet": "272303 mm3",
      "HB": "13 G/DL",
      "MCHC": "34 %",
      "TC": "5534 mm3",
      "DCP": "41 %",
      "AEC": "138 /mm3",
      "TRBC": "4.38 millions/mm3%",
      "HCT": "44 fl",
      "MCV": "83 %",
      "MCH": "27 pg",
      "concern": [
        "diabites",
        "cough"
      ]
    }
  },
  {
    "id": "64e8acf82ddfc4d6e68f2cb2",
    "email": "burris@gmail.com",
    "username": "burris260188",
    "profile": {
      "firstname": "Burris",
      "lastname": " Best",
      "dob": "1988-01-26",
      "address": "53 Whitty Lane, Cuylerville, Vermont",
      "about": "Do officia ut in sint ut tempor in. Labore quis tempor nulla reprehenderit exercitation officia incididunt tempor.",
      "gender": "female",
      "mobile": "+91 10000000000",
      "pic": "/17.png"
    },
    "roles": "old patient",
    "health": {
      "lastVisit": "2023-07-25T13:30:32.616Z",
      "weight": 87,
      "height": 190,
      "bp": "73/180",
      "platelet": "326137 mm3",
      "HB": "15 G/DL",
      "MCHC": "35 %",
      "TC": "10006 mm3",
      "DCP": "58 %",
      "AEC": "356 /mm3",
      "TRBC": "4.35 millions/mm3%",
      "HCT": "49 fl",
      "MCV": "87 %",
      "MCH": "29 pg",
      "disease": [
        "BP",
        "allergies",
        "cough",
        "cold"
      ]
    },
    "joinedDate": "2023-05-12T11:12:42.808Z",
    "currentComplaint": {
      "appointmentDate": "2023-08-26T13:30:32.617Z",
      "status": "declined",
      "weight": 63,
      "height": 189,
      "bp": "61/176",
      "platelet": "400141 mm3",
      "HB": "18 G/DL",
      "MCHC": "34 %",
      "TC": "10250 mm3",
      "DCP": "58 %",
      "AEC": "498 /mm3",
      "TRBC": "3.61 millions/mm3%",
      "HCT": "45 fl",
      "MCV": "84 %",
      "MCH": "32 pg",
      "concern": [
        "tumor",
        "fever",
        "cough"
      ]
    }
  },
  {
    "id": "64e8acf807afcfc0b332b554",
    "email": "marina@gmail.com",
    "username": "marina180292",
    "profile": {
      "firstname": "Marina",
      "lastname": " Greene",
      "dob": "1992-02-18",
      "address": "65 Lester Court, Unionville, Virgin Islands",
      "about": "Adipisicing labore non minim aliqua velit non eiusmod laboris sunt esse sint ad. Sint labore quis esse dolor laboris aliqua officia Lorem mollit.",
      "gender": "male",
      "mobile": "+91 10000000000",
      "pic": "/18.png"
    },
    "roles": "new patient",
    "health": {
      "lastVisit": "2023-07-25T13:30:32.617Z",
      "weight": 65,
      "height": 153,
      "bp": "77/169",
      "platelet": "128456 mm3",
      "HB": "16 G/DL",
      "MCHC": "32 %",
      "TC": "5452 mm3",
      "DCP": "63 %",
      "AEC": "263 /mm3",
      "TRBC": "4.71 millions/mm3%",
      "HCT": "50 fl",
      "MCV": "88 %",
      "MCH": "32 pg",
      "disease": [
        "diabites",
        "cold",
        "cold",
        "allergies"
      ]
    },
    "joinedDate": "2023-03-10T01:00:46.235Z",
    "currentComplaint": {
      "appointmentDate": "2023-08-26T13:30:32.617Z",
      "status": "inprogress",
      "weight": 56,
      "height": 158,
      "bp": "65/171",
      "platelet": "186321 mm3",
      "HB": "17 G/DL",
      "MCHC": "34 %",
      "TC": "7945 mm3",
      "DCP": "71 %",
      "AEC": "179 /mm3",
      "TRBC": "4.32 millions/mm3%",
      "HCT": "50 fl",
      "MCV": "88 %",
      "MCH": "30 pg",
      "concern": [
        "BP",
        "tumor"
      ]
    }
  },
  {
    "id": "64e8acf83259c5b6c3d18bf5",
    "email": "mabel@gmail.com",
    "username": "mabel230792",
    "profile": {
      "firstname": "Mabel",
      "lastname": " Holmes",
      "dob": "1992-07-23",
      "address": "46 Bassett Avenue, Disautel, Utah",
      "about": "Et in esse tempor voluptate sint nostrud elit dolore qui. Ad esse enim eu quis nulla dolor voluptate ipsum laborum ad magna adipisicing nostrud proident.",
      "gender": "female",
      "mobile": "+91 10000000000",
      "pic": "/19.png"
    },
    "roles": "old patient",
    "health": {
      "lastVisit": "2023-07-25T13:30:32.617Z",
      "weight": 81,
      "height": 153,
      "bp": "60/184",
      "platelet": "386023 mm3",
      "HB": "13 G/DL",
      "MCHC": "36 %",
      "TC": "5826 mm3",
      "DCP": "66 %",
      "AEC": "264 /mm3",
      "TRBC": "3.78 millions/mm3%",
      "HCT": "48 fl",
      "MCV": "82 %",
      "MCH": "30 pg",
      "disease": [
        "diabites",
        "BP",
        "cough",
        "head ache"
      ]
    },
    "joinedDate": "2023-01-08T03:05:02.581Z",
    "currentComplaint": {
      "appointmentDate": "2023-08-26T13:30:32.617Z",
      "status": "inprogress",
      "weight": 57,
      "height": 155,
      "bp": "75/137",
      "platelet": "201269 mm3",
      "HB": "18 G/DL",
      "MCHC": "36 %",
      "TC": "9346 mm3",
      "DCP": "67 %",
      "AEC": "170 /mm3",
      "TRBC": "4.43 millions/mm3%",
      "HCT": "46 fl",
      "MCV": "86 %",
      "MCH": "30 pg",
      "concern": [
        "fever",
        "Hepatitis"
      ]
    }
  },
  {
    "id": "64e8acf8792546a85d5bf849",
    "email": "byers@gmail.com",
    "username": "byers140394",
    "profile": {
      "firstname": "Byers",
      "lastname": " Graham",
      "dob": "1994-03-14",
      "address": "90 Fleet Street, Harold, Federated States Of Micronesia",
      "about": "Anim sint aute magna ut commodo fugiat quis. Consequat labore consectetur laborum ea officia laboris in dolore exercitation nulla proident nisi.",
      "gender": "male",
      "mobile": "+91 10000000000",
      "pic": "/20.png"
    },
    "roles": "new patient",
    "health": {
      "lastVisit": "2023-07-25T13:30:32.617Z",
      "weight": 51,
      "height": 190,
      "bp": "71/126",
      "platelet": "216305 mm3",
      "HB": "17 G/DL",
      "MCHC": "33 %",
      "TC": "7098 mm3",
      "DCP": "44 %",
      "AEC": "448 /mm3",
      "TRBC": "5.02 millions/mm3%",
      "HCT": "41 fl",
      "MCV": "84 %",
      "MCH": "32 pg",
      "disease": [
        "cold",
        "Hepatitis",
        "allergies",
        "Hepatitis"
      ]
    },
    "joinedDate": "2023-07-20T02:45:48.596Z",
    "currentComplaint": {
      "appointmentDate": "2023-08-26T13:30:32.617Z",
      "status": "declined",
      "weight": 89,
      "height": 162,
      "bp": "67/165",
      "platelet": "405378 mm3",
      "HB": "18 G/DL",
      "MCHC": "32 %",
      "TC": "6206 mm3",
      "DCP": "46 %",
      "AEC": "509 /mm3",
      "TRBC": "4.31 millions/mm3%",
      "HCT": "46 fl",
      "MCV": "92 %",
      "MCH": "28 pg",
      "concern": [
        "fever",
        "cold",
        "tumor"
      ]
    }
  }
]

export {
  cards,patients
}