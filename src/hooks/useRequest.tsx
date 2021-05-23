import React, {useEffect, useState} from "react";

export default function useRequest(request:any):Array<any> {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState<Boolean>(false);
    const [error, setError] = useState('');

    useEffect(()=> {
        setLoading(true);
        request()
            .then((res:any) => setData(res.data))
            .catch((err:any) => setError(err))
            .finally(() => setLoading(false))
    }, [])

    return [data, loading, error]
}