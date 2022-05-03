import React from "react";
import CIcon from "@coreui/icons-react";
import { cilSpeedometer, cilStar, cilEnvelopeOpen } from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    component: CNavTitle,
    name: "CRUD using Redux",
  },
  {
    component: CNavGroup,
    name: "Redux Crud",
    icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "User Form",
        to: "/theme/createpost",
      },
      {
        component: CNavItem,
        name: "User Data",
        to: "/theme/post",
      },
    ],
  },
  {
    component: CNavTitle,
    name: "CRUD using Firebase",
  },
  {
    component: CNavGroup,
    name: "Firebase Crud",
    icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Firebase Add",
        to: "firebase/add",
      },
      {
        component: CNavItem,
        name: "Firebase Read",
        to: "firebase/read",
      },
    ],
  },

  {
    component: CNavTitle,
    name: "Extras",
  },
  {
    component: CNavGroup,
    name: "Pages",
    icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Login",
        to: "/login",
      },
      {
        component: CNavItem,
        name: "Register",
        to: "/register",
      },
      {
        component: CNavItem,
        name: "Error 404",
        to: "/404",
      },
      {
        component: CNavItem,
        name: "Error 500",
        to: "/500",
      },
    ],
  },
];

export default _nav;
