import React from "react";
import { Container, Col, Grid, Card, Text, Button, Spacer} from '@nextui-org/react';

import { CardServiceZunami } from '../components/cardsServiceZunami';

export const SectionTwoZunami = () => {

    return (
        <Container style={{ fontFamily: 'Montserrat'}}>
        <Grid.Container gap={6}>
        <Grid xs={12} sm={12} md={12} lg={9} style={{ margin: '0 auto', backgroundColor: '#F4F5FA', borderRadius: '19px'}}>
            <Grid.Container gap={5} justify="center" alignItems="center">
                <Grid xs={12} sm={12} md={12} lg={5} style={{ padding: 15 }}>
                  <Col>
                    <Text h1 size={46} color="black" weight={'normal'} css={{ m: 0, mw: "1200px" }}>
                    Services
                    </Text>
                    <span style={{ fontSize:'30', color: '#2082FF', fontWeight: 'bold' }}>
                      We work with you
                      </span>
                    <Spacer y={2} />
                    <Text size={18} color="#536C8D" weight={'normal'} css={{ mw: "530px" }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    </Text>
                    <Spacer y={2} />
                    <Button auto flat size="xl" css={{ m: 0, color: "white", bg: "black", borderRadius: "9" }}>Nuestros servicios</Button>
                  </Col>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={7} style={{ padding: 2, textAlign: 'center' }}>
                <CardServiceZunami/>
                </Grid>
            </Grid.Container>
        </Grid>
        </Grid.Container>
      </Container>
    )
}
