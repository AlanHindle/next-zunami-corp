import React from "react";
import { Navbar, Button, Link, Spacer, Switch } from "@nextui-org/react";

import { LogoZunamiIcon } from "../logoZunami/LogoZunamiIcon";
import { LogoZunamiText } from "../logoZunami/LogoZunamiText";


export const NavbarZunami = () => {

    const menuZunami = [
        {
            title: "Inicio",
            href: "/",
        },
        {
            title: "Nosotros",
            href: "/",
        },
        {
            title: "Servicios",
            href: "/",
        },
        {
            title: "Portafolio",
            href: "/",
        },
        {
            title: "Contacto",
            href: "/",
        },
    ];

    return (
        <Navbar variant="sticky">
        <Navbar.Brand>
            <LogoZunamiIcon />
                <Spacer x={0.2}/>
            <LogoZunamiText />
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="underline">
            {
                menuZunami.map((item, index) => (
                    <Navbar.Link key={ index } href={ item.href } css={{ mx: 5}}>
                        <Button auto css={{
                            backgroundColor: 'transparent',
                            color: '#000000'
                        }}>
                        { item.title }
                        </Button>
                    </Navbar.Link>
                ))
            }
        </Navbar.Content>
        <Navbar.Content>
            <Navbar.Item>
                <Switch />
            </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    )
}
