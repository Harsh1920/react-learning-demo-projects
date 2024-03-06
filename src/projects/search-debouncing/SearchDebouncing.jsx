import React, { useEffect, useState } from 'react';

const SearchDebouncing = () => {

    const [pincode, setPinCode] = useState("");

    useEffect(() => {
        const getData = setTimeout(async () => {
            const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
            if (!response.ok) {
                throw new Error("Something went wrong...");
            }
            const data = await response.json();
            console.log(data[0]);
        }, 1000);

        return () => {
            clearTimeout(getData);
            console.log("Clean up")
        }
    }, [pincode])

    return (
        <div>
            <input type="search" placeholder='Search pincode here....' onChange={(e) => setPinCode(e.target.value)} />
            <p>{pincode}</p>
        </div>
    )
}

export default SearchDebouncing;