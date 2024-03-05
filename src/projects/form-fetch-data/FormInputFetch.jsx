import React, { useEffect, useRef, useState } from 'react'

const FormInputFetch = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const nameRef = useRef(null);
    const emailRef = useRef(null);

    const fetchDetails = (e) => {
        e.preventDefault();

        // console.log("Name: ", name);
        // console.log("Email ID: ", email);

        console.log("Name: ", nameRef.current.value);
        console.log("Email ID: ", emailRef.current.value);

        e.target.reset();
    }

    useEffect(()=>{
        // emailRef.current?.focus();
    },[])

    return (
        <div>
            <form onSubmit={fetchDetails} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <input type='text' placeholder='Enter name...' onChange={(e) => setName(e.target.value)} ref={nameRef} />
                <input type='email' placeholder='Enter email id...' onChange={(e) => setEmail(e.target.value)} ref={emailRef} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormInputFetch;