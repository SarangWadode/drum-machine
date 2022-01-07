import React from 'react'

export default function Drumpad({className,dataKey,text,sound}) {
    const audio = document.querySelectorAll('.clip');
    console.log(audio)
    return (
        <div>
            <button className={className} id={dataKey} data-key={dataKey}>
                {text}
                <audio className='clip' id={text} src={sound}></audio>
            </button>
        </div>
    )
}
