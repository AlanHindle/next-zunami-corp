import React from "react";
import { Col, Grid, Card, Text, Spacer, Row, Badge} from '@nextui-org/react';

import cardProyects from './CardsProyects.module.css';

export const CardsWorkZunami = () => {

    const cardsWorkZunami = [
        {
            id: '1',
            client: "Step4Ward",
            img: "./clientStep4Ward.png",
            category: "Identidad visual",
            colorCategory: "#F7B900",        
        },
        {
            id: '2',
            client: "One Vest",
            img: "./clientOneVest.png",
            category: "Identidad visual | Desarrollo webl",
            colorCategory: "#2082FF",
        },
        {
            id: '3',
            client: "Roomba Latina",
            img: "./clientRoombaLatina.png",
            category: "Identidad visual",
            colorCategory: "#00B447"
        },
    ];

    return (
        <Grid.Container gap={2} justify="center">
            {cardsWorkZunami.map((item) => (
            <Grid xs={12} sm={4} md={4} lg={4} key={item.id}>
                <Card isPressable className={cardProyects.cardSingle} >
                    <div className={cardProyects.main} >
                        <div className={cardProyects.image}>
                            <Card.Image 
                                    showSkeleton
                                    src={ item.img }
                                    alt={ item.client }
                                />
                        </div>
                        <div className={cardProyects.footer} style={{ fontFamily: 'Montserrat' , color: 'white'  }}>
                        <Card.Footer isBlurred
                        css={{
                            position: "absolute",
                            bgBlur: "#ffffff",
                            bottom: 0,
                            zIndex: 1,
                        }}>
                            <Col>
                                <Text  size={16} css={{ color: "black", fontWeight: "$bold", fontSize: "$xl" }} style={{ fontFamily: 'Montserrat' }}>{item.client}</Text>
                                <Text css={{ color: "black", fontWeight: "$normal", fontSize: "$xs" }} style={{ fontFamily: 'Montserrat' , color: '#536C8D'  }}>
                                {item.category}
                                </Text>
                                <Spacer y={0.5}/>
                            </Col>
                            </Card.Footer>
                        </div>
                    </div>
                </Card>
            </Grid>
        ))}
        </Grid.Container>
    )
}
