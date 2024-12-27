import { useAutoUpgradeConfig } from "@/hooks/cgi/useAutoUpgradeConfig";
import { useBlinkStatus } from "@/hooks/cgi/useBlinkStatus";
import { useRandomElapsed } from "@/hooks/cgi/useRandomElapsed";
import { useServerSettings } from "@/hooks/cgi/useSettings";
import { useStats } from "@/hooks/cgi/useStats";
import { useFetcher } from "@/services/cgi/cgi.fetch";
import { 
    //cgiFetchNoTimeout, 
    useLongPoolingFetcher } from "@/services/cgi/cgi.fetch.no-timeout";
import { FC, 
    //useCallback
    // , useEffect
    // , useState
 } from "react";
import { useTranslation } from "react-i18next";
import ReactJson, { ReactJsonViewProps } from 'react-json-view'

const LongPoolingPage: FC  = () => {
   
    const { t } = useTranslation();

    const {
        handler: fetchBlinkStatus,  
        data: blinkStatusJSON,
    } = useFetcher<ReactJsonViewProps>(useBlinkStatus)

    const {
        handler: fetchSettings,
        data: settingsJSON,
    } = useFetcher<ReactJsonViewProps>(useServerSettings)

    const {
        handler: fetchAutoUpgrade,
        data: autoUpgradeJSON,
    } = useFetcher<ReactJsonViewProps>(useAutoUpgradeConfig)

    const {
        handler: fetchStats,
        data: statsJSON,
    } = useFetcher<ReactJsonViewProps>(useStats)

    const { 
        handler: fetchRandomElapsed, 
        data: randomElapsedJSON,
        longEnabled: randomElapsedLongEnabled,
        setLongEnabled: setRandomElapsedLongEnabled
    } = useLongPoolingFetcher<ReactJsonViewProps>(useRandomElapsed);

   
    return <section className="">
        <h1>{t('long_pooling.title')}</h1>
        <div className="overflow-x-auto mt-12">
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>{t('long_pooling.table.header.title')}</th>
                        <th>{t('long_pooling.table.header.short')}</th>
                        <th>{t('long_pooling.table.header.long')}</th>
                        <th>{t('long_pooling.table.header.response')}</th>
                    </tr>
                </thead>
                <tbody>                  
                        <tr>
                            <td>Blink Status</td>
                            <td><button className="btn btn-primary btn-md" onClick={fetchBlinkStatus}>fetch</button></td>
                            <td><InDev /></td>
                            <td>{ blinkStatusJSON && (
                                <ReactJson src={blinkStatusJSON} />
                            )}</td>
                        </tr>
                        <tr>
                            <td>Settings</td>
                            <td><button className="btn btn-primary btn-md" onClick={fetchSettings}>fetch</button></td>
                            <td><InDev /></td>
                            <td>{ settingsJSON && (
                                <ReactJson src={settingsJSON} />
                            )}</td>
                        </tr>
                        <tr>
                            <td>Auto Upgrade Config</td>
                            <td><button className="btn btn-primary btn-md" onClick={fetchAutoUpgrade}>fetch</button></td>
                            <td><InDev /></td>
                            <td>{ autoUpgradeJSON && (
                                <ReactJson src={autoUpgradeJSON} />
                            )}</td>
                        </tr>
                        <tr>
                            <td>Stats</td>
                            <td><button className="btn btn-primary btn-md" onClick={fetchStats}>fetch</button></td>
                            <td><InDev /></td>
                            <td>{ statsJSON && (
                                <ReactJson src={statsJSON} />
                            )}</td>
                        </tr>
                        <tr>
                            <td>Random Elapsed</td>
                            <td><button className="btn btn-primary btn-md" onClick={fetchRandomElapsed}>fetch</button></td>
                            <td>
                                <div className="flex flex-row items-center justify-start gap-3 text-sm italic text-primary">
                                <label htmlFor="">long pooling mode: </label>
                                <input type="radio" className="radio radio-md radio-primary" 
                                checked={randomElapsedLongEnabled} 
                                onClick={() => setRandomElapsedLongEnabled(!randomElapsedLongEnabled)} 
                                onChange={() => {}} 
                                />
                                </div>
                            </td>   
                            <td>{ randomElapsedJSON && (
                                <ReactJson src={randomElapsedJSON || {}} />
                            )}</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </section>
}
export default LongPoolingPage

const InDev: FC = () => {
    return <span className="text-md text-warning">in development</span>
}