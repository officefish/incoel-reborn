export interface INetwork {
    "nettype": string
    "netdevice": string
    "macaddr": string
    "ipaddress": string 
    "netmask": string
    "conf_nettype": string
    "conf_hostname": string
    "conf_ipaddress": string
    "conf_netmask": string
    "conf_gateway": string
    "conf_dnsservers": string
}

export interface IAutoTuner {
    "Working": boolean
    "HasLastLog": boolean
    "CurrentValue": number
    "SavedValue": number
}

export interface INetworkStatus {
    "auto_tuner": IAutoTuner
    online: boolean
    nonce?: string 
    "full_uptime": number
}