import Head from "next/head";
import { NextPage } from "next";
import NavBar from "@components/NavBar";
import { Container, Text, Heading, Box, Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";

const FAQ: NextPage = () => {
    return (
        <>
            <Head>
                <title>TuDao | FAQ</title>
                <meta name="description" content="Tu Dao Preguntas Frecuentes" />
            </Head>
            <NavBar />
            <Container maxW="container.md">
                <Tabs variant="line">
                    <TabList>
                        <Tab>One</Tab>
                        <Tab>Two</Tab>
                        <Tab>Three</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Box>
                                <Heading>Uno</Heading>
                            </Box>
                        </TabPanel>
                        <TabPanel>
                            <Box>
                                <Heading>Dos</Heading>
                            </Box>
                        </TabPanel>
                        <TabPanel>
                            <Box>
                                <Heading>Tres</Heading>
                            </Box>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Container>
        </>
    )
}

export default FAQ;