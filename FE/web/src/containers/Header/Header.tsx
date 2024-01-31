import classes from "./Header.module.scss"
import React from "react";
import {Avatar} from "@nextui-org/react";
// import {MyInput} from "./MyInput"

import { NavbarMenu, NavbarMenuItem, NavbarMenuToggle, NextUIProvider } from "@nextui-org/react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import getAsset from "../../utils/getAsset";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Analytics",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  // const profileColor = [
  //   "default",
  //   "bronze",
  //   "silver",
  //   "gold",
  //   "platinum",
  //   "diamond",
  //   "master"
  // ]

  return (
    <NextUIProvider>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link href="#">
            <img className={classes.img} src={getAsset('logo/icon_circle.svg')} alt="algo_logo_dark" />
            <img src={getAsset('logo/logo_light.svg')} alt="algo_logo_light"/>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              제출코드
            </Link>
          </NavbarItem>
          
          <NavbarItem>
            <Link color="foreground" href="#">
              커뮤니티
            </Link>
          </NavbarItem>
          
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              유저검색
              <img src={getAsset('search_icon.svg')} className="text-zinc-500" />
            </Link>
          </NavbarItem>
          
          {/* design B */}
            {/* <MyInput
              isClearable
              placeholder="Search..."
              radius="md"
              size="md"
              startContent={<img src={getAsset('search_icon.svg')} className="text-zinc-500" />}
            /> */}

        </NavbarContent>
        
        <NavbarContent justify="end">
          {/* <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem> */}

          <NavbarItem>    
            {/* 프로필 페이지 - 티어에 따라서 프로필 테두리 색 다르게 주기 (예정) */}
            <div className="flex gap-4 items-center">
              <Link href="#">
              <Avatar isBordered color="default" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
              {/* <Avatar isBordered color="bronze" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" /> */}
              {/* <Avatar isBordered color="#C0C0C0" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
              <Avatar isBordered color="#FFBF00 " src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              <Avatar isBordered color="#02B7AE " src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
              <Avatar isBordered color="#00FFFF " src="https://i.pravatar.cc/150?u=a04258114e29026702d" /> */}
              </Link>
            </div>
          </NavbarItem>
        </NavbarContent>
        
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </NextUIProvider>
  )
}

export default Header
