import { useState, useEffect } from "react";
const baseUrlMock = "./mock_db.json";
const baseUrl = "http://localhost:8080/service";

export default function useFetchService(mock) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function init() {
            try {
                const response = mock === true ? await fetch(baseUrlMock) : await fetch(baseUrl);
                if (response.ok) {
                    if (mock === true) {
                        let json = await response.json();
                        setData(json);
                    } else {
                        let json = await response.json();
                        json.map((response) => {
                            //console.log(response);
                            response.status = JSON.parse(response.status);
                            return response;
                        });
                        setData(json);
                    }
                } else {
                    throw response;
                }
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        }
        const interval=setInterval(()=>{
            init();
        },10000)
        return()=>clearInterval(interval)

    }, [mock]);

    return { data, loading };
}