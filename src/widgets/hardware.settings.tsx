//import { useEffect, useState, FC, ChangeEvent } from 'react';

//import deviceFormConfig from './../../../configs/deviceFormConf.js';

//import Form from 'react-bootstrap/Form';
///import InputGroup from 'react-bootstrap/InputGroup';

//import Dropdown from 'react-bootstrap/Dropdown';

//import InputText from './../../../ui_elems/InputFormTextAsFormGroup.js';
//import { SettingsFormContext } from './context/SettingsFormContext.js';

import { useTranslation } from "react-i18next";

//import { InputFormVoltage } from '../../../ui_elems/InputFormVoltage'

//import { state } from '../../../state'

//import { getData, postData } from "../../../providers/cgiProvider";

//import { CGI_URL_LIST } from "../../../providers/requestURLs";
//import ReactDOM from 'react-dom/client';
//import { Button } from 'react-bootstrap';

/* Need aliasing!! */
//import { useHardwareStore } from '@/providers/settings';

// const FREQ_LEVEL = deviceFormConfig.fieldsIds.FREQ_LEVEL;
// const AUTO_DOWN_FREQ = deviceFormConfig.fieldsIds.AUTO_DOWN_FREQ;
// const TUNER_VOLTAGE = deviceFormConfig.fieldsIds.TUNER_VOLTAGE;
// const TARGET_VOLTAGE = deviceFormConfig.fieldsIds.TARGET_VOLTAGE;
// const WATCHDOG_ACTIVE = deviceFormConfig.fieldsIds.WATCHDOG_ACTIVE;
// const START_INCOMPLETE_CHAINS = deviceFormConfig.fieldsIds.START_INCOMPLETE_CHAINS;
// const FAN_CTRL = deviceFormConfig.fieldsIds.FAN_CTRL;
// const FAN_PWM = deviceFormConfig.fieldsIds.FAN_PWM;
// const IGNORE_FAN = deviceFormConfig.fieldsIds.IGNORE_FAN;

// const FREQ_LEVEL = `FREQ_LEVEL`;
// const AUTO_DOWN_FREQ = `AUTO_DOWN_FREQ`;
// const TUNER_VOLTAGE = `TUNER_VOLTAGE`;
// const TARGET_VOLTAGE = `TARGET_VOLTAGE`;
// const WATCHDOG_ACTIVE = `WATCHDOG_ACTIVE`;
// const START_INCOMPLETE_CHAINS = `START_INCOMPLETE_CHAINS`;
// const FAN_CTRL = `FAN_CTRL`;
// const FAN_PWM = `FAN_PWM`;
// const IGNORE_FAN = `IGNORE_FAN`;

// const inputIDsMatchToGetter = {
//   FREQ_LEVEL: 'bitmain-freq-level',
//   AUTO_DOWN_FREQ: 'auto-down-freq',
//   TUNER_VOLTAGE: 'tuner-voltage',
//   TARGET_VOLTAGE: 'target-voltage',
//   WATCHDOG_ACTIVE: 'watchdog-active',
//   START_INCOMPLETE_CHAINS: 'start-incomplete-chains',
//   FAN_CTRL: 'bitmain-fan-ctrl',
//   FAN_PWM: 'bitmain-fan-pwm',
//   IGNORE_FAN: 'ignore-fan'
// }

// const c_css = `#setFreqDropdown:after {
//             display: none; 
//                       }
// #setFreqDropdown input::-webkit-outer-spin-button,
// #setFreqDropdown input::-webkit-inner-spin-button {
//   -webkit-appearance: none;
//   margin: 0;
// }

// /* Firefox */
// #setFreqDropdown input[type=number] {
//   -moz-appearance: textfield;
// }`

export default function HardwareSettings() {


  // При изменении параметра в сторе меняем данные в модели формы

  // const [showWarningState, setShowWarningState] = useState(false);
  // const [showState, setShowState] = useState(false);
  // const [inputFreqAsProfileState, setInputFreqAsProfileState] = useState(true);
  // const [emergencyFreqSetState, setEmergencyFreqSetState] = useState(false);
  // const [hardwareSettingsFormState, setHardwareSettingsFormState] = useState({});
  //const [
   // freqLevelsFormattedListState, 
    //setFreqLevelsFormattedListState
  //] = useState([]);
  
  // const { 
  //   poolsState, 
  //   //hardwareSettingsState, 
  //   freqLevelsListState, 
  //   apiSettingsState, 
  //   sendDataState, 
  //   setSendDataState 
  // } = useContext(SettingsFormContext);
  
  
  const { t } = useTranslation();
  //---------------------------------------------------------------------*

  // const [minFreq, setMinFreq] = useState(null);
  // const [maxFreq, setMaxFreq] = useState(null);
  // const [stepFreq, setStepFreq] = useState(null);
  // const [stepOneFreq, setStepOneFreq] = useState(null);
  // const [minVolt, setMinVolt] = useState(null);
  // const [maxVolt, setMaxVolt] = useState(null);
  // const [freqMulter, setFreqMulter] = useState(null);
  
  //---------------------------------------------------------------------*
  
  // const [frequency, setFrequency] = useState(minFreq);
  // const [hashrate, setHashrate] = useState(frequency * freqMulter);
  // const [consumption, setConsumption] = useState(frequency);

  // const [frequencyOne, setFrequencyOne] = useState(minFreq);
  // const [hashrateOne, setHashrateOne] = useState(frequencyOne * freqMulter);
  // const [consumptionOne, setConsumptionOne] = useState(frequencyOne);
  // const [useStepOneFreq, setUseStepOneFreq] = useState(false);



  // Это дожно быть вынесенов хук

//   async function getDataFromFile(url) {
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error loading the file:', error);
//       return null;
//     }
//   }

//   async function loadData() {
//     const data = await getDataFromFile(CGI_URL_LIST.FREQ_RANGE);
//     setMinFreq(data.minFreq)
//     setMaxFreq(data.maxFreq)
//     setStepFreq(data.stepFreq)
//     setMinVolt(data.minVolt)
//     setMaxVolt(data.maxVolt)
//     setFreqMulter(data.freqMulter)
//     setStepOneFreq(data.stepOneFreq)
//     return data
//   }

//   loadData();


  //!

  // useEffect(() => {
  //   state.hardware.tmpDeviceSettings.setData(state.hardware.deviceSettings.getData())
  //   postData(CGI_URL_LIST.CALC_VOLT, { frequency: state.hardware.tmpDeviceSettings.frequency }).then(data => {
  //     if (data && data.voltage) {
  //       state.hardware.tmpDeviceSettings.setVoltage(data.voltage)
  //       handleInputData(TARGET_VOLTAGE, data.voltage)
  //     }
  //   })
  // }, []);


  // useEffect(() => {
  
  // const formState = { ...hardwareSettingsFormState };
  // const getterState = { ...hardwareSettingsState };
  
  // let getterIsNotEmpty = false;

  // Object.keys(getterState).forEach(key => {
  //   if (getterState[key] !== null && getterState[key] !== undefined && getterState[key] !== '' && (typeof getterState[key] == "number" || typeof getterState[key] == "boolean" || typeof getterState[key] == "string"))
  //     getterIsNotEmpty = true
  //   });

  //   if (Object.keys(formState).length == 0 && getterIsNotEmpty) {
  //     setHardwareSettingsFormState(getterState);
  //     setSendDataState({ ...sendDataState, ...getterState });
  //   }

  //   if ((!hardwareSettingsState?.["bitmain-freq-level"] ||
  //     hardwareSettingsState?.["bitmain-freq-level"] === '' ||
  //     isNaN(hardwareSettingsState?.["bitmain-freq-level"]) ||
  //     Number(hardwareSettingsState?.["bitmain-freq-level"]) < 0 ||
  //     Number(hardwareSettingsState?.["bitmain-freq-level"]) > 2501)) {
  //     console.log('Bad bitmain-freq-level', hardwareSettingsState["bitmain-freq-level"])
  //     if (emergencyFreqSetState === false) {
  //       setEmergencyFreqSetState(true)
  //       //ВЫСТАВИТЬ LEVEL в завод
  //       getterState["bitmain-freq-level"] = '0';
  //       setHardwareSettingsFormState(getterState);
  //       setSendDataState({ ...sendDataState, ...getterState });
  //     }
  //   } else {
  //     if (emergencyFreqSetState === true) {
  //       setEmergencyFreqSetState(false);
  //       setHardwareSettingsFormState(getterState);
  //       setSendDataState({ ...sendDataState, ...getterState });
  //     }
  //   }
  // }, [hardwareSettingsState]);


  // useEffect(() => {
  //   let listAPI = freqLevelsListState && Array.isArray(freqLevelsListState) ? freqLevelsListState : [];
  //   setFreqLevelsFormattedListState([...listAPI, { value: '100', title: 'Only Factory mode!!!' }]);
  // }, [freqLevelsListState])

  // useEffect(() => {
  //   const freqLevel = hardwareSettingsFormState[inputIDsMatchToGetter.FREQ_LEVEL]
  //   if (freqLevel !== undefined && !isNaN(freqLevel)) {
  //     setFrequency(freqLevel)
  //     setHashrate(freqLevel * freqMulter)
  //     setConsumption(freqLevel)
  //   }
  // }, [hardwareSettingsFormState[inputIDsMatchToGetter.FREQ_LEVEL]])


  //function handleInputData(id, data) {
  //   let tmp = { ...hardwareSettingsFormState };
  //   tmp[inputIDsMatchToGetter[id]] = data;
  //   setHardwareSettingsFormState(tmp);
  //   setSendDataState({ ...sendDataState, ...tmp });
  //   setRand(Math.random())

  //   console.log(hardwareSettingsFormState)
  //   console.log((isNaN(parseInt(hardwareSettingsFormState[inputIDsMatchToGetter.TUNER_VOLTAGE])) ? 0 : parseInt(hardwareSettingsFormState[inputIDsMatchToGetter.TUNER_VOLTAGE]))
  //     + isNaN(parseInt(hardwareSettingsFormState[inputIDsMatchToGetter.FREQ_LEVEL])) ? 0 : parseInt(hardwareSettingsFormState[inputIDsMatchToGetter.FREQ_LEVEL]))
  //}


  //const handleInputFreqData = (id, freq, inputFreqModeAsProfile) => {
    
    // if (inputFreqModeAsProfile !== undefined)
    //   setInputFreqAsProfileState(inputFreqModeAsProfile);
    // setShowState(true);
    // handleInputData(id, Number(freq).toFixed(0));
    // state.hardware.tmpDeviceSettings.setFrequency(freq);

    // postData(CGI_URL_LIST.CALC_VOLT, { frequency: freq }).then(data => {
    //   try {
    //     if (data && data.voltage !== undefined) {
    //       state.hardware.tmpDeviceSettings.setVoltage(data.voltage);
    //       handleInputData(TARGET_VOLTAGE, data.voltage);
    //     }
    //   } catch (e) { }
    // });
  //};

  // -----------------------------------------------------------------//*
// useEffect(() => {
//   console.log("Frequency changed:", frequency); // Убедитесь, что срабатывает
//   // @officefish Чтобы что??
// }, [frequency]);
// -----------------------------------------------------------------//*

  // function freqIsInList() {
  //   let elem = freqLevelsFormattedListState.find(elem => elem.value === hardwareSettingsFormState[inputIDsMatchToGetter[FREQ_LEVEL]]);
  //   return elem !== undefined ? true : false
  // }

  // const postDataWithDebounce = useCallback(
  //   debounce((frequency) => {
  //     postData(CGI_URL_LIST.CALC_VOLT, { frequency }).then(data => {
  //       if (data && data.voltage !== undefined) {
  //         state.hardware.tmpDeviceSettings.setVoltage(data.voltage);
  //         handleInputData(TARGET_VOLTAGE, data.voltage);
  //       }
  //     });
  //   }, 300),
  //   []
  // );

  // // const { handleInputFreqData } = useContext(SettingsFormContext);

  // const handleFrequencyChange = (e) => {
  //   const newConsumption = parseInt(e.target.value, 10);
  //   const newFrequency = Math.round(newConsumption);
  //   setFrequency(newFrequency);
  //   setHashrate(newFrequency * freqMulter);
  //   setConsumption(newConsumption);
  //   handleInputFreqData(FREQ_LEVEL, newConsumption, false);
  //   postDataWithDebounce(newFrequency);//!
  //   console.log(frequency,122333);
  //   console.log(hashrate, 222333111);
  //   console.log(consumption, 333222111);
    
  // };


  // useEffect(() => {
  //   if (frequency !== undefined) {
  //     postDataWithDebounce(frequency);
  //   }
  // }, [frequency]); 

  // const handleHashrateChange = (e) => {
  //   const newHashrate = parseInt(e.target.value, 10);
  //   const newFrequency = Math.round(newHashrate / freqMulter);
  //   setFrequency(newFrequency);
  //   setHashrate(newHashrate);
  //   setConsumption(newFrequency);
  //   handleInputFreqData(FREQ_LEVEL, newFrequency, false);
  //   postDataWithDebounce(newFrequency); //!
  // };

  // const handleConsumptionChange = (e) => {
  //   const newConsumption = parseInt(e.target.value, 10);
  //   const newFrequency = Math.round(newConsumption);
  //   setFrequency(newFrequency);
  //   setHashrate(newFrequency * freqMulter);
  //   setConsumption(newConsumption);
  //   handleInputFreqData(FREQ_LEVEL, newConsumption, false);
  // }


  // const handleInput = (e) => {
  //   const newFrequency = parseInt(e.target.innerText, 10);
  //   if (!isNaN(newFrequency) && newFrequency > minFreq && newFrequency < maxFreq) {
  //     setFrequency(newFrequency);
  //   }
  // }

  // const [isOpen, setIsOpen] = useState(false);
  // const freqLevelIsFactory = hardwareSettingsFormState && hardwareSettingsFormState[inputIDsMatchToGetter.FREQ_LEVEL] === '100'
  // const freq = state.hardware.freqLevel.getFreqLevelByValue(state.hardware.tmpDeviceSettings.frequency)
  // const freqTitle = freq !== undefined ? freq.title : state.hardware.tmpDeviceSettings.frequency.toString()

  // const [invalid, setInvalid] = useState(true)
  // const [needAdvanced, setNeedAdvanced] = useState(false)

  return <div className="c_subsection">
    
    {/* title */}
    <div className="h5 mb-3">
      {t("DEVICE_SETTINGS")}
    </div>

    {/* daisyUI card needed */}
    <div className="c_card-1">

      {/* <style>{c_css}</style> */}

      {/* <FrequencyModeSettings setInvalid={setInvalid} needAdvanced={needAdvanced}/> */}
      {/* <AccurateSettings setInvalid={setInvalid}/>
      <AdvancedDeviceSettings setInvalid={setInvalid} needAdvanced={needAdvanced}/> */}
      {/* <VoltageSettings setInvalid={setInvalid}/> */}
      {/* <AdditionalDeviceSettings setInvalid={setInvalid} />  */}
    </div>
  </div>
}

// interface IElementProps {
//     setInvalid: (invalid: boolean) => void;
//     needAdvanced?: boolean
// }


// const FrequencyModeSettings: FC<IElementProps> = (props) => {
    
//    const { t } = useTranslation();

//    const {setInvalid, needAdvanced} = props 
    
//   const {
//     frequency,
//     hashrate,
//     consumption,
//     frequencyMulter,
//     minFrequency,
//     maxFrequency,
//     stepFrequency,
//     stepAdvancedFrequency
//   } = useHardwareStore()

//   // Подвязываем состояния формы с текущими значениями из стора
//   const [formFrequency, setFormFrequency] = useState(frequency)
//   const [formHashrate, setFormHashrate] = useState(hashrate)
//   const [formConsumption, setFormConsumption] = useState(consumption)

//   useEffect(() => {
//     setFormFrequency(frequency)
//   }, [frequency])

//   useEffect(() => {
//     setFormHashrate(hashrate)
//   }, [hashrate])

//   useEffect(() => {
//     setFormConsumption(consumption)
//   }, [consumption])

//   const handleFrequency = (e: ChangeEvent<HTMLInputElement>) => {
//     const newConsumption = parseInt(e.target.value, 10);
//     const newFrequency = Math.round(newConsumption);
//     setFormFrequency(newFrequency);
//     setFormHashrate(newFrequency * frequencyMulter);
//     setFormConsumption(newConsumption);
//     setInvalid(true)
//   }

//   const handleHashrate = (e: ChangeEvent<HTMLInputElement>) => {
//     const newHashrate = parseInt(e.target.value, 10);
//     const newFrequency = Math.round(newHashrate / frequencyMulter);
//     setFormFrequency(newFrequency);
//     setFormHashrate(newHashrate);
//     setFormConsumption(newFrequency);
//     setInvalid(true)
//   }

//   const handleConsumption = (e: ChangeEvent<HTMLInputElement>) => {
//     const newConsumption = parseInt(e.target.value, 10);
//     const newFrequency = Math.round(newConsumption);
//     setFormFrequency(newFrequency);
//     setFormHashrate(newFrequency * frequencyMulter);
//     setFormConsumption(newConsumption);
//     setInvalid(true)
//   }

//   const handleFrequencyBlur = () => {

//   }

//   return (
//     <section className='flex flex-row' style={{ display: 'flex', flexDirection: 'row' }}>
//         <div style={{ flexGrow: 0, lineHeight: '2.75em', marginRight: '0.5em' }}>
//           <Form.Label>{t('FREQ_LEVEL')}</Form.Label>
//         </div>
//         <div style={{ width: '400px', margin: 0, padding: 0 }}>
//           <InputGroup>
//             <div className='containerFreqLevelMain'>
//               <div className='containerFreqMH'>
//                 <div className='containerFreqTitle c_input-1 form-control'>
//                   <p>{t('FREQUENCY')}: 
//                     <span contentEditable 
//                     onBlur={handleFrequencyBlur} 
//                     suppressContentEditableWarning 
//                     style={{ display: 'inline-block', width: '60px', textAlign: 'center' }}
//                   >{formFrequency}</span> {t("MHZ")}</p>
//                 </div>
//                 <input
//                   className="inputFreq"
//                   type="range"
//                   min={minFrequency}
//                   max={maxFrequency}
//                   step={needAdvanced ? stepAdvancedFrequency : stepFrequency}
//                   id="frequencySlider"
//                   value={formFrequency}
//                   onChange={handleFrequency}
//                   // disabled={isOpen}
//                 />
//               </div>
//               <div className='containerFreqHash'>
//                 <div className='containerFreqTitle c_input-1 form-control'>
//                   <p>{t('HASHRATE')}: {hashrate.toFixed(2)} {t("TH")}</p>
//                 </div>
//                 <input
//                   className="inputFreq"
//                   type="range"
//                   min={Math.round(minFrequency * frequencyMulter)} // minFreq * freqMulter
//                   max={Math.round(maxFrequency * frequencyMulter)} // maxFreq * freqMulter
//                   step={needAdvanced 
//                     ? stepAdvancedFrequency * frequencyMulter 
//                     : stepFrequency * frequencyMulter} // stepOneFreq * freqMulter : stepFreq * freqMulter
//                   id="hashrateSlider"
//                   value={formHashrate}
//                   onChange={handleHashrate}
//                   // disabled={isOpen}
//                 />
//               </div>
//               <div className='containerFreqCons'>
//                 <div className='containerFreqTitle c_input-1 form-control'>
//                   <p>{t('ENERGY_CONSUMPTION')}: {consumption} {t('KWT')}</p>
//                 </div>
//                 <input
//                   className="inputFreq"
//                   type="range"
//                   min={minFrequency}
//                   max={maxFrequency}
//                   step={needAdvanced ? stepAdvancedFrequency : stepFrequency}
//                   id="consumptionSlider"
//                   value={formConsumption}
//                   onChange={handleConsumption}
//                 //   disabled={isOpen}
//                 />
//               </div>
//             </div>
//           </InputGroup>
//         </div>
//       </section>
//   )
// }

// const AccurateSettings: FC<IElementProps>  = (props) => {  

//   const {setInvalid } = props
//   const { t } = useTranslation();

//   const {
//     accurate,
//   } = useHardwareStore()

//   const [formAccurate, setFormAccurate] = useState(accurate)
  
//   const handleAccurate = () => {
//     setFormAccurate(!formAccurate);
//     setInvalid(true)
//   }
  
//   return <Form.Check
//   label={t('ACCURATE')}
//   type='checkbox'
//   checked={formAccurate}
//   onChange={handleAccurate} />
// }

// const AdvancedDeviceSettings: FC<IElementProps>  = (props) => {

//   const {setInvalid, needAdvanced } = props
//   const { t } = useTranslation();

//   const [isOpen, setIsOpen] = useState(false)

//   const {
//     advancedFrequency,
//     advancedHashrate,
//     advancedConsumption,
//     frequencyMulter,
//     minFrequency,
//     maxFrequency,
//     stepFrequency,
//     stepAdvancedFrequency
//   } = useHardwareStore()

//   // Подвязываем состояния формы с текущими значениями из стора
//   const [formFrequency, setFormFrequency] = useState(advancedFrequency)
//   const [formHashrate, setFormHashrate] = useState(advancedHashrate)
//   const [formConsumption, setFormConsumption] = useState(advancedConsumption)

//   useEffect(() => {
//     setFormFrequency(advancedFrequency)
//   }, [advancedFrequency])

//   useEffect(() => {
//     setFormHashrate(advancedHashrate)
//   }, [advancedHashrate])

//   useEffect(() => {
//     setFormConsumption(advancedConsumption)
//   }, [advancedConsumption])

//   const handleFrequency = (e: ChangeEvent<HTMLInputElement>) => {
//     const newConsumption = parseInt(e.target?.value, 10);
//     const newFrequency = Math.round(newConsumption);
//     setFormFrequency(newFrequency);
//     setFormHashrate(newFrequency * frequencyMulter);
//     setFormConsumption(newConsumption);
//     setInvalid(true)
//   }

//   const handleHashrate = (e: ChangeEvent<HTMLInputElement>) => {
//     const newHashrate = parseInt(e.target.value, 10);
//     const newFrequency = Math.round(newHashrate / frequencyMulter);
//     setFormFrequency(newFrequency);
//     setFormHashrate(newHashrate);
//     setFormConsumption(newFrequency);
//     setInvalid(true)
//   }

//   const handleConsumption = (e: ChangeEvent<HTMLInputElement>) => {
//     const newConsumption = parseInt(e.target.value, 10);
//     const newFrequency = Math.round(newConsumption);
//     setFormFrequency(newFrequency);
//     setFormHashrate(newFrequency * frequencyMulter);
//     setFormConsumption(newConsumption);
//     setInvalid(true)
//   }

//   return (
//     <>
//       <Form.Check
//         type="checkbox"
//         onClick={() => setIsOpen(!isOpen)}
//         label={t('PAID_OVERCLOCKING')} />
//       <section className='containerOverclockingOnBoards'>
//         {isOpen && (
//           <InputGroup>
//             <ul className='containerFreqLevelMainUl'>
//               <li>
//                 <div className='containerFreqLevelMain'>
//                   <Form.Label>{t('HASHBOARD')}</Form.Label>
//                   <div className='containerFreqMH'>
//                     <div className='containerFreqTitle c_input-1 form-control'>
//                       <p>{t('FREQUENCY')}: {formFrequency} {t("MHZ")}</p>
//                     </div>
//                     <input
//                       className="inputFreq"
//                       type="range"
//                       min={minFrequency}
//                       max={maxFrequency}
//                       step={needAdvanced ? stepAdvancedFrequency : stepFrequency}
//                       id="frequencySlider"
//                       value={formFrequency}
//                       onChange={handleFrequency}
//                     />
//                   </div>
//                   <div className='containerFreqHash'>
//                     <div className='containerFreqTitle c_input-1 form-control'>
//                       <p>{t('HASHRATE')}: {formHashrate.toFixed(2)} {t("TH")}</p>
//                     </div>
//                     <input
//                       className="inputFreq"
//                       type="range"
//                       min={Math.round(minFrequency * frequencyMulter)}
//                       max={Math.round(maxFrequency * frequencyMulter)}
//                       step={needAdvanced 
//                         ? stepAdvancedFrequency * frequencyMulter 
//                         : stepFrequency * frequencyMulter}
//                       id="hashrateSlider"
//                       value={formHashrate}
//                       onChange={handleHashrate}
//                     />
//                   </div>
//                   <div className='containerFreqCons'>
//                     <div className='containerFreqTitle c_input-1 form-control'>
//                       <p>{t('ENERGY_CONSUMPTION')}: {formConsumption} {t('KWT')}</p>
//                     </div>
//                     <input
//                       className="inputFreq"
//                       type="range"
//                       min={minFrequency}
//                       max={maxFrequency}
//                       step={needAdvanced ? stepAdvancedFrequency : stepFrequency}
//                       id="consumptionSlider"
//                       value={formConsumption}
//                       onChange={handleConsumption}
//                     />
//                   </div>
//                 </div>
//               </li><br />
//               <li>
//                 <div className='containerFreqLevelMain'>
//                   <Form.Label>{t('HASHBOARD')}</Form.Label>
//                   <div className='containerFreqMH'>
//                     <div className='containerFreqTitle c_input-1 form-control'>
//                       <p>{t('FREQUENCY')}: {formFrequency} {t("MHZ")}</p>
//                     </div>
//                     <input
//                       className="inputFreq"
//                       type="range"
//                       min={minFrequency}
//                       max={maxFrequency}
//                       step={needAdvanced ? stepAdvancedFrequency : stepFrequency}
//                       id="frequencySlider"
//                       value={formFrequency}
//                       onChange={handleFrequency}
//                     />
//                   </div>
//                   <div className='containerFreqHash'>
//                     <div className='containerFreqTitle c_input-1 form-control'>
//                       <p>{t('HASHRATE')}: {formHashrate.toFixed(2)} {t("TH")}</p>
//                     </div>
//                     <input
//                       className="inputFreq"
//                       type="range"
//                       min={Math.round(minFrequency * frequencyMulter)}
//                       max={Math.round(maxFrequency * frequencyMulter)}
//                       step={needAdvanced 
//                         ? stepAdvancedFrequency * frequencyMulter 
//                         : stepFrequency * frequencyMulter}
//                       id="hashrateSlider"
//                       value={formHashrate}
//                       onChange={handleHashrate}
//                     />
//                   </div>
//                   <div className='containerFreqCons'>
//                     <div className='containerFreqTitle c_input-1 form-control'>
//                       <p>{t('ENERGY_CONSUMPTION')}: {formConsumption} {t('KWT')}</p>
//                     </div>
//                     <input
//                       className="inputFreq"
//                       type="range"
//                       min={minFrequency}
//                       max={maxFrequency}
//                       step={needAdvanced ? stepAdvancedFrequency : stepFrequency}
//                       id="consumptionSlider"
//                       value={formConsumption}
//                       onChange={handleConsumption}
//                     />
//                   </div>
//                 </div>
//               </li><br />
//               <li>
//                 <div className='containerFreqLevelMain'>
//                   <Form.Label>{t('HASHBOARD')}</Form.Label>
//                   <div className='containerFreqMH'>
//                     <div className='containerFreqTitle c_input-1 form-control'>
//                       <p>{t('FREQUENCY')}: {formFrequency} {t("MHZ")}</p>
//                     </div>
//                     <input
//                       className="inputFreq"
//                       type="range"
//                       min={minFrequency}
//                       max={maxFrequency}
//                       step={needAdvanced ? stepAdvancedFrequency : stepFrequency}
//                       id="frequencySlider"
//                       value={formFrequency}
//                       onChange={handleFrequency}
//                     />
//                   </div>
//                   <div className='containerFreqHash'>
//                     <div className='containerFreqTitle c_input-1 form-control'>
//                       <p>{t('HASHRATE')}: {formHashrate.toFixed(2)} {t("TH")}</p>
//                     </div>
//                     <input
//                       className="inputFreq"
//                       type="range"
//                       min={Math.round(minFrequency * frequencyMulter)}
//                       max={Math.round(maxFrequency * frequencyMulter)}
//                       step={needAdvanced 
//                         ? stepAdvancedFrequency * frequencyMulter 
//                         : stepFrequency * frequencyMulter}
//                       id="hashrateSlider"
//                       value={formHashrate}
//                       onChange={handleHashrate}
//                     />
//                   </div>
//                   <div className='containerFreqCons'>
//                     <div className='containerFreqTitle c_input-1 form-control'>
//                       <p>{t('ENERGY_CONSUMPTION')}: {formConsumption} {t('KWT')}</p>
//                     </div>
//                     <input
//                       className="inputFreq"
//                       type="range"
//                       min={minFrequency}
//                       max={maxFrequency}
//                       step={needAdvanced ? stepAdvancedFrequency : stepFrequency}
//                       id="consumptionSlider"
//                       value={formConsumption}
//                       onChange={handleConsumption}
//                     />
//                   </div>
//                 </div>
//               </li><br />
//               <li>
//                 <div className='containerFreqLevelMain'>
//                   <Form.Label>{t('HASHBOARD')}</Form.Label>
//                   <div className='containerFreqMH'>
//                     <div className='containerFreqTitle c_input-1 form-control'>
//                       <p>{t('FREQUENCY')}: {formFrequency} {t("MHZ")}</p>
//                     </div>
//                     <input
//                       className="inputFreq"
//                       type="range"
//                       min={minFrequency}
//                       max={maxFrequency}
//                       step={needAdvanced ? stepAdvancedFrequency : stepFrequency}
//                       id="frequencySlider"
//                       value={formFrequency}
//                       onChange={handleFrequency}
//                     />
//                   </div>
//                   <div className='containerFreqHash'>
//                     <div className='containerFreqTitle c_input-1 form-control'>
//                       <p>{t('HASHRATE')}: {formHashrate.toFixed(2)} {t("TH")}</p>
//                     </div>
//                     <input
//                       className="inputFreq"
//                       type="range"
//                       min={Math.round(minFrequency * frequencyMulter)}
//                       max={Math.round(maxFrequency * frequencyMulter)}
//                       step={needAdvanced 
//                         ? stepAdvancedFrequency * frequencyMulter 
//                         : stepFrequency * frequencyMulter}
//                       id="hashrateSlider"
//                       value={formHashrate}
//                       onChange={handleHashrate}
//                     />
//                   </div>
//                   <div className='containerFreqCons'>
//                     <div className='containerFreqTitle c_input-1 form-control'>
//                       <p>{t('ENERGY_CONSUMPTION')}: {formFrequency} {t('KWT')}</p>
//                     </div>
//                     <input
//                       className="inputFreq"
//                       type="range"
//                       min={maxFrequency}
//                       max={maxFrequency}
//                       step={needAdvanced ? stepAdvancedFrequency : stepFrequency}
//                       id="сonsumptionSlider"
//                       value={formConsumption}
//                       onChange={handleConsumption}
//                     />
//                   </div>
//                 </div>
//               </li><br />
//             </ul>
//           </InputGroup>
//         )}
//     </section>
//     </>
    
//   )
// }


// const VoltageSettings: FC<IElementProps> = (props) => {

//   const {setInvalid } = props

//   // observer(({
//   //   id,
//   //   id2,
//   //   inputType,
//   //   labelText,
//   //   labelText2,
//   //   placeholder,
//   //   descriptionText,
//   //   inputHandler,
//   //   min=-1.5,
//   //   max=1.5,
//   //   classesFormGroup='',
//   //   classesFormLabel='',
//   //   classesFormControl='',
//   //   classesFormText=''
//   // }, tmpDeviceSettings) => {

//   const { t } = useTranslation()

//   const {
//     voltageTuner,
//     voltage
//   } = useHardwareStore()

//   const [currentId, ] = useState(1000)
//   const [formVoltageTuner, setFormVoltageTuner] = useState(voltageTuner)
//   const [formVoltage, setFormVoltage] = useState(voltage)

//   useEffect(() => {
//     setFormVoltage(voltage)
//   }, [voltage])

//   useEffect(() => {
//     setFormVoltageTuner(voltageTuner)
//   }, [voltageTuner])
  
//   const handleVoltageTuner = (e: ChangeEvent<HTMLInputElement>) => {
//     const inputValue = +e.target.value * 100
//     const max = Math.min(Math.max(-150, inputValue), 150)
//     setFormVoltageTuner(max);
//     setInvalid(true)
//     //inputHandler(id, max)
//   }

//   const handleVoltage = (e: ChangeEvent<HTMLInputElement>) => {
//     const inputValue = +e.target.value * 100
//     const tune = inputValue //- state.hardware.tmpDeviceSettings.voltage
//     const max = Math.min(Math.max(-150, tune), 150)
//     setFormVoltage(max)
//     setInvalid(true)
//     //inputHandler(id, max)
//     //inputHandler(id2, Number(e.target.value) * 100)
//   }

//   return (
//     <section style={{ margin: '1em 0 0 0' }}>
//       <Form.Group 
//         controlId={'voltage-tuner-' + currentId} 
//         //className={classesFormGroup}
//         >
//       <div style={{display: 'flex', flexDirection: 'row'}}>
//         <div style={{flexGrow: 0, lineHeight: '2.75em', marginRight: '0.5em'}}>
//           <Form.Label 
//           //className={classesFormLabel}
//           >
//             {t('settings.hardvare.voltage.label')}
//           </Form.Label>
//         </div>
//         <div style={{width: '120px', position: 'relative'}}>
//           <Form.Control
//             //type={text}
//             //placeholder={placeholder}
//             value={(formVoltageTuner / 100).toFixed(2)}
//             min={0}
//             max={1}
//             step={0.01}
//             //className={classesFormControl}
//             onInput={handleVoltageTuner}
//         />
//     </div>
//     <div style={{marginTop: '0.7em', marginLeft: '0.25em', marginRight: '0.5em'}}>{t('VOLT_SHORT')}</div>
//     <div style={{flexGrow: 0, lineHeight: '2.75em', marginLeft: '1.5em'}}>
//       <Form.Label 
//       //className={classesFormLabel}
//       >
//         {'labelText2'}
//         </Form.Label>
//     </div>
//     <div style={{width: '120px', marginLeft: '0.5em', position: 'relative'}}>
//       <Form.Control
//         //type={inputType}
//         //placeholder={placeholder}
//         step={0.01}
//         value={((formVoltage + formVoltageTuner) / 100).toFixed(2)}
//         onInput={handleVoltage}
//         // className={classesFormControl}
//         />
//     </div>
//       <div style={{marginTop: '0.7em', marginLeft: '0.25em', marginRight: '0.5em'}}>{t('VOLT_SHORT')}</div>
//     </div>
//     <Form.Text 
//     // className={classesFormText}
//     >
//       {'descriptionText'}
//     </Form.Text>
//   </Form.Group>
// </section>)
// }

// const AdditionalDeviceSettings: FC<IElementProps> = (props) => {

//   const {setInvalid } = props
//   const { t } = useTranslation();
  
//   // Тянем данные из стора
//   const {
//     onlyHydro,
//     ignoreFans,
//     needFanSpeed,
//     fanSpeed,
//     startNoAllChains,
//     hashrateRestart,
//     freqDownAuto,
//   } = useHardwareStore()

//   // Создаем местные сторы для формы
//   const [formOnlyHydro, setFormOnlyHydro] = useState(onlyHydro);
//   const [formIgnoreFans, setFormIgnoreFans] = useState(ignoreFans);
//   const [formNeedFanSpeed, setFormNeedFanSpeed] = useState(needFanSpeed);
//   const [formFanSpeed, setFormFanSpeed] = useState(fanSpeed);
//   const [formStartNoAllChains, setFormStartNoAllChains] = useState(startNoAllChains);
//   const [formHashrateRestart, setFormHashrateRestart] = useState(hashrateRestart);
//   const [formFreqDownAuto, setFormFreqDownAuto] = useState(freqDownAuto);

//   // Подвязываем состояния формы с текущими значениями из стора
//   useEffect(() => {
//     setFormNeedFanSpeed(needFanSpeed)
//   }, [needFanSpeed])

//   useEffect(() => {
//     setFormOnlyHydro(onlyHydro)
//   }, [onlyHydro])

//   useEffect(() => {
//     setFormIgnoreFans(ignoreFans)
//   }, [ignoreFans])

//   useEffect(() => {
//     setFormFanSpeed(fanSpeed)
//   }, [fanSpeed])

//   useEffect(() => {
//     setFormStartNoAllChains(startNoAllChains)
//   }, [startNoAllChains])

//   useEffect(() => {
//     setFormHashrateRestart(hashrateRestart)
//   }, [hashrateRestart])

//   useEffect(() => {
//     setFormFreqDownAuto(hashrateRestart)
//   }, [hashrateRestart])
  

//   const handleFreqDownAuto = () => {
//     setFormFreqDownAuto(!formFreqDownAuto)
//     setInvalid(true)
//   }

//   // const handleOnlyHydro = () => {
//   //   setFormOnlyHydro(!formOnlyHydro)
//   //   setInvalid(true)
//   // }

//   const handleIgnoreFans = () => {
//     setFormIgnoreFans(!formIgnoreFans)
//     setInvalid(true)
//   }

//   const handleFormFarmSpeed = () => {
//     setFormFanSpeed(formFanSpeed)
//     setInvalid(true)
//   }

//   const handleFormStartNoAllVhains = () => {
//     setFormStartNoAllChains(!formStartNoAllChains)
//     setInvalid(true)
//   }

//   const handleHashrateRestart = () => {
//     setFormHashrateRestart(formHashrateRestart)
//     setInvalid(true)
//   }

//   const handleFanSpeed = () => {
//     setFormNeedFanSpeed(!formNeedFanSpeed)
//   }

//   return (
//     <section>
//        <Form.Check
//         type="checkbox"
//         id={AUTO_DOWN_FREQ}
//         label={t('AUTO_DOWN_FREQ')}
//         checked={formFreqDownAuto}
//         onChange={handleFreqDownAuto}/>
//         <Form.Check
//           type="checkbox"
//           id={WATCHDOG_ACTIVE}
//           label={t('WATCHDOG_ACTIVE')}
//           checked={formHashrateRestart}
//          onChange={handleHashrateRestart} />
//         <Form.Check
//           type="checkbox"
//           id={START_INCOMPLETE_CHAINS}
//           label={t('START_INCOMPLETE_CHAINS')}
//           checked={formStartNoAllChains}
//           onChange={handleFormStartNoAllVhains} />
//         <Form.Check
//           type='checkbox'
//           id={FAN_CTRL}
//           label={t("FAN_CTRL")}
//           checked={formNeedFanSpeed}    
//           onChange={handleFanSpeed} />
//         {formNeedFanSpeed && (
//           <div style={{ margin: '1em 0' }}>

//             <input 
//             type="number" 
//             placeholder={t("FAN_FREQ")}
//             className="input input-bordered w-full max-w-xs" 
//             onChange={handleFormFarmSpeed}
//             min={0}
//             max={100}
//             />

//             {/* <
//               id={FAN_PWM}
//               inputType='number'
//               value={formFanSpeed}
//               min={0}
//               max={100}
//               labelText=''
//               placeholder={t("FAN_FREQ")}
//               descriptionText=''
//               inputHandler={handleFormFarmSpeed}
//               classesFormLabel="d-none"
//               classesFormControl='c_input-1'
//               classesFormText='text-muted' /> */}

//           </div>

//         )}
//         { formNeedFanSpeed && (
//           <Form.Check
//           type='checkbox'
//           id={IGNORE_FAN}
//           label={t("IGNORE_FAN")}
//           checked={formIgnoreFans}
//           onChange={handleIgnoreFans} />
//         )}
//         <Form.Text className='ms-4 text-warning'>
//           {t("ONLY_HYDRO")}
//         </Form.Text>
//      </section> 
//   )
// }