import React from 'react';
import { NavLink, Outlet } from 'react-router';

import App from './App';
import Text from './Text';
import Image from './Image';



const Layouts = () => {
    return (
        <div>
            <nav>
                <ul style={{display:'flex',
                    paddingBlock:'10px',
                    listStyle:'none',
                    justifyContent:'center',
                    alignItems:'center',
                    gap:'50px',
                    textDecoration:'none',
                    fontSize:'2rem',
                    marginBottom:'120px'
                }}>
                    <li><NavLink to='/'>App</NavLink></li>
                    <li><NavLink to='/image'>Image</NavLink></li>
                    <li><NavLink to='/text'>Text</NavLink></li>
                    
                </ul>
            </nav>
            <Outlet />

        </div>
    );
};

export default Layouts;