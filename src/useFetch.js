import {useState, useEffect} from 'react'

// unless we started with use before fetch react wont recognize it as a cusom hook
const useFetch=(url)=>{
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(true);

// Put your side-effect logic into the callback function, 
// then use the dependencies argument to control when you want the side-effect to run. 
// That's the sole purpose of useEffect(). the dependencies passed to the side effect are of 3 types:
//A) Not provided: the side-effect runs after every rendering.
//B) An empty array []: the side-effect runs once after the initial rendering.
//C) Has props or state values [prop1, prop2, ..., state1, state2]: the side-effect runs once after initial rendering and then only when any dependency value changes.
    
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((response) => {
                    if(!response.ok){
                        throw Error("Could not fetch the data from the database")
                    }
                    return response.json()})
                .then((data) => {
                    setData(data);
                    setIsPending(false);
                    setError(null)
                }).catch(err => {
                    setIsPending(false)
                    setError(err.message)
                });
        }, 1000);
    }, [url]);

    return {data, error, isPending}

}


export default useFetch