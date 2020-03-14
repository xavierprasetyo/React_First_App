import React from 'react'

export default function About() {
    return (
        <div style = {aboutStyle}>
            <h1>About</h1>
            <p>This is ToDo List App v1.0.0 by Xavier Prasetyo</p>
        </div>
    )
}
const aboutStyle ={
    textAlign : 'center',
    justifyContent : 'center',
    padding : '10px'
}; 