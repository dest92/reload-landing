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

const Footer = () => {
  return (
    <Navbar>
      <NavbarContent justify="center">
        <NavbarItem>
          <Link className="font-bold text-inherit" href="/">
            © {new Date().getFullYear()} Reload Gaming | Todos los derechos
            reservados
          </Link>{" "}
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="success"
            href="https://github.com/dest92"
            variant="flat"
          >
            Creado por: <span className="font-bold">Matías Acebal</span>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Footer;
