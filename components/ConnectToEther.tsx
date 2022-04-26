import { CoinbaseWallet } from '@web3-react/coinbase-wallet';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useWeb3React, initializeConnector } from '@web3-react/core';
import { Button } from '@chakra-ui/react'


const InjectedWallet = new InjectedConnector({
    supportedChainIds: [1]
});

function ConnectToEthers(): JSX.Element {
    return (
        <>
        </>
    )
}

export default ConnectToEthers;
