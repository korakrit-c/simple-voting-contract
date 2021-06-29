import Web3 from "web3";
import { observable, action, makeObservable } from 'mobx'

class Web3Store {
    constructor() {
        makeObservable(this);
    }

    @observable web3: Web3 | null = null
    @action
    updateWeb3 = (w3: Web3) => {
        this.web3 = w3
    }
}

export const web3Store = new Web3Store()
