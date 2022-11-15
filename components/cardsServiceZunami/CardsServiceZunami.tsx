import React from "react";
import { Card, Grid, Text } from "@nextui-org/react";

export const CardServiceZunami = () => {

    const cardsZunami = [
        {
            title: "Brand identity",
            description: "Lorem ipsum dolor sit amet, consetetur sadips cing elitr, sed diam nonumy eirmod tempor ",
            color: "#2082FF"
        },
        {
            title: "Development",
            description: "Lorem ipsum dolor sit amet, consetetur sadips cing elitr, sed diam nonumy eirmod tempor ",
            color: "#F7B900"
        },
        {
            title: "Video & Motion",
            description: "Lorem ipsum dolor sit amet, consetetur sadips cing elitr, sed diam nonumy eirmod tempor ",
            color: "#FF2222"
        },
        {
            title: "3D Design",
            description: "Lorem ipsum dolor sit amet, consetetur sadips cing elitr, sed diam nonumy eirmod tempor ",
            color: "#00B447"
        },
    ];

    return (
        <Grid.Container gap={2} justify="center" alignItems="center">
        {cardsZunami.map((item) => (
            <Grid xs={12} sm={12} md={6} lg={12} xl={6} >
            <Card isHoverable>
                <Card.Body css={{ p: "$15" }}>
                <Text h2 size={20} color={item.color}>{item.title}</Text>
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
