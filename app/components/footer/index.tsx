"use client";
import React from "react";
import {
  Button,
  Card,
  CardFooter,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

const Footer = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <Link className="font-bold text-inherit text-sm md:text-xl" href="/">
          © {new Date().getFullYear()} Reload Gaming
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="success"
            href="https://github.com/dest92"
            variant="flat"
            className="text-xs md:text-sm whitespace-nowrap overflow-ellipsis overflow-hidden"
          >
            Creado por: <span className="font-bold">Matías Acebal</span>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Footer;
