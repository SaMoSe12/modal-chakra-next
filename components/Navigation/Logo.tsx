import { React } from 'react';
import Image from 'next/image';
import { Box } from '@chakra-ui/react'

import logo from '../Images/logoTemp.png';

export default function Logo(props) {
    return (
        <Box {...props}>
            <Image
                width={85}
                height={85}
                src={logo}
                alt='tuDao'
            />
        </Box>
    )
}