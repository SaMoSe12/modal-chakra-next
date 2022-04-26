import { useEffect } from 'react';
import { coinbaseWallet, hooks } from '@components/Ethers/CoinbaseConnector';
import { Chain } from '@components/Ethers/Chain';
import { Status } from '@components/Ethers/Status';
import { Accounts } from '@components/Ethers/Accounts'
import { ConnectWithSelect } from '@components/Ethers/ConnectWithSelect';

import { Box, Text, Heading, Button } from '@chakra-ui/react';

const { 
    useChainId, 
    useAccounts, 
    useError, 
    useIsActivating, 
    useIsActive, 
    useProvider, 
    useENSNames 
} = hooks;

export default function CoinbaseWalletButton() {
    const chainId = useChainId();
    const accounts = useAccounts();
    const error = useError();
    const isActivating = useIsActivating();

    const isActive = useIsActive();

    const provider = useProvider();
    const ENSNames = useENSNames(provider);

    useEffect(() => {
        void coinbaseWallet.connectEagerly();
    }, []);

    return (
        <Box>
            <Heading textAlign='center' size='md'>Coinbase</Heading>
            <Status isActive={isActive} isActivating={isActivating} error={error}/>
            <Chain chainId={chainId} />
            <Accounts accounts={accounts} provider={provider} ENSNames={ENSNames} />
            <Box mb={4} />
            <ConnectWithSelect
                connector={coinbaseWallet}
                chainId={chainId}
                isActivating={isActivating}
                error={error}
                isActive={isActive}
            />
        </Box>
    )
}