import Head from 'next/head'
import { Container, Row, Col, Grid, Card, Text, Button, Spacer} from '@nextui-org/react';
import styles from '../styles/Home.module.css'
import { NavbarZunami } from '../components/navbarZunami';
import { FooterZunami } from '../components/footerZunami';
import { CardServiceZunami } from '../components/cardsServiceZunami';






export default function Home() {
  
  const section1H1 = "Soluciones ";
  const section1H1Span = "fuera de la esfera.";
  const section1Text = "Desarrollamos marcas y creamos herramientas pensadas para el crecimiento de tu negocio";
  

  
  return (
    <>

      
      <main style={{ margin: '0 auto' }}>
      <Container gap={0}>
      <Grid.Container gap={2} justify="center" alignItems="center">
        <Grid md={7} xs={12}>
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
            <Grid.Container gap={1} justify="flex-start" alignItems="center">
              <Grid md={3} xs={12} css={{ m: 0, p: 0}}>
                <Button auto flat size="xl" css={{ m: 0 }} style={{borderRadius: '9px'}}>Hablemos</Button>
              </Grid>
              <Grid md={2} xs={12} css={{ m: 0, p: 0}}>
                <Button bordered style={{ borderRadius: '9px'}} auto ghost size="xl"  css={{ m: 0 }}>
                Nuestro trabajo
                </Button>
              </Grid>
            </Grid.Container>              
            <Spacer y={0.5}/>
          </Col>
        </Grid>
        <Grid md={5} xs={12}>
            <Col>
            <video autoPlay muted loop style={{
              width:'100%'
              
            }}>         
            <source src="./banner_zunami.mp4" type="video/mp4"/>       
            </video>
            </Col>
        </Grid>
      </Grid.Container>
        <Spacer y={2} />
      <Grid.Container gap={2} justify="center">
        <Grid xs={12}  style={{
          backgroundColor: '#F4F5FA',
          borderRadius: '19px',
          padding: '50px',
        }}>
          <Grid.Container gap={1} justify="flex-start" alignItems="center">
          <Grid xs={12} css={{ m: 0, p: 0}}>
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
              <Button auto flat size="xl" css={{ m: 0 }} style={{borderRadius: '9px'}}>Nuestros servicios</Button>
            </Col>          
          </Grid>
          </Grid.Container>  
            <Spacer x={2} />
          <CardServiceZunami/>
        </Grid>
      </Grid.Container>
       </Container>
      </main>



    </>
  )
}
