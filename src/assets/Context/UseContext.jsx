import React from 'react'
import CreateContext from './CreatContext'

const UseContext = (props) => {
    // Function to fetch data from the API

    const FetchingData = async () => {
        let response = await fetch('https://fakestoreapi.com/products')
        let data = await response.json()
        return data
    }
    return (
        <CreateContext.Provider value={FetchingData}>
            {props.children}
        </CreateContext.Provider>
    )
}

export default UseContext
