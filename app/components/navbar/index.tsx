"use client"
import React from "react";
import { useRouter } from 'next/navigation';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NextUIProvider} from "@nextui-org/react";
import { usePathname } from 'next/navigation';

interface Props {

}

export default function ReloadNavbar() {
  const pathname = usePathname();
  const isActive = (route: string) => pathname === route;




  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Reload Gaming</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center" >
      <NavbarItem isActive={isActive('/servers')}>
            <Link href="/servers" color="foreground" className={isActive('/servers') ? 'text-blue-600' : ''}>
              Servers
            </Link>
          </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="#" aria-current="page">
            Modos de juegos
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="#">
            Unirse
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" color="foreground">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Registrarse
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
