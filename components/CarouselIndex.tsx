import { useState } from 'react';
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,
    useBreakpoint,
} from '@chakra-ui/react';

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';

const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
}

export default function CarouselIndex() {
    const [slider, setSlider] = useState<Slider | null>(null);

    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });

    const cards = [
        {
            title: 'NFT 1',
            text: 'NFT #1',
            image: 'https://picsum.photos/1920/1080',
        },
        {
            title: 'NFT 2',
            text: 'NFT #2',
            image: 'https://picsum.photos/1920/1080',
        },
        {
            title: 'NFT 3',
            text: 'NFT #3',
            image: 'https://picsum.photos/1920/1080',
        },
        {
            title: 'NFT 4',
            text: 'NFT #4',
            image: 'https://picsum.photos/1920/1080',
        },
        {
            title: 'NFT 5',
            text: 'NFT #5',
            image: 'https://picsum.photos/1920/1080',
        },
        {
            title: 'NFT 6',
            text: 'NFT #6',
            image: 'https://picsum.photos/1920/1080',
        },
    ];

    return (
        <Box
            position={'relative'}
            height={'600px'}
            width={'full'}
            overflow={'hidden'}
        >
            <link
                rel='stylesheet'
                type='text/css'
                href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
            />
            <link
                rel='stylesheet'
                type='text/css'
                href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
            />
            <IconButton
                aria-label='left-arrow'
                variant='ghost'
                position='absolute'
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}
            >
                <BiLeftArrowAlt size='40px' />
            </IconButton>
            <IconButton
                aria-label='right-arrow'
                variant='ghost'
                position='absolute'
                right={side}
                top={top}
                transform={'translate(0%,-50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}

            >
                <BiRightArrowAlt size='40px' />
            </IconButton>
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((card, index) => (
                    <Box
                        key={index}
                        height={'6xl'}
                        position='relative'
                        backgroundPosition='center'
                        backgroundRepeat='no-repeat'
                        backgroundSize='cover'
                        backgroundImage={`url(${card.image})`}
                    >
                        <Container size='container.lg' height='600px' position='relative'>
                            <Stack
                                spacing={6}
                                w={'full'}
                                maxW={'lg'}
                                position='absolute'
                                top='50%'
                                transform='translate(0,-50%)'
                            >
                                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                    {card.title}
                                </Heading>
                                <Text fontSize={{ base: 'md', lg: 'lg' }} color='GrayText'>
                                    {card.text}
                                </Text>
                            </Stack>
                        </Container>
                    </Box>
                ))}
            </Slider>
        </Box>
    )
}