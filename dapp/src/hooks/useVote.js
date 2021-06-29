import { useState, useCallback } from 'react'
import { useContract } from './useContract'
import { useAccount } from './useAccount'

export const useVote = () =>{
    const contract = useContract();
    const { myAccount } = useAccount();
    const [loading, setLoading] = useState(false);

    const vote = useCallback(async (id, callback) => {
        if(!contract || !myAccount){
            return
        }

        let options = {
            from: myAccount
        }

        setLoading(true);
        let confirmed = false;
        let errored = false;

        contract.methods.vote(id).send(options)
        .on('error', (error) => {
            setLoading(false);
            if(!errored){
                console.error(error);
                errored = true;
            }
        })
        .on('confirmation', (confirmationNumber, receipt) => {
            console.log('confirmationNumber', confirmationNumber);
            console.log(receipt);
            setLoading(false);
            if(!confirmed){
                //message.success('Vote confirmed')
                if(callback){
                    callback();
                }
            }
        })
        
    }, [contract, myAccount])

    return {
        vote, loading
    }
}