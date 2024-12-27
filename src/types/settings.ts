export interface ILicense {
    period: boolean
    "period_end": string
    "period_start": string
}

export interface IFreqLevel {
    value: string
    title: string
}

export interface IAccountSettings {
    cgi: boolean
    autoupgrade: boolean
    "auto_tuner_tool": boolean
   "iautot_exists": boolean 
    license: ILicense
    "license_key": string
    "freq_level": IFreqLevel[]
}