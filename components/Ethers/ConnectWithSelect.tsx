import type { CoinbaseWallet } from '@web3-react/coinbase-wallet';
import type { Web3ReactHooks } from '@web3-react/core';
import type { MetaMask } from '@web3-react/metamask';
import { Network } from '@web3-react/network';
import { WalletConnect } from '@web3-react/walletconnect';
import { useCallback, useState } from 'react';
import { CHAINS, getAddChainParameters, URLS } from '@components/Ethers/Chains';
import { Select as ChakraSelect, Box, Button } from '@chakra-ui/react';
import { Connector } from '@web3-react/types';

function Select({
    chainId,
    switchChain,
    displayDefault,
    chainIds,
}: {
    chainId: number;
    switchChain: (chainId: number) => void | undefined;
    displayDefault: boolean;
    chainIds: number[];
}) {
    return (
        <ChakraSelect
            value={chainId}
            onChange={(event) => {
                switchChain?.(Number(event.target.value))
            }}
            disabled={switchChain === undefined}
        >
            {displayDefault ? <option value={-1}>Default Chain</option> : null}
            {
                chainIds.map((chainId) => (
                    <option key={chainId} value={chainId}>
                        {CHAINS[chainId]?.name ?? chainId}
                    </option>
                ))
            }
        </ChakraSelect>
    )
}

export function ConnectWithSelect({
    connector,
    chainId,
    isActivating,
    error,
    isActive,
}: {
    connector: MetaMask | CoinbaseWallet;
    chainId: ReturnType<Web3ReactHooks['useChainId']>;
    isActivating: ReturnType<Web3ReactHooks['useIsActivating']>;
    error: ReturnType<Web3ReactHooks['useError']>;
    isActive: ReturnType<Web3ReactHooks['useIsActive']>;
}) {
    const isNetwork = connector instanceof Network;
    const displayDefault = !isNetwork;
    const chainIds = (isNetwork ? Object.keys(URLS) : Object.keys(CHAINS)).map((chainId) => Number(chainId))

    const [desiredChainId, setDesiredChainId] = useState<number>(isNetwork ? 1 : -1);

    const switchChain = useCallback(
        async (desiredChainId: number) => {
            setDesiredChainId(desiredChainId)
            // if we're already connected to the desired chain, return
            if (desiredChainId === chainId) return
            // if they want to connect to the default chain and we're already connected, return
            if (desiredChainId === -1 && chainId !== undefined) return

            if (connector instanceof WalletConnect || connector instanceof Network) {
                await connector.activate(desiredChainId === -1 ? undefined : desiredChainId)
            } else {
                await connector.activate(desiredChainId === -1 ? undefined : getAddChainParameters(desiredChainId))
            }
        },
        [connector, chainId]
    );

    if (error) {
        return (
            <Box style={{ display: 'flex', flexDirection: 'column' }}>
                <Select
                    chainId={desiredChainId}
                    switchChain={switchChain}
                    displayDefault={displayDefault}
                    chainIds={chainIds}
                />
                <Box mb={4} />
                <Button
                    onClick={() =>
                        connector instanceof WalletConnect || connector instanceof Network
                            ? void connector.activate(desiredChainId === -1 ? undefined : desiredChainId)
                            : void connector.activate(desiredChainId === -1 ? undefined : getAddChainParameters(desiredChainId))
                    }
                >
                    Intentar de nuevo?
                </Button>
            </Box>
        )
    } else if (isActive) {
        return (
            <Box display='flex' alignItems='center' flexDirection='column'>
                <Select
                    chainId={desiredChainId === -1 ? -1 : chainId}
                    switchChain={switchChain}
                    displayDefault={displayDefault}
                    chainIds={chainIds}
                />
                <Box mb={4} />
                <Button
                    onClick={() =>
                        void connector.deactivate()}
                >
                    Desconectar
                </Button>
            </Box>
        )
    } else {
        return (
            <Box display='flex' flexDirection='column'>
                <Select
                    chainId={desiredChainId}
                    switchChain={isActivating ? undefined : switchChain}
                    displayDefault={displayDefault}
                    chainIds={chainIds}
                />
                <Box mb={4} />
                <Button
                    onClick={
                        isActivating
                        ? undefined
                        : () => 
                            connector instanceof WalletConnect || connector instanceof Network
                                ? connector.activate(desiredChainId === -1 ? undefined : desiredChainId)
                                : connector.activate(desiredChainId === -1 ? undefined : getAddChainParameters(desiredChainId))
                    }
                    disabled={isActivating}
                >
                    Conectar
                </Button>
            </Box>
        )
    }
}