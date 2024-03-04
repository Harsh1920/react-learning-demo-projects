import React from 'react'

const InputDebouncing = () => {

    const myDebounce = (cb, delay) => {
        let timer;
        return function (...args) {
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                cb(...args)
            }, delay);
        }
    }

    const changeHander = myDebounce((e) => {
        console.log(e.target.value);
    }, 1000);

    return (
        <div>
            <input type="search" onChange={changeHander} />
        </div>
    )
}

export default InputDebouncing