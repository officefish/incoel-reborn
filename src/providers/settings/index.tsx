import { FC, PropsWithChildren, useRef, useContext } from 'react'
import { createStore, StoreApi, useStore } from 'zustand'
import { createContext } from 'react' // from 'zustand/context'
import { IHardwareSettingsActions, IHardwareSettingsState } from './types'

type IHardwareSettingsStore = IHardwareSettingsState & IHardwareSettingsActions

const createHardwareStore = () =>
  createStore<IHardwareSettingsStore>()((set) => ({
    onlyHydro: false,
    ignoreFans: false,
    needFanSpeed: false,
    fanSpeed: 1,
    startNoAllChains: false,
    hashrateRestart: false,
    freqDownAuto: false,

    frequency: 0,
    hashrate: 0,
    consumption: 0,

    accurate: false,

    advancedFrequency: 0,
    advancedHashrate: 0,
    advancedConsumption: 0,

    voltageTuner: 0,
    voltage: 0,

    minFrequency: 0,
    maxFrequency: 100,
    stepFrequency: 5,
    stepAdvancedFrequency: 10,
    minVoltage: 3,
    maxVoltage: 9,
    frequencyMulter: 12,

    setOnlyHydro: (onlyHydro) => set(() => ({ onlyHydro })),
    setIgnoreFans: (ignoreFans) => set(() => ({ ignoreFans })),
    setNeedFanSpeed: (needFanSpeed) => set(() => ({ needFanSpeed })),
    setFanSpeed: (fanSpeed) => set(() => ({ fanSpeed })),
    setStartNoAllChains: (startNoAllChains) => set(() => ({ startNoAllChains })),
    setHashrateRestart: (hashrateRestart) => set(() => ({ hashrateRestart })),
    setFreqDownAuto: (freqDownAuto) => set(() => ({ freqDownAuto })),

    setFrequency: (frequency) => set(() => ({ frequency })),
    setHashrate: (hashrate) => set(() => ({ hashrate })),
    setConsumption: (consumption) => set(() => ({ consumption })),

    setAccurate: (accurate) => set(() => ({ accurate })),

    setAdvancedFrequency: (advancedFrequency) => set(() => ({ advancedFrequency })),
    setAdvancedHashrate: (advancedHashrate) => set(() => ({ advancedHashrate })),
    setAdvancedConsumption: (advancedConsumption) => set(() => ({ advancedConsumption })),

    setVoltageTuner: (voltageTuner) => set(() => ({ voltageTuner })),
    setVoltage: (voltage) => set(() => ({ voltage })),

    setMinFrequency: (minFrequency) => set(() => ({ minFrequency })),
    setMaxFrequency: (maxFrequency) => set(() => ({ maxFrequency })),
    setStepFrequency: (stepFrequency) => set(() => ({ stepFrequency })),
    setStepAdvancedFrequency: (stepAdvancedFrequency) => set(() => ({ stepAdvancedFrequency })),
    setMinVoltage: (minVoltage) => set(() => ({ minVoltage })),
    setMaxVoltage: (maxVoltage) => set(() => ({ maxVoltage })),
    setFrequencyMulter: (frequencyMulter) => set(() => ({ frequencyMulter })),
  }))

  type Store = ReturnType<typeof createHardwareStore>
  const HardwareContext = createContext<Store | null>(null)

  export const useHardwareStore = () => {
    const api = useContext(HardwareContext) as StoreApi<IHardwareSettingsStore>
    return {
      onlyHydro: useStore(api, (state) => state.onlyHydro),
      ignoreFans: useStore(api, (state) => state.ignoreFans),
      fanSpeed: useStore(api, (state) => state.fanSpeed),
      needFanSpeed: useStore(api, (state) => state.needFanSpeed),
      startNoAllChains: useStore(api, (state) => state.startNoAllChains),
      hashrateRestart: useStore(api, (state) => state.hashrateRestart),
      freqDownAuto: useStore(api, (state) => state.freqDownAuto),

      frequency: useStore(api, (state) => state.frequency),
      hashrate: useStore(api, (state) => state.hashrate),
      consumption: useStore(api, (state) => state.consumption),

      accurate: useStore(api, (state) => state.accurate),

      advancedFrequency: useStore(api, (state) => state.advancedFrequency),
      advancedHashrate: useStore(api, (state) => state.advancedHashrate),
      advancedConsumption: useStore(api, (state) => state.advancedConsumption),

      voltage: useStore(api, (state) => state.voltage),
      voltageTuner: useStore(api, (state) => state.voltageTuner),

      minFrequency: useStore(api, (state) => state.minFrequency),
      maxFrequency: useStore(api, (state) => state.maxFrequency),
      stepFrequency: useStore(api, (state) => state.stepFrequency),
      stepAdvancedFrequency: useStore(api, (state) => state.stepAdvancedFrequency),
      minVoltage: useStore(api, (state) => state.minVoltage),
      maxVoltage: useStore(api, (state) => state.maxVoltage),
      frequencyMulter: useStore(api, (state) => state.frequencyMulter),
      
      setOnlyHydro: useStore(api, (state) => state.setOnlyHydro),
      setIgnoreFans: useStore(api, (state) => state.setIgnoreFans),
      setFanSpeed: useStore(api, (state) => state.setFanSpeed),
      setNeedFanSpeed: useStore(api, (state) => state.setNeedFanSpeed),
      setStartNoAllChains: useStore(api, (state) => state.setStartNoAllChains),
      setHashrateRestart: useStore(api, (state) => state.setHashrateRestart),
      setFreqDownAuto: useStore(api, (state) => state.setFreqDownAuto),

      setFrequency: useStore(api, (state) => state.setFrequency),
      setHashrate: useStore(api, (state) => state.setHashrate),
      setConsumption: useStore(api, (state) => state.setConsumption),

      setAccurate: useStore(api, (state) => state.setAccurate),

      setAdvancedFrequency: useStore(api, (state) => state.setAdvancedFrequency),
      setAdvancedHashrate: useStore(api, (state) => state.setAdvancedHashrate),
      setAdvancedConsumption: useStore(api, (state) => state.setAdvancedConsumption),

      setVoltage: useStore(api, (state) => state.setVoltage),
      setVoltageTuner: useStore(api, (state) => state.setVoltageTuner),

      setMinFrequency: useStore(api, (state) => state.setMinFrequency),
      setMaxFrequency: useStore(api, (state) => state.setMaxFrequency),
      setStepFrequency: useStore(api, (state) => state.setStepFrequency),
      setStepAdvancedFrequency: useStore(api, (state) => state.setStepAdvancedFrequency),
      setMinVoltage: useStore(api, (state) => state.setMinVoltage),
      setMaxVoltage: useStore(api, (state) => state.setMaxVoltage),
      setFrequencyMulter: useStore(api, (state) => state.setFrequencyMulter),
    }
  }

  export const HardwareProvider: FC<PropsWithChildren> = ({ children }) => {
    const userTapsRef = useRef<Store>()
    if (!userTapsRef.current) {
      userTapsRef.current = createHardwareStore()
    }
    return (
      <HardwareContext.Provider value={userTapsRef.current}>
        {children}
      </HardwareContext.Provider>
    )
  }