import React from 'react'
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <header style = {headerStyle}>
                <h1>To Do List </h1>
                <Link style = {linkStyle} to='/'>Home</Link> | <Link style = {linkStyle} to='/about'>About</Link>
            </header>
        </div>
    )
}

const headerStyle ={
    background: '#333',
    textAlign : 'center',
    color : '#fff',
    padding : '10px'
}

const linkStyle ={
   color:'#fff',
   padding : '10px'
}