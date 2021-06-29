import { useMemo } from 'react'
import { web3Store } from '../stores/Web3Store'
import SimpleVote from '../abi/SimpleVote.json';

export const useContract = () => {
    const web3 = web3Store.web3
    const contractAddress = "0xFB03FbBb1EB7af714057F0225EFFA4B3B3199994";

    const contract = useMemo(() => {
        if (!web3) {
            return null
        }

        try {
            const tempContract = new web3.eth.Contract(SimpleVote, contractAddress)
            return tempContract
        } catch (err) {
            console.warn(err)
            return null
        }
        
    }, [web3, contractAddress])
    return contract
}