import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch<T>(url: string) {
    const [data, setData] = useState<T>()
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (
            async function () {
                try {
                    setLoading(true)
                    const response = await axios.get(url)
                    setData(response.data)
                } catch (err : any) {
                    setError(err)
                } finally {
                    setLoading(false)
                }
            }
        )()
    }, [url])

    return { data, error, loading }
}