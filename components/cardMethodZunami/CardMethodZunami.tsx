import React from "react";
import { Card, Grid, Text } from "@nextui-org/react";

export const CardMethodZunami = () => {

    const cardsMethodZunami = [
        {
            id: '1',
            img: './briefing.svg',
            title: "Briefing",
            description: "Lorem ipsum dolor sit amet, consetetur sadips cing elitr, sed diam nonumy eirmod tempor ",
            color: "#2082FF"
        },
        {
            id: '2',
            img: './strategy.svg',
            title: "Estrategia",
            description: "Lorem ipsum dolor sit amet, consetetur sadips cing elitr, sed diam nonumy eirmod tempor ",
            color: "#F7B900"
        },
        {
            id: '3',
            img: './design.svg',
            title: "Diseño",
            description: "Lorem ipsum dolor sit amet, consetetur sadips cing elitr, sed diam nonumy eirmod tempor ",
            color: "#FF2222"
        },
        {
            id: '4',
            img: './develpment.svg',
            title: "Ejecución",
            description: "Lorem ipsum dolor sit amet, consetetur sadips cing elitr, sed diam nonumy eirmod tempor ",
            color: "#00B447"
        },
    ];

    return (
        <Grid.Container gap={2} justify="center" alignItems="center">
        {cardsMethodZunami.map((item) => (
            <Grid xs={12} sm={12} md={6} lg={12} xl={3} key={item.id}>
            <Card style={{ backgroundColor: 'transparent'}} >
                <Card.Image
                src={item.img}
                width={120}
                height={120}
                color={item.color}
                >
                </Card.Image>
                <Card.Body css={{ px: "$15", textAlign: 'center'}}>
                <Text h2 size={30}  weight="bold">{item.title}</Text>
                <Text size={17} css={{ color: "#536C8D", fontWeight: "$normal", fontSize: "$lg" }}>
                    {item.description}
                    </Text>
                </Card.Body>
            </Card>
            </Grid>
        ))}
        </Grid.Container>
    )
}
