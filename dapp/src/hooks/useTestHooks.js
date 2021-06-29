import { useEffect, useCallback } from 'react'
import Web3 from 'web3'
import { store } from '../stores/Web3Store'

export const TestHooks = () => {
    //const CONTRACT_ADDRESS_KEY = 'voting_react_contractAddress'
    const initWeb3 = useCallback(async () => {
        if (window.ethereum) {
            const ethereum = window.ethereum;
            ethereum.enable();
            ethereum
                .request({ method: 'eth_chainId' })
                .then((chainId) => {
                    console.log(`hexadecimal string: ${chainId}`);
                    console.log(`decimal number: ${parseInt(chainId, 16)}`);
                })
                .catch((error) =>{
                    console.error(`Error fetching chainId: ${error.code}: ${error.message}`);
                });
                const logAccounts = (accounts) => {
                    console.log(`Accounts:\n${accounts.join('\n')}`);
                  };
            ethereum
                .on('accountsChanged', logAccounts)
                .request({ method: 'eth_accounts' })
                .then((accounts) => {
                  console.log(`Accounts:\n${accounts.join('\n')}`);
                  //localStorage.setItem(CONTRACT_ADDRESS_KEY, accounts);
                })
                .catch((error) => {
                  console.error(
                    `Error fetching accounts: ${error.message}.
                     Code: ${error.code}. Data: ${error.data}`
                  );
                });
            
            const tmpWeb3 = new Web3(window.ethereum)
            try {
                const result = await window.ethereum.send('eth_requestAccounts')
                console.log('result', result)
                console.log(tmpWeb3)
                store.updateWeb3(tmpWeb3);
                store.updateContractAddress("TEST");
            } catch (err) {
                console.log(err)
            }
            
        }
        else {
            console.log("no ethereum?");
        }
    }, [])

    useEffect(() => {
        initWeb3();
    }, [initWeb3])

    return store.web3;
}