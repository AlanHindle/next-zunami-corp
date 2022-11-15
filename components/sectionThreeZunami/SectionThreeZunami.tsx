import React from "react";
import { Container, Col, Grid, Card, Text, Button, Spacer, Row} from '@nextui-org/react';

import { CardsWorkZunami } from '../cardsWorkZunami';

export const SectionThreeZunami = () => {

    return (
        <Container style={{ fontFamily: 'Montserrat'}}>
        <Grid.Container gap={6}>
        <Grid xs={12} sm={12} md={12} lg={9} style={{ margin: '0 auto'}}>
            <Grid.Container gap={5} justify="center" alignItems="center">
                <Grid xs={12} sm={12} md={12} lg={5} style={{ padding: 15 }}>
                  <Col>
                    <Text h1 size={46} color="black" weight={'bold'} css={{ m: 0, mw: "1200px" }}>
                    Works
                    </Text>
                    <span style={{ fontSize:'30', color: '#2082FF', fontWeight: 'normal' }}>
                      Things we’ve made
                    </span>
                    <Spacer y={2} />
                    <Text size={18} color="#536C8D" weight={'normal'} css={{ mw: "530px" }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                    </Text>
                    <Spacer y={2} />
                    <Button auto size="xl" css={{ m: 0, color: "white", bg: "black", borderRadius: "9"}}>Explorar más</Button>
                  </Col>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={7} style={{ padding: 2, textAlign: 'center' }}>
                  <CardsWorkZunami />
                </Grid>
            </Grid.Container>
        </Grid>
        </Grid.Container>
      </Container>
    )
}
