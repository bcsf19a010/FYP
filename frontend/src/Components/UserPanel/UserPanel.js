import React from 'react';
import "./userPanel.css"
export default function UserPanel ()
{
    return(
        <>
            <div className='userpanel'>
                <center><h1 className='qoute'><font color="orangered">MOVE IT</font> Or LOSE IT</h1></center>
                <div className='trainer'>
                   <h3 className='eqoute'><font color='black'>BODY ACHIEVES WHAT MIND BELEIVES</font></h3>
                    <ul>
                        <li>
                            <a href="humanclone"><img src={`${process.env.PUBLIC_URL}/images/b.png`} ></img> See Exercise</a>
                        </li>
                    </ul>
                </div>
                <hr></hr>
                <div  className='diet'  >
                <h3 className='dqoute'><font color="black">LIFE IS A TRAGEDY OF NUTRITUINTS</font></h3>
                    <ul >
                        <li>
                            <a href="addnutrient" className='ebutton'><img className='nImg' src={`${process.env.PUBLIC_URL}/images/nu.png`} ></img> See Nutrients</a>
                        </li>
                    </ul>
                </div>
            </div>
    </>    
    )
}
