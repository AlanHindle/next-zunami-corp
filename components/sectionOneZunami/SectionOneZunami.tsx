import React from "react";
import { Container, Row, Col, Grid, Card, Text, Button, Spacer} from '@nextui-org/react';




export const SectionOneZunami = () => {

    const section1H1 = "Soluciones ";
    const section1H1Span = "fuera de la esfera.";
    const section1Text = "Desarrollamos marcas y creamos herramientas pensadas para el crecimiento de tu negocio";

    return (
        <Container>
        <Grid.Container gap={3}>
        <Grid xs={12} sm={12} md={12} lg={9} style={{ margin: '0 auto' }}>
            <Grid.Container gap={5} justify="center" alignItems="center">
                <Grid xs={12} sm={12} md={12} lg={7} xl={7} style={{ padding: 15 }}>
                <Col>
                  <Text h1 size={52} color="black" weight={'normal'} css={{ m: 0, mw: "1200px" }}>
                  { section1H1 }
                    <span style={{ color: '#2082FF', fontWeight: 'bold' }}>
                      { section1H1Span }
                    </span>
                  </Text>
                  <Spacer y={1} />
                  <Text size={22} color="#536C8D" weight={'normal'} css={{ mw: "530px" }}>
                    { section1Text }
                  </Text>
                  <Spacer y={2} />
                  <Grid.Container gap={2} justify="flex-start" alignItems="center">
                    <Grid xs={5} sm={3} md={2} lg={4} xl={3} css={{ m: 0, p: 0}}>
                      <Button auto flat size="xl" css={{ m: 0, color: "white", bg: "#2082FF", borderRadius: "9" }}>Hablemos</Button>
                    </Grid>
                    <Grid xs={5} sm={3} md={2} lg={4} xl={3} css={{ m: 0, p: 0}}>
                      <Button bordered auto ghost size="xl" css={{ m: 0, color: "#2082FF", bg: "white", borderRadius: "9" }}>
                      Nuestro trabajo
                      </Button>
                    </Grid>
                  </Grid.Container>              
                  <Spacer y={0.5}/>
                </Col>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={5} xl={5} style={{ padding: 2, textAlign: 'center' }}>
                  <video autoPlay muted loop style={{
                    width:'100%'
                  }}>         
                    <source src="./banner_zunami.mp4" type="video/mp4"/>       
                  </video>
                </Grid>
            </Grid.Container>
        </Grid>
        </Grid.Container>
      </Container>
    )
}
