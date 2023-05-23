import React from 'react';
import "./userPanel.css"
export default function UserPanel ()
{
    return(
        <>
            <div className='userpanel'>
                <center><h1 className='qoute'><font color="orangered">MOVE IT</font> Or LOSE IT</h1></center>
                <div className='trainer'>
                   <center><h3>Welcome to the Gym</h3></center> 
                    <ul>
                        <li>
                            <a href="/Home"><img src={`${process.env.PUBLIC_URL}/images/b.png`} ></img></a>
                        </li>
                        
                    </ul>
                </div>
                <hr></hr>
                <div  className='diet'  >
                    <ul >
                        <li>
                            <a href="/Home"><img className='nImg' src={`${process.env.PUBLIC_URL}/images/download.jpg`} ></img></a>
                        </li>
                        <li>Welcome to the Gym</li>
                    </ul>
                </div>
                <hr></hr>
                <div  className='ebooks'  >
                    <ul >
                        <li>
                            <a href="/Home"><img className='nImg' src={`${process.env.PUBLIC_URL}/images/download.jpg`} ></img></a>
                        </li>
                        <li>
                            Welcome to the Gym
                        </li>
                    </ul>
                </div>

            </div>
    </>    
    )
}
