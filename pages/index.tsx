import type { NextPage } from 'next'
import Head from 'next/head'

import { Container } from '@chakra-ui/react';


import NavBar from '@components/NavBar';
import CarouselIndex from '@components/CarouselIndex'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TuDao</title>
        <meta name="description" content="Tu Dao Marketplace Mexicano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Container maxW={{base: 'container.sm', md: 'container.md', lg: 'container.lg', xl: 'container.xl'}}>
        <CarouselIndex />
      </Container>
    </>
  )
}

export default Home
