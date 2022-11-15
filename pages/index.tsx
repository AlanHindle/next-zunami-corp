import Head from 'next/head'
import { Container, Row, Col, Grid, Card, Text, Button, Spacer} from '@nextui-org/react';
import styles from '../styles/Home.module.css'
import { NavbarZunami } from '../components/navbarZunami';
import { FooterZunami } from '../components/footerZunami';
import { SectionOneZunami } from '../components/sectionOneZunami';
import { SectionTwoZunami } from '../components/sectionTwoZunami';
import { SectionThreeZunami } from '../components/sectionThreeZunami';
import { SectionFourZunami } from '../components/sectionFourZunami';
import { SectionAstronautBlueXD } from '../components/sectionAstronautBlueXD';






export default function Home() {

  

  
  return (
    <>
      <Head>
        <title>Zunami Corp</title>
        <meta name="description" content="Zunami Corp" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <NavbarZunami />
      <main>
        <SectionAstronautBlueXD />
        <SectionOneZunami />
        <Spacer y={3} />
        <SectionTwoZunami />
        <Spacer y={3} />

    
        <Spacer y={3} />
        <SectionThreeZunami />
        <Spacer y={3} />
        <SectionFourZunami />
      </main>


      <Spacer y={2} />
      
      <FooterZunami />


    </>
  )
}
