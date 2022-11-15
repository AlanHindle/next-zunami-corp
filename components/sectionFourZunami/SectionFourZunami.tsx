import React from "react";
import { Container, Col, Grid, Card, Text, Button, Spacer} from '@nextui-org/react';

import { CardMethodZunami } from '../cardMethodZunami';

export const SectionFourZunami = () => {

    return (
        <Container style={{ fontFamily: 'Montserrat'}}>
        <Grid.Container gap={6}>
        <Grid xs={12} sm={12} md={12} lg={9} style={{ margin: '0 auto', backgroundColor: '#F4F5FA', borderRadius: '19px'}}>
            <Grid.Container gap={5} justify="center" alignItems="center">
                <Grid xs={12} sm={12} md={12} lg={12} style={{ padding: 15, textAlign: 'center' }}>
                  <Col>
                    <Text h1 size={46} color="black" weight={'bold'} css={{ m: 0 }}>
                    Method
                    </Text>
                    <span style={{ fontSize:'30', color: '#2082FF', fontWeight: 'normal' }}>
                    How we deliver results
                      </span>
                  </Col>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={12} style={{ padding: 2, textAlign: 'center' }}>
                  <CardMethodZunami/>
                </Grid>
            </Grid.Container>
        </Grid>
        </Grid.Container>
      </Container>
    )
}
