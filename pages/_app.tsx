import '../styles/globals.sass';
import type { AppProps } from 'next/app'

import { Web3ReactProvider } from '@web3-react/core';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const supportedChainIds = [1, 43114, 80001];

  const connectors = {
    injected: {},
  }



  return (

      <ChakraProvider>
        {/* <Web3ReactProvider> */}
          <Component {...pageProps} />
        {/* </Web3ReactProvider> */}
      </ChakraProvider>
  );
}

export default MyApp
