import {
    Box,
    Text,
} from '@chakra-ui/react';
import ConnectToPhantom from '@components/ConnectToPhantom';
import CoinbaseWalletButton from '@components/Ethers/CoinbaseWalletButton'
import Image from 'next/image';

import logo from './Images/logoTemp.png';
import styles from '@styles/Login.module.sass';

function Login(): JSX.Element {
    return (
        <Box className={styles.login_container}>
            <Box className={styles.login_card}>
                <Box className={styles.login_img_holder}>
                    <Image
                        width={150}
                        height={150}
                        src={logo}
                        alt='tuDao'
                    />
                </Box>
                <Text
                    fontSize='2rem'
                    fontWeight='medium'
                    textAlign='center'
                    mb='64px'
                >
                    Conecta tu wallet
                </Text>
                <CoinbaseWalletButton />
                <ConnectToPhantom />
            </Box>
        </Box>
    )
}

export default Login;