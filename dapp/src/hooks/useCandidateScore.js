import { useState, useCallback, useEffect } from 'react'
import { useContract } from './useContract'

export const useCandidateScore = (index: number) =>{
    const [voteCount, setVoteCount] = useState(0);
    const contract = useContract()

    const fetch = useCallback(async() => {
        if(!contract){
            return
        }

        const result = await contract.methods.totalVotesFor(index).call();
        setVoteCount(result);
    }, [contract, index])

    useEffect(() => {
        fetch()
    }, [fetch])

    return {
        voteCount, fetch
    }
}