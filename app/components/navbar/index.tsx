"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NextUIProvider,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

interface Props {}

export default function ReloadNavbar() {
  const pathname = usePathname();
  const isActive = (route: string) => pathname === route;

  const menuItems = [
    "Servers",
    "Modos de Juegos",
    "Login",
    "Register",
    "Mi Perfil",
    "Log Out",
  ];

  const menuLinks = {
    Servers: "/servers",
    "Modos de Juegos": "/game-modes",
    Login: "/login",
    Register: "/register",
    "Mi Perfil": "/profile",
    "Log Out": "/logout",
  };

  return (
    <Navbar>
      <NavbarMenuToggle />

      <NavbarBrand>
        <Link className="font-bold text-inherit text-xl" href="/">
          Reload Gaming
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={isActive("/servers")}>
          <Link
            href="/servers"
            color="foreground"
            className={isActive("/servers") ? "text-blue-600" : ""}
          >
            Servers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" aria-current="page">
            Modos de juegos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Unirse
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" color="foreground">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Registrarse
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={menuLinks[item as keyof typeof menuLinks]} // Add index signature to allow indexing with a string
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
