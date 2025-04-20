import React, { useEffect, useState } from 'react'
interface Datas {
    id: number;
    title: string;
    body: string;
}
function fetchdata() {
    const [data, setData] = useState([]);
    useEffect(() => {
        try {   
            const fetchData = async () => {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                let data = await response.json();
                setData(data);
                // console.log(data);
            }
            fetchData();
        }catch(error) {
            console.log("Failed to fetch data:", error);
        }
    }, []);
    return (
        <div>
        <ul>
            {data.map((data: Datas) => (
    <li key={(data.id)}>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
        </li>

        ),)}
        </ul>
        </div>
    )
    }

export default fetchdata
