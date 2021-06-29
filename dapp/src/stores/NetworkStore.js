import { observable, action, makeObservable } from 'mobx'
import { getNetworkData } from '../utils/Network'

class NetworkStore {
    constructor() {
        makeObservable(this);
    }
    
    @observable netId: number | null = 0
    @observable netName: string | null = "{networkName}"
    @observable netWarning: string | null = "{networkWarning}"
    @action
    updateNetId = (netId: number) => {
        this.netId = netId
        const networkData = getNetworkData(netId)
        console.log('Store -> updateNetId -> networkData', networkData)
        this.netName = networkData?.network
        this.netWarning = networkData?.warning
    }
}

export const networkStore = new NetworkStore()
