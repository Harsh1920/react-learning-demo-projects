import React, { useState } from 'react';
import { useEffect } from 'react';


const API_REQUEST = `https://jsonplaceholder.typicode.com/todos/`;

const FetchDemo = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const response = await fetch(API_REQUEST);

        if (!response.ok) {
            throw new Error("Something went wrong....");
        }

        const apiData = await response.json();
        console.log(apiData);
        setData(apiData);
    }

    return (
        <div>
            <h2>API Data:</h2>
            <div>
                {data.map((user, key) => (
                    <div key={key}>
                        <div>ID: {user.id}</div>
                        <div>Title: {user.title}</div>
                    </div>
                )

                )}
            </div>
        </div>
    )
}

export default FetchDemo;