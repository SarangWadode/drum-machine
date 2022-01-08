import React from 'react'

export default function Drumpad({className,dataKey,text,sound,onClick}) {
    return (
        <>
            <button className={className} id={dataKey} data-key={dataKey} onClick={onClick}>
                {text}
                <audio className='clip' id={text} src={sound}></audio>
            </button>
        </>
    )
}
