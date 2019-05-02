import React from 'react'

export default function Button({clickHandler}) {
    return (
        <button onClick={clickHandler}>
            CLICK IT!
        </button>
    )
}
