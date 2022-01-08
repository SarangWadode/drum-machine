import React from 'react'

export default function Drumpad({className,dataKey,text,sound}) {
    return (
        <>
            <button className={className} id={dataKey} data-key={dataKey}>
                {text}
                <audio className='clip' id={text} src={sound}></audio>
            </button>
        </>
    )
}
