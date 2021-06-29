import React from 'react';
import { observer } from 'mobx-react-lite'
import { useAccount } from './../hooks/useAccount'

export const Account = observer(() => {
    const { myAccount, balance } = useAccount();
    return (
        <div className="Account alert alert-success">
            <div>
                <span>Account: {myAccount}</span>
            </div>
            <div>
                <span>Balance: {balance} ETH</span>
            </div>
        </div>
    )
})

export default Account;