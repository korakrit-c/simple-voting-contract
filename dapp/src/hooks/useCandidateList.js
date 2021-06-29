import { useState, useCallback, useEffect } from 'react'
import { useContract } from './useContract'

export const useCandidateList = (index: number) =>{
    const [candidateName, setCandidateName] = useState("{candidateName}");
    const [candidateVoteCount, setCandidateVoteCount] = useState(0);
    const contract = useContract()

    const fetch = useCallback(async () => {
        if(!contract){
            return
        }

        const result = await contract.methods.candidateList(index).call();
        setCandidateName(result.candidateName);
        setCandidateVoteCount(result.voteCount);
    }, [contract, index])

    useEffect(() => {
        fetch()
    }, [fetch])

    return {
        candidateName, candidateVoteCount
    }
}