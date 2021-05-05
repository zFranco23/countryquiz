import React from 'react'
import { useParams } from 'react-router'

function Questions() {

    const {name}=useParams();
    return (
        <div>
            {` question , result : ${name}`}
        </div>
    )
}

export default Questions
