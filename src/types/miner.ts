export interface IPool {
    url: string
    user: string
    pass: string
}

export interface IMinerConfig {
    pools: IPool[]
    "api-listen": boolean
    "api-network": boolean
    "api-groups": string
    "api-allow": string
    "bitmain-fan-ctrl": boolean
    "bitmain-fan-pwm": string
    "bitmain-use-vil": boolean
    "bitmain-freq": string
    "bitmain-voltage": string
}