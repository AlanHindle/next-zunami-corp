import React from "react";
import { Container, Row, Col, Grid, Card, Text, Button, Spacer} from '@nextui-org/react';


import style from './AstronautImage.module.css';

export const SectionAstronautBlueXD = () => {

    const title = "Asesoramos, acompañamos, diseñamos e instruimos a marcas en su inmersión en el mundo digital";

    return (
      
        <Container fluid style={{ backgroundColor: '#0076F7'}} className={style.astronautImage}>
        <Grid.Container gap={6}>
        <Grid xs={12} sm={12} md={12} lg={12}>
            <Grid.Container gap={2} justify="flex-start" alignItems="center">
                <Grid xs={12} sm={12} md={12} lg={6} xl={6}>
                <Text h1 size={55} color="white" weight={'semibold'} css={{ m: 0, lineHeight: '80px' }}>
                  { title }
                  </Text>
                </Grid>
            </Grid.Container>
        </Grid>
        </Grid.Container>
      </Container>
    )
}
