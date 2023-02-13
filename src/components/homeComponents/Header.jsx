//importar React
import React from 'react';
import HeaderImg from '../../images/header_1.png';


export function Header(props) {
    return (
        <header className='header'>
            <img src={HeaderImg} />
        </header>
    )
}