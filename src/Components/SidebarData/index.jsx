import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList
}from "react-icons/fa";

export const Links =[
  {name:"HOME",link:"/"},
  {name:"SERVICE",link:"/"},
  {name:"ABOUT",link:"/"},
  {name:"BLOG'S",link:"/"},
  {name:"CONTACT",link:"/"},
];

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard-admin',
    // icon: <AiIcons.AiFillAppstore />,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='fill-primary-blue' xmlns="http://www.w3.org/2000/svg">
          <path d="M9.06802 3.22803C7.70453 3.07564 6.29549 3.07564 4.932 3.22803C4.05481 3.32607 3.34551 4.01682 3.24207 4.90126C3.07898 6.29568 3.07898 7.70435 3.24207 9.09877C3.34551 9.9832 4.05481 10.674 4.932 10.772C6.29549 10.9244 7.70453 10.9244 9.06802 10.772C9.9452 10.674 10.6545 9.9832 10.7579 9.09877C10.921 7.70435 10.921 6.29568 10.7579 4.90126C10.6545 4.01682 9.9452 3.32607 9.06802 3.22803Z"/>
          <path d="M9.06802 13.228C7.70453 13.0756 6.29549 13.0756 4.932 13.228C4.05481 13.3261 3.34551 14.0168 3.24207 14.9013C3.07898 16.2957 3.07898 17.7043 3.24207 19.0988C3.34551 19.9832 4.05481 20.674 4.932 20.772C6.29549 20.9244 7.70453 20.9244 9.06802 20.772C9.9452 20.674 10.6545 19.9832 10.7579 19.0988C10.921 17.7043 10.921 16.2957 10.7579 14.9013C10.6545 14.0168 9.9452 13.3261 9.06802 13.228Z"/>
          <path d="M19.068 3.22803C17.7045 3.07564 16.2955 3.07564 14.932 3.22803C14.0548 3.32607 13.3455 4.01682 13.2421 4.90126C13.079 6.29568 13.079 7.70435 13.2421 9.09877C13.3455 9.9832 14.0548 10.674 14.932 10.772C16.2955 10.9244 17.7045 10.9244 19.068 10.772C19.9452 10.674 20.6545 9.9832 20.758 9.09877C20.9211 7.70435 20.9211 6.29568 20.758 4.90126C20.6545 4.01682 19.9452 3.32607 19.068 3.22803Z"/>
          <path d="M19.068 13.228C17.7045 13.0756 16.2955 13.0756 14.932 13.228C14.0548 13.3261 13.3455 14.0168 13.2421 14.9013C13.079 16.2957 13.079 17.7043 13.2421 19.0988C13.3455 19.9832 14.0548 20.674 14.932 20.772C16.2955 20.9244 17.7045 20.9244 19.068 20.772C19.9452 20.674 20.6545 19.9832 20.758 19.0988C20.9211 17.7043 20.9211 16.2957 20.758 14.9013C20.6545 14.0168 19.9452 13.3261 19.068 13.228Z" />
          </svg>,
    cName: 'nav-text',
  },
  {
    title: 'Complex',
    path: '/complex',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='fill-primary-blue' xmlns="http://www.w3.org/2000/svg">
          <path d="M20.6667 5.33337H14.6667V22H22.0001V6.66671C22.0001 6.31309 21.8596 5.97395 21.6096 5.7239C21.3595 5.47385 21.0204 5.33337 20.6667 5.33337ZM17.3334 16.6667H16.0001V15.3334H17.3334V16.6667ZM17.3334 13.3334H16.0001V12H17.3334V13.3334ZM17.3334 10H16.0001V8.66671H17.3334V10ZM20.0001 16.6667H18.6667V15.3334H20.0001V16.6667ZM20.0001 13.3334H18.6667V12H20.0001V13.3334ZM20.0001 10H18.6667V8.66671H20.0001V10Z"/>
          <path d="M11.9201 2H4.08008C3.70524 2 3.34576 2.1489 3.0807 2.41396C2.81565 2.67901 2.66675 3.03849 2.66675 3.41333V22H6.00008V20H10.0001V22H13.3334V3.41333C13.3334 3.03849 13.1845 2.67901 12.9195 2.41396C12.6544 2.1489 12.2949 2 11.9201 2ZM6.00008 16.6667H4.66675V15.3333H6.00008V16.6667ZM6.00008 13.3333H4.66675V12H6.00008V13.3333ZM6.00008 10H4.66675V8.66667H6.00008V10ZM6.00008 6.66667H4.66675V5.33333H6.00008V6.66667ZM8.66675 16.6667H7.33342V15.3333H8.66675V16.6667ZM8.66675 13.3333H7.33342V12H8.66675V13.3333ZM8.66675 10H7.33342V8.66667H8.66675V10ZM8.66675 6.66667H7.33342V5.33333H8.66675V6.66667ZM11.3334 16.6667H10.0001V15.3333H11.3334V16.6667ZM11.3334 13.3333H10.0001V12H11.3334V13.3333ZM11.3334 10H10.0001V8.66667H11.3334V10ZM11.3334 6.66667H10.0001V5.33333H11.3334V6.66667Z"/>
          </svg>
    ,
    cName: 'nav-text',
  },
  {
    title: 'Room',
    path: '/room',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='fill-primary-blue' xmlns="http://www.w3.org/2000/svg">
          <path d="M7.002 3C6.34767 2.99982 5.71123 3.21356 5.18966 3.60867C4.66809 4.00377 4.29 4.55857 4.113 5.1885L3.4605 7.5105C3.555 7.5045 3.654 7.5 3.75 7.5H6.75C7.24271 7.49961 7.73067 7.59631 8.18598 7.78459C8.6413 7.97287 9.05505 8.24903 9.40359 8.59729C9.75213 8.94555 10.0286 9.35908 10.2173 9.81424C10.4059 10.2694 10.503 10.7573 10.503 11.25V18H19.3755C19.8574 18.0001 20.3328 17.8887 20.7644 17.6743C21.1959 17.4599 21.572 17.1485 21.8631 16.7645C22.1541 16.3804 22.3523 15.9342 22.442 15.4607C22.5316 14.9872 22.5104 14.4994 22.38 14.0355L19.89 5.1885C19.7132 4.55931 19.3358 4.00506 18.8151 3.61003C18.2945 3.215 17.6591 3.0008 17.0055 3H7.002ZM10.4295 21C10.4795 20.7531 10.5047 20.5019 10.5045 20.25V19.5H17.2545C17.4534 19.5 17.6442 19.579 17.7848 19.7197C17.9255 19.8603 18.0045 20.0511 18.0045 20.25C18.0045 20.4489 17.9255 20.6397 17.7848 20.7803C17.6442 20.921 17.4534 21 17.2545 21H10.4295ZM5.25 14.25C5.54837 14.25 5.83452 14.1315 6.0455 13.9205C6.25647 13.7095 6.375 13.4234 6.375 13.125C6.375 12.8266 6.25647 12.5405 6.0455 12.3295C5.83452 12.1185 5.54837 12 5.25 12C4.95163 12 4.66548 12.1185 4.4545 12.3295C4.24353 12.5405 4.125 12.8266 4.125 13.125C4.125 13.4234 4.24353 13.7095 4.4545 13.9205C4.66548 14.1315 4.95163 14.25 5.25 14.25ZM1.5 11.25C1.5 10.6533 1.73705 10.081 2.15901 9.65901C2.58097 9.23705 3.15326 9 3.75 9H6.7515C7.34824 9 7.92053 9.23705 8.34249 9.65901C8.76445 10.081 9.0015 10.6533 9.0015 11.25V20.25C9.0015 20.8467 8.76445 21.419 8.34249 21.841C7.92053 22.2629 7.34824 22.5 6.7515 22.5H3.7515C3.4559 22.5002 3.16316 22.4421 2.89 22.3292C2.61685 22.2162 2.36863 22.0505 2.15954 21.8415C1.95045 21.6326 1.78458 21.3845 1.67141 21.1114C1.55825 20.8383 1.5 20.5456 1.5 20.25V11.25ZM3.75 10.5C3.55109 10.5 3.36032 10.579 3.21967 10.7197C3.07902 10.8603 3 11.0511 3 11.25V20.25C3 20.4489 3.07902 20.6397 3.21967 20.7803C3.36032 20.921 3.55109 21 3.75 21H6.7515C6.95041 21 7.14118 20.921 7.28183 20.7803C7.42248 20.6397 7.5015 20.4489 7.5015 20.25V11.25C7.5015 11.0511 7.42248 10.8603 7.28183 10.7197C7.14118 10.579 6.95041 10.5 6.7515 10.5H3.7515H3.75Z"/>
          </svg>
    ,
    cName: 'nav-text',
  },
  {
    title: 'Booking',
    path: '/booking',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='fill-primary-blue' xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 5C8.25 3.48122 9.48122 2.25 11 2.25H13C14.5188 2.25 15.75 3.48122 15.75 5V7C15.75 7.41421 15.4142 7.75 15 7.75H9C8.58579 7.75 8.25 7.41421 8.25 7V5ZM11 3.75C10.3096 3.75 9.75 4.30964 9.75 5V6.25H14.25V5C14.25 4.30964 13.6904 3.75 13 3.75H11Z"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.48693 4.92877C6.61335 4.86816 6.75371 4.96463 6.75346 5.10483L6.75 7.00001C6.75 8.24265 7.75736 9.25001 9 9.25001H15C16.2426 9.25001 17.25 8.24265 17.25 7.00001V5.10426C17.25 4.96422 17.3903 4.868 17.5165 4.92855C18.7016 5.49669 19.5 6.70679 19.5 8.08546V18.5749C19.5 20.2857 18.2257 21.7285 16.528 21.9399C13.521 22.3144 10.479 22.3144 7.47197 21.9399C5.77431 21.7285 4.5 20.2857 4.5 18.5749V8.08545C4.5 6.70697 5.30161 5.49701 6.48693 4.92877ZM15 12C15.4142 12 15.75 12.3358 15.75 12.75C15.75 13.1642 15.4142 13.5 15 13.5H9C8.58579 13.5 8.25 13.1642 8.25 12.75C8.25 12.3358 8.58579 12 9 12H15ZM14 15C14.4142 15 14.75 15.3358 14.75 15.75C14.75 16.1642 14.4142 16.5 14 16.5H9C8.58579 16.5 8.25 16.1642 8.25 15.75C8.25 15.3358 8.58579 15 9 15H14Z"/>
          </svg>
    ,
    cName: 'nav-text',
  },
  {
    title: 'Chat',
    path: '/chat',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='fill-primary-blue' xmlns="http://www.w3.org/2000/svg">
          <path d="M7.28924 4.90761C10.4239 4.63513 13.5763 4.63512 16.7109 4.90761L18.2211 5.03889C19.2265 5.12629 20.0876 5.72596 20.5337 6.58374C20.5908 6.69347 20.548 6.82633 20.4428 6.89144L14.1769 10.7704C12.833 11.6023 11.1385 11.6197 9.77778 10.8157L3.46995 7.08833C3.36804 7.02811 3.32126 6.90415 3.36719 6.79505C3.77535 5.82548 4.69298 5.1333 5.77901 5.0389L7.28924 4.90761Z"/>
          <path d="M3.36206 8.76688C3.20609 8.67472 3.00709 8.7739 2.98891 8.95414C2.73518 11.4698 2.79659 14.0092 3.17314 16.5133C3.37166 17.8334 4.44907 18.8455 5.77901 18.9611L7.28924 19.0924C10.4239 19.3649 13.5763 19.3649 16.7109 19.0924L18.2211 18.9611C19.5511 18.8455 20.6285 17.8334 20.827 16.5133C21.2145 13.9363 21.2683 11.3217 20.9882 8.73428C20.9686 8.55276 20.7662 8.45541 20.611 8.55151L14.9664 12.0458C13.1482 13.1713 10.8557 13.1949 9.01468 12.1071L3.36206 8.76688Z"/>
          </svg>
    ,
    cName: 'nav-text',
  },
];

export const Menus = [
  { title: "Dashboard", src: "Chart_fill" },
  { title: "Inbox", src: "Chat" },
  { title: "Room", path:"/room" , src: "User", gap: true },
  { title: "Schedule ", src: "Calendar" },
  { title: "Search", src: "Search" },
  { title: "Analytics", src: "Chart" },
  { title: "Files ", src: "Folder", gap: true },
  { title: "Setting", src: "Setting" },
];

export const menuItem=[
  {
      path:"/",
      name:"Dashboard",
      icon:<FaTh/>
  },
  {
      path:"/about",
      name:"About",
      icon:<FaUserAlt/>
  },
  {
      path:"/room",
      name:"Room",
      icon:<FaRegChartBar/>
  },
  {
      path:"/comment",
      name:"Comment",
      icon:<FaCommentAlt/>
  },
  {
      path:"/product",
      name:"Product",
      icon:<FaShoppingBag/>
  },
  {
      path:"/productList",
      name:"Product List",
      icon:<FaThList/>
  }
];