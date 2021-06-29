import { useState, useCallback, useEffect } from 'react'
import { useContract } from './useContract'

export const useCandidateCount = () =>{
    const [candidateCount, setCandidateCount] = useState(0);
    const contract = useContract()

    const fetch = useCallback(async () => {
        if(!contract){
            return
        }
        
        const result = await contract.methods.getCandidates().call();
        setCandidateCount(parseInt(result));
    }, [contract])

    useEffect(() => {
        fetch()
    }, [fetch])

    return {
        candidateCount, fetch
    }
}