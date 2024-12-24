



  export interface IHardwareSettingsState {
    onlyHydro: boolean
    ignoreFans: boolean
    needFanSpeed: boolean
    fanSpeed: number
    startNoAllChains: boolean
    hashrateRestart: boolean
    freqDownAuto: boolean

    frequency: number
    hashrate: number
    consumption: number

    accurate: boolean

    advancedFrequency: number
    advancedHashrate: number
    advancedConsumption: number

    voltageTuner: number
    voltage: number

    minFrequency: number
    maxFrequency: number
    stepFrequency: number
    stepAdvancedFrequency: number
    minVoltage: number
    maxVoltage: number
    frequencyMulter: number
  }

  export interface IHardwareSettingsActions {
    setOnlyHydro: (onlyHydro: boolean) => void
    setIgnoreFans: (ignoreFans: boolean) => void
    setNeedFanSpeed: (needFanSpeed: boolean) => void
    setFanSpeed: (fanSpeed: number) => void
    setStartNoAllChains: (startNoAllChains: boolean) => void
    setHashrateRestart: (hashrateRestart: boolean) => void
    setFreqDownAuto: (freqDownAuto: boolean) => void
    setFrequency: (frequency: number) => void
    setHashrate: (hashrate: number) => void
    setConsumption: (consumption: number) => void
    setAccurate: (accurate: boolean) => void
    setAdvancedFrequency: (advancedFrequency: number) => void
    setAdvancedHashrate: (advancedHashrate: number) => void
    setAdvancedConsumption: (advancedConsumption: number) => void
    setVoltageTuner: (voltageTuner: number) => void
    setVoltage: (voltage: number) => void

    setMinFrequency: (minFrequency: number) => void
    setMaxFrequency: (maxFrequency: number) => void
    setStepFrequency: (stepFrequency: number) => void
    setStepAdvancedFrequency: (stepAdancedFrequency: number) => void
    setMinVoltage: (minVoltage: number) => void
    setMaxVoltage: (maxVoltage: number) => void
    setFrequencyMulter: (frequencyMulter: number) => void
  }