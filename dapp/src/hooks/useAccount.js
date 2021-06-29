import { useState, useEffect, useCallback  } from 'react'
import { web3Store } from '../stores/Web3Store'

export const useAccount = () => {
    const web3 = web3Store.web3;
    const [accounts, setAccounts] = useState(["0x0000000000000000000000000000000000000000"]);
    const [myAccount, setMyAccount] = useState("0x0000000000000000000000000000000000000000");
    const [balance, setBalance] = useState("0.00");

    const fetch = useCallback(async () => {
        if(!web3) {
            return
        }

        const tempAccounts = await web3.eth.getAccounts();
        setAccounts(tempAccounts);
        const tempAccount = tempAccounts[0];

        if(tempAccount){
            setMyAccount(tempAccount);
            const result = await web3.eth.getBalance(tempAccount);
            setBalance(web3.utils.fromWei(result));
        }
    },[web3])

    useEffect(() => {
        fetch()
    }, [fetch])

    return {accounts, myAccount, balance};
}