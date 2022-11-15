import React from "react";
import { Spacer, Text, Grid, Image, Container, Link, Col} from "@nextui-org/react";




export const FooterZunami = () => {

    const footerZunami = [
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
        <footer style={{ backgroundColor: 'black', fontFamily: 'Montserrat'}}>
        <Container xl>
        <Grid.Container gap={5}>
        <Grid xs={12} sm={12} md={12} lg={12} justify="space-between" alignItems="center">
            <Grid.Container gap={5}>
                <Grid xs={12} sm={12} md={12} lg={2} justify="center" alignItems="center" style={{ padding: 15, textAlign: 'center' }}>
                    <Col>
                        <Text size={28} style={{ fontFamily: 'Montserrat' , color: 'white'  }}>
                            ES
                        </Text>
                        <Text size={12} style={{ fontFamily: 'Montserrat' , color: 'white' }}>
                            Palma de Mallorca <br />
                            Islas Baleares <br />
                            +34 (602) 650 036 <br />
                        </Text>
                    </Col>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={2} justify="center" alignItems="center" style={{ padding: 15, textAlign: 'center' }}>
                    <Col>
                        <Text size={28} style={{ fontFamily: 'Montserrat' , color: 'white'  }}>
                            US
                        </Text>
                        <Text size={12} style={{ fontFamily: 'Montserrat' , color: 'white' }}>
                            Houston <br />
                            Texas <br />
                            +54 (911) 5697 7566 <br />
                        </Text>
                    </Col>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={4} justify="center" alignItems="center" style={{ padding: 15, textAlign: 'center' }}>
                    <Col>
                        <Image
                            height={64}  
                            src="./thinkOutsideTheSphere.svg"
                            alt="Think Outside the Sphere"
                        />
                    </Col>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={2} justify="center" alignItems="center" style={{ padding: 15, textAlign: 'center' }}>
                    <Col>
                        <Text size={28} style={{ fontFamily: 'Montserrat' , color: 'white'  }}>
                            RD
                        </Text>
                        <Text size={12} style={{ fontFamily: 'Montserrat' , color: 'white' }}>
                            Av. Tiradentes <br />
                            Santo Domingo <br />
                            +1 (829) 995 4950 <br />
                        </Text>
                    </Col>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={2} justify="center" alignItems="center" style={{ padding: 15, textAlign: 'center' }}>
                    <Col>
                        <Text size={28} style={{ fontFamily: 'Montserrat' , color: 'white'  }}>
                            VE
                        </Text>
                        <Text size={12} style={{ fontFamily: 'Montserrat' , color: 'white' }}>
                        Puerto Ordaz <br />
                        Edo. Bolívar <br />
                        +58 (424) 900-0936 <br />
                        </Text>
                    </Col>
                </Grid>
            </Grid.Container>
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={12} justify="center">
            <Link href="mailto:info@zunamibranding.com" title="info@zunamibranding.com" style={{fontSize:'16px', textDecoration: 'none', color: '#2082FF'}}> 
                info@zunamibranding.com
            </Link>
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={12} justify="center">
            <Link style={{fontSize:'12px', textDecoration: 'none', color: 'white'}}> 
                Copyright © 2021 <span style={{ paddingLeft: '10px', fontWeight: 'bold'}}>Zunami Srl.</span>
            </Link>
                <Spacer x={1}/>
            <Link href="/" title="Security" style={{fontSize:'12px', textDecoration: 'none', color: 'white'}}> 
                Security
            </Link>
                <Spacer x={1}/>
            <Link href="/" title="Privacy Policy" style={{fontSize:'12px', textDecoration: 'none', color: 'white'}}> 
                Privacy Policy
            </Link>
        </Grid>
        </Grid.Container>
        </Container>
        </footer>
    )
}
