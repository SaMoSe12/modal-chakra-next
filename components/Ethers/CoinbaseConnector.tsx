import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { initializeConnector } from "@web3-react/core";
import { URLS } from '@components/Ethers/Chains';

export const [coinbaseWallet, hooks] = initializeConnector<CoinbaseWallet>(
   (actions) =>
     new CoinbaseWallet(actions, {
         url: URLS[1][0],
         appName: 'TuDao',
     })  
);