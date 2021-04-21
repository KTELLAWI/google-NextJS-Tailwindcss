import React from 'react'

export default function Avatar({url,className}) {
    return (
        <img
        className={`rounded-full cursor-pointer h-10 transition animate-bounce duration-150 transform hover:scale-110"
        loading="lazy ${className}`}
        src={url}alt="profile picture"
        />
            
    )
}
