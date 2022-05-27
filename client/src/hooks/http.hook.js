import {useCallback, useState} from 'react'
import {useDispatch} from "react-redux";
import {hideLoader, showLoader} from "../redux/Actions/actions";

export const useHttp = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        dispatch(showLoader)
        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }

            const response = await fetch(url, {method, body, headers})
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так')
            }

            dispatch(hideLoader)


            return data
        } catch (e) {
            dispatch(hideLoader)
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return { request, error, clearError }
}