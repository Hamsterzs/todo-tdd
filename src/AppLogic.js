import React, { useState } from 'react';

const AppLogic = () => {
    const [list, setList] = useState([])
    const [input, setInput] = useState("")
    const items = list.map((item, index) => <li key={index}>{item}</li>)

    const addItem = () => {
        if (input === "") return
        const search = list.find(item => item === input)
        if (search) return
        setList([...list, input])
        setInput("")
    }

    return { input, setInput, items, addItem }
}


export default AppLogic