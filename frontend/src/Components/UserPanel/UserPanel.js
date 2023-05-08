import React from 'react';
import "./userPanel.css"
export default function UserPanel ()
{
    return(
        
            <div className='container'>
                <div className='trainer'>
                    <h1>Hello</h1>
                    <ul className='trainer'>
                        <li>
                            <a href="/Home"><img src={`${process.env.PUBLIC_URL}/images/b.png`} ></img></a>
                        </li>
                        <li>
                            Welcome to the Gym
                        </li>
                    </ul>
                </div>
                <div  className='ebooks'  >
                <h1>Hello</h1>
                    <ul className='ebooks'>
                        <li>
                            <a href="/Home"><img className='nImg' src={`${process.env.PUBLIC_URL}/images/download.jpg`} ></img></a>
                        </li>
                        <li>
                            Welcome to the Gym
                        </li>
                    </ul>
                </div>

            </div>
    )
}
