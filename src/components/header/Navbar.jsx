import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../static/Logo.png";

import { useState } from "react";

import {
  GiBurningBook,
  GiHollowCat,
  GiSpikedDragonHead,
  GiFeather,
  GiBookmarklet,
  GiNewShoot,
  GiMailbox,
} from "react-icons/gi";
import { IoMdPeople } from "react-icons/io";
import { PiDogFill, PiFlowerLotusLight } from "react-icons/pi";
import { MdCamera, MdHomeRepairService } from "react-icons/md";

const menuData = [
  {
    name: "About Us",
    description: "Who we are and what we do",
    href: "/about-us",
    icon: GiBookmarklet,
    children: [
      {
        name: "Our Story",
        description: "How we got started",
        href: "/about-us/our-story",
        icon: GiBurningBook,
      },
      {
        name: "Our Family",
        description: "Meet the family",
        href: "/about-us/our-family",
        icon: IoMdPeople,
        children: [
          {
            name: "Benjamin Hodder-McDavid",
            description: "The founder",
            href: "/about-us/our-family/hodder-mcdavid",
            icon: PiDogFill,
          },
          {
            name: "Philip R. McDavid-Hodder",
            description: "The co-founder",
            href: "/about-us/our-family/mcdavid-hodder",
            icon: GiSpikedDragonHead,
          },
          {
            name: "Cleo",
            description: "The inspiration",
            href: "/about-us/our-family/cleo",
            icon: GiHollowCat,
          },
        ],
      },
    ],
  },
  {
    name: "Services",
    description: "What we offer",
    href: "/services",
    icon: MdHomeRepairService,
    children: [
      {
        name: "Floral Artistry",
        description: "Beautiful arrangements and displays",
        href: "/services/floral-artistry",
        icon: PiFlowerLotusLight,
        children: [
          {
            name: "Arrangements",
            description:
              "Perfect for celebrations, funerals, and spiritual events",
            href: "/services/floral-artistry/arrangements",
            children: [
              {
                name: "Celebrations",
                description: "Beautiful arrangements for celebrations",
                href: "/services/floral-artistry/arrangements/celebrations",
              },
              {
                name: "Funeral and Memorium",
                description: "Elegant arrangements for funerals and memoriums",
                href: "/services/floral-artistry/arrangements/funeral-and-memorium",
              },
              {
                name: "Spiritual",
                description: "Stunning arrangements for spiritual events",
                href: "/services/floral-artistry/arrangements/spiritual",
              },
            ],
          },
          {
            name: "Displays",
            description: "Stunning displays for spiritual events and shows",
            href: "/services/floral-artistry/displays",
            children: [
              {
                name: "Spiritual",
                description: "Beautiful displays for spiritual events",
                href: "/services/floral-artistry/displays/spiritual",
              },
              {
                name: "Shows",
                description: "Stunning displays for shows",
                href: "/services/floral-artistry/displays/shows",
              },
            ],
          },
        ],
      },
      {
        name: "Photography",
        description: "Beautiful images of our work",
        href: "/services/gallery",
        icon: MdCamera,
      },
    ],
  },
  {
    name: "Reviews",
    description: "What our customers say about us",
    href: "/reviews",
    icon: GiNewShoot,
  },
  {
    name: "Contact Us",
    description: "How to reach us",
    href: "/contact-us",
    icon: GiMailbox,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="container mx-auto px-4 py-6 flex flex-row items-center justify-between w-[100vw] h-[4rem] bg-gradient-to-b from-blue-duke-blue/20 to-green-sage/20 absolute top-8 left-52 rounded-b-lg rounded-t-xl text-geotica shadow-md">
      <Link href="/">
        <img
          src={Logo}
          alt="Frame of Light Designs logo"
          className="h-[7.5rem] w-auto relative z-10 object-contain cursor-pointer"
        />
      </Link>
      <nav className="container flex flex-row items-center justify-center flex-nowrap max-w-[50vw]">
        {menuData.map((item) => (
          <ul>
            <li key={item.name} className="relative">
              <Link
                key={item.name}
                to={item.href}
                className="text-blue-duke-blue hover:text-yellow-canary-yellow bg-transparent font-bold text-lg mx-4 cursor-pointer transition duration-300 ease-in-out transform hover:scale-125 hover:shadow-sm rounded-lg flex flex-row items-center justify-center flex-nowrap hover:bg-blue-duke-blue hover:p-2 gap-x-2 font-geotica"
              >
                <item.icon className="h-6 w-6" />
                {item.name}
              </Link>
            </li>
          </ul>
        ))}
      </nav>
      <div
        className="container flex flex-row items-center justify-center max-w-[10rem]"
        onClick={() => setOpen(!open)}
      >
        <div className="text-blue-duke-blue hover:text-yellow-canary-yellow bg-transparent font-bold text-xl mx-4 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-sm rounded-lg flex flex-row items-center justify-center hover:bg-blue-duke-blue hover:p-1 gap-x-2 font-geotica">
          <h2>Login</h2>
        </div>
        <span className="text-blue-duke-blue text-[1.5rem] font-semibold">
          /
        </span>
        <div className="text-blue-duke-blue hover:text-yellow-canary-yellow bg-transparent font-bold text-[.5rem] mx-4 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-sm rounded-lg flex flex-row items-center justify-center hover:bg-blue-duke-blue hover:p-1 gap-x-2 font-snell-roundhand">
          <h2>Request Account</h2>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
