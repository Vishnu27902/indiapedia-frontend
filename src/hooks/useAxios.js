import { useEffect } from "react";
import { useSelector } from "react-redux";

import axios from "../api/axios";
import useRefresh from "./useRefresh";

function useAxios() {
    const refresh = useRefresh()
    const { accessToken } = useSelector((state) => state.auth)

    useEffect(() => {
        const requestInterceptor = axios.interceptors.request.use(
            config => {
                if (!config.headers["Authorization"]) {
                    config.headers['Authorization'] = `Bearer ${accessToken}`;
                }
                return config
            }, (error) => {
                return Promise.reject(error)
            }
        )
        const responseInterceptor = axios.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true
                    const newAccessToken = await refresh()
                    prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`
                    return axios(prevRequest)
                }
                return Promise.reject()
            }
        )

        return (() => {
            axios.interceptors.request.eject(requestInterceptor);
            axios.interceptors.response.eject(responseInterceptor);
        })
    }, [accessToken, refresh])
    return axios
}

export default useAxios