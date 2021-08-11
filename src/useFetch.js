import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => { // just to demostrate the loading message by set a timer
            fetch(url) // fetching it from resources as a promise
            .then(res => {
                
                if(!res.ok) {
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false); 
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
        }, 1000);
    }, [url]); 


    return { data, isPending, error }
}

export default useFetch;