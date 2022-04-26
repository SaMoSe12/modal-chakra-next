import { React } from 'react';
import { Link, Text, useColorModeValue } from '@chakra-ui/react';

import styles from '@styles/NavBar.module.sass';


const MenuItem = ({ children, to = '/', ...rest }) => {

    return (
        <Link className={styles.NavBarItem} href={to}>
            <Text display="block" {...rest} color={useColorModeValue('black', 'white')} px={4}>
                {children}
            </Text>
        </Link>
    )
}

export default MenuItem;