import { useBaseVersion } from "@/hooks/cgi/useBaseVerion";
import { useBlinkStatus } from "@/hooks/cgi/useBlinkStatus";
import { useChart } from "@/hooks/cgi/useCharts";
import { useCheckOnline } from "@/hooks/cgi/useCheckOnline";
import { useLog } from "@/hooks/cgi/useLog";
import { useMinerConf } from "@/hooks/cgi/useMinerConf";
import { useNetworkInfo } from "@/hooks/cgi/useNetworkInfo";
import { useNonces } from "@/hooks/cgi/useNonces";
import { usePools } from "@/hooks/cgi/usePools";
import { useRandomElapsed } from "@/hooks/cgi/useRandomElapsed";
import { useSerial } from "@/hooks/cgi/useSerial";
import { useServerSettings } from "@/hooks/cgi/useSettings";
import { useStats } from "@/hooks/cgi/useStats";
import { useSummary } from "@/hooks/cgi/useSummary";
import { useVersions } from "@/hooks/cgi/useVersions";
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
        handler: fetchSummary,
        data: summaryJSON,
    } = useFetcher<ReactJsonViewProps>(useSummary)

    const {
        handler: fetchCheckOnline,
        data: checkOnlineJSON,
    } = useFetcher<ReactJsonViewProps>(useCheckOnline)

    const {
        handler: fetchNonces,
        data: noncesJSON,
    } = useFetcher<ReactJsonViewProps>(useNonces)


    const {
        handler: fetchChart,
        data: chartJSON,
    } = useFetcher<ReactJsonViewProps>(useChart)

    const {
        handler: fetchPools,
        data: poolsJSON,
    } = useFetcher<ReactJsonViewProps>(usePools)

    const {
        handler: fetchSerial,
        data: serialJSON,
    } = useFetcher<ReactJsonViewProps>(useSerial)

    const {
        handler: fetchNetworkInfo,
        data: networkInfoJSON,
    } = useFetcher<ReactJsonViewProps>(useNetworkInfo)


    const {
        handler: fetchStats,
        data: statsJSON,
    } = useFetcher<ReactJsonViewProps>(useStats)

    const {
        handler: fetchVersions,
        data: versionsJSON,
    } = useFetcher<ReactJsonViewProps>(useVersions)

    const {
        handler: fetchBaseVersion,
        data: baseVersionJSON,
    } = useFetcher<ReactJsonViewProps>(useBaseVersion)

    const {
        handler: fetchLog,
        data: logJSON,
    } = useFetcher<ReactJsonViewProps>(useLog)

    const {
        handler: fetchMinerConf,
        data: minerConfJSON,
    } = useFetcher<ReactJsonViewProps>(useMinerConf)

    const { 
        handler: fetchRandomElapsed, 
        data: randomElapsedJSON,
        longEnabled: randomElapsedLongEnabled,
        setLongEnabled: setRandomElapsedLongEnabled
    } = useLongPoolingFetcher<ReactJsonViewProps>(useRandomElapsed);

   
    return <section className="mt-12">
        <h1>{t('long_pooling.title')}</h1>
        <div className="overflow-x-auto mt-12">
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>{t('long_pooling.table.header.request')}</th>
                        <th>{t('long_pooling.table.header.fetch')}</th>
                        <th>{t('long_pooling.table.header.long_pooling')}</th>
                        <th>{t('long_pooling.table.header.response')}</th>
                    </tr>
                </thead>
                <tbody>                  
                        <tr>
                            <td>/cgi-bin/get_blink_status</td>
                            <td><button className="btn btn-primary btn-md" onClick={fetchBlinkStatus}>fetch</button></td>
                            <td><InDev /></td>
                            <td>{ blinkStatusJSON && (
                                <ReactJson src={blinkStatusJSON} />
                            )}</td>
                        </tr>
                        <tr>
                            <td>/cgi-bin_n/settings.cgi</td>
                            <td><button className="btn btn-primary btn-md" onClick={fetchSettings}>fetch</button></td>
                            <td><InDev /></td>
                            <td>{ settingsJSON && (
                                <ReactJson src={settingsJSON} />
                            )}</td>
                        </tr>
                        <tr>
                            <td>/cgi-bin_n/nonces.cgi</td>
                            <td><button className="btn btn-primary btn-md" onClick={fetchNonces}>fetch</button></td>
                            <td><InDev /></td>
                            <td>{ noncesJSON && (
                                <ReactJson src={noncesJSON} />
                            )}</td>
                        </tr>
                        <tr>
                            <td>/cgi-bin/summary.cgi</td>
                            <td><button className="btn btn-primary btn-md" onClick={fetchSummary}>fetch</button></td>
                            <td><InDev /></td>
                            <td>{ summaryJSON && (
                                <ReactJson src={summaryJSON} />
                            )}</td>
                        </tr>
                        <tr>
                            <td>/cgi-bin_n/check_online.cgi</td>
                            <td><button className="btn btn-primary btn-md" onClick={fetchCheckOnline}>fetch</button></td>
                            <td><InDev /></td>
                            <td>{ checkOnlineJSON && (
                                <ReactJson src={checkOnlineJSON} />
                            )}</td>
                        </tr>
                        <tr>
                            <td>/cgi-bin/stats.cgi</td>
                            <td><button className="btn btn-primary btn-md" onClick={fetchStats}>fetch</button></td>
                            <td><InDev /></td>
                            <td>{ statsJSON && (
                                <ReactJson src={statsJSON} />
                            )}</td>
                        </tr>

                        <tr>
                            <td>/cgi-bin/chart.cgi</td>
                            <td><button className="btn btn-primary btn-md" onClick={fetchChart}>fetch</button></td>
                            <td><InDev /></td>
                            <td>{ chartJSON && (
                                <ReactJson src={chartJSON} />
                            )}</td>
                        </tr>

                        <tr>
                            <td>/cgi-bin/pools.cgi</td>
                            <td><button className="btn btn-primary btn-md" onClick={fetchPools}>fetch</button></td>
                            <td><InDev /></td>
                            <td>{ poolsJSON && (
                                <ReactJson src={poolsJSON} />
                            )}</td>
                        </tr>

                        <tr>
                            <td>/cgi-bin/serial_get.cgi</td>
                            <td><button className="btn btn-primary btn-md" onClick={fetchSerial}>fetch</button></td>
                            <td><InDev /></td>
                            <td>{ serialJSON && (
                                <ReactJson src={serialJSON} />
                            )}</td>
                        </tr>

                        <tr>
                            <td>/cgi-bin/get_network_info.cgi</td>
                            <td><button className="btn btn-primary btn-md" onClick={fetchNetworkInfo}>fetch</button></td>
                            <td><InDev /></td>
                            <td>{ networkInfoJSON && (
                                <ReactJson src={networkInfoJSON} />
                            )}</td>
                        </tr>

                        <tr>
                            <td>/cgi-bin_n/settings/versions.json</td>
                            <td><button className="btn btn-primary btn-md" onClick={fetchVersions}>fetch</button></td>
                            <td><InDev /></td>
                            <td>{ versionsJSON && (
                                <ReactJson src={versionsJSON} />
                            )}</td>
                        </tr>

                        <tr>
                            <td>/cgi-bin_n/settings/base_version.conf</td>
                            <td><button className="btn btn-primary btn-md" onClick={fetchBaseVersion}>fetch</button></td>
                            <td><InDev /></td>
                            <td>{ baseVersionJSON && (
                                <ReactJson src={baseVersionJSON} />
                            )}</td>
                        </tr>

                        <tr>
                            <td>/cgi-bin/log.cgi</td>
                            <td><button className="btn btn-primary btn-md" onClick={fetchLog}>fetch</button></td>
                            <td><InDev /></td>
                            <td>{ logJSON && (
                                <ReactJson src={logJSON} />
                            )}</td>
                        </tr>

                        <tr>
                            <td>/cgi-bin/get_miner_conf.cgi</td>
                            <td><button className="btn btn-primary btn-md" onClick={fetchMinerConf}>fetch</button></td>
                            <td><InDev /></td>
                            <td>{ minerConfJSON && (
                                <ReactJson src={minerConfJSON} />
                            )}</td>
                        </tr>

                        <tr>
                            <td>/cgi-bin/random_elapsed.cgi</td>
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