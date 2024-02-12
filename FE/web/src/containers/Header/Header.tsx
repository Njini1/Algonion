import classes from "./Header.module.scss"
import React from 'react';

import { Avatar } from "@nextui-org/react";
import { NavbarMenu, NavbarMenuItem, NavbarMenuToggle, NextUIProvider } from "@nextui-org/react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import getAsset from "../../utils/getAsset";
import SearchModal from "./searchModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "나의정보",
    "코드로그",
    "커뮤니티",
    "로그아웃",
    "회원탈퇴",
  ];

  // 로그아웃 처리
  const Logout = () => {
  
    fetch("/api/logout", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("로그아웃 성공!");
  
          localStorage.removeItem("access_token");
  
          window.location.href = "/";
        } else {
          console.log("로그아웃 실패!");
        }
      })
      .catch((err) => {
        console.log("로그아웃 API 호출 오류:", err);
      });
  }
  
  // 회원탈퇴 처리
  const Withdraw = () => {
  
    fetch("api/v1/user/withdraw", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("회원탈퇴 성공!");
          localStorage.removeItem("access_token");
          window.location.href = "/mainpage";
        } else {
          console.log("회원탈퇴 실패!");
        }
      })
      .catch((err) => {
        console.log("회원탈퇴 API 호출 오류:", err);
      });
    }
      

  // const profileColor = [
  //   "default",
  //   "bronze",
  //   "silver",
  //   "gold",
  //   "platinum",
  //   "diamond",
  //   "master"
  // ]

  const username = 'Alice';

  return (
    <NextUIProvider className={classes.header}>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link href="/">
            {/* <img className={classes.img} src={getAsset('logo/icon_square.svg')} alt="algo_logo_dark" /> */}
            <img src={getAsset('logo/logo_light.svg')} alt="algo_logo_light" />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
            <Link href={`/profile/${username}`} color="foreground" className={classes.hover}>
              나의정보
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link href={`/code-log/${username}`} color="foreground" className={classes.hover}>
              코드로그
            </Link>
          </NavbarItem>
          
          <NavbarItem>
            <Link href={`/community`} color="foreground" className={classes.hover}>
              커뮤니티
            </Link>
          </NavbarItem>
          
          <NavbarItem >
            <Link aria-current="page">
              <SearchModal/>
            </Link>
          </NavbarItem>            

        </NavbarContent>
        
        <NavbarContent justify="end">
          {/* <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem> */}

          <NavbarItem>    
            {/* 프로필 페이지 - 티어에 따라서 프로필 테두리 색 다르게 주기 (예정) */}
            <div className="flex gap-4 items-center">
              {/* <Avatar isBordered color="bronze" src="https://i.ibb.co/vZDFkkQ/1587535553105.jpg" /> */}
              {/* <Avatar isBordered color="#C0C0C0" src="https://i.ibb.co/vZDFkkQ/1587535553105.jpg" />
              <Avatar isBordered color="#FFBF00 " src="https://i.ibb.co/vZDFkkQ/1587535553105.jpg" />
              <Avatar isBordered color="#02B7AE " src="https://i.ibb.co/vZDFkkQ/1587535553105.jpg" />
            <Avatar isBordered color="#00FFFF " src="https://i.ibb.co/vZDFkkQ/1587535553105.jpg" /> */}
              <Dropdown>
              <DropdownTrigger>
              <div className="profile_wrapper">
                  <div className="gradation_animate"></div>
                  <div className="image_wrapper">
                    <Avatar
                    className="image"
                    // color="secondary" 
                    src="https://i.ibb.co/vZDFkkQ/1587535553105.jpg" 
                    />
                  </div>
              </div>

              </DropdownTrigger>
              <DropdownMenu variant="flat" aria-label="Dropdown menu with shortcut">
                <DropdownItem key="change-nickname">
                  닉네임 변경
                </DropdownItem>
                <DropdownItem key="log-out" onClick={Logout}>
                  로그아웃
                </DropdownItem>
                <DropdownItem key="sign-out" onClick={Withdraw} className="text-danger" color="danger">
                  회원탈퇴
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            </div>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>

          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === menuItems.length - 1 ? "danger" : "foreground"
                }
                className={`"w-full" ${classes.hover}`}
                href={
                  index === 0? `/profile/${username}`  :
                  index === 1? `/code-log/${username}` :
                  index === 2? `/community` : `/`
                }
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
