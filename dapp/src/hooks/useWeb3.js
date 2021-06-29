import { useEffect, useCallback } from 'react'
import Web3 from 'web3'
import { web3Store } from '../stores/Web3Store'

export const useWeb3 = () => {
    const initWeb3 = useCallback(async () => {
        if (window.ethereum) {
            const tmpWeb3 = new Web3(window.ethereum)
            try {
                await window.ethereum.enable();
                web3Store.updateWeb3(tmpWeb3);
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

    return web3Store.web3;
}