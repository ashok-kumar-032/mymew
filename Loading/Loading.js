import React from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Oval } from 'react-loader-spinner'
const Loading = () => {
    return (
        <div className='loader'>
            <Oval
                ariaLabel="loading-indicator"
                height={100}
                width={100}
                strokeWidth={1}
                strokeWidthSecondary={2000}
                color="blue"
                secondaryColor="red" />
        </div>
    )
}

export default Loading