import type { Web3ReactHooks } from '@web3-react/core';
import { CHAINS } from '@components/Ethers/Chains';
import { Box, Text } from '@chakra-ui/react';

export function Chain({ chainId }: { chainId: ReturnType<Web3ReactHooks['useChainId']> }) {
    if (chainId === undefined) return null;

    const name = chainId ? CHAINS[chainId]?.name : undefined;

    if (name) {
        return (
            <Box>
                <Text>Chain: {' '}</Text>
                <Text fontWeight='bold'>
                    {name} ({chainId})
                </Text>
            </Box>
        )
    }

    return (
        <Box>
            <Text>Chain Id: {chainId}</Text>
        </Box>
    )
}