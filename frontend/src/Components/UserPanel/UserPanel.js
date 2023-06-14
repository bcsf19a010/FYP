import React from 'react';
import "./userPanel.css"
export default function UserPanel ()
{
    return(
        <>
            <div className='userpanel'>
                <center><h1 className='qoute'><font color="orangered">MOVE IT</font> Or LOSE IT</h1></center>
                <div className="mainConForUP">
                    <div className='exerciseForUP'>
                    {/* <h3 className='eqouteForUP'><font color='black'>BODY ACHIEVES WHAT MIND BELEIVES</font></h3> */}
                        <ul className="ulForUP">
                            <li className="ilForUP" >
                                <a href="humanclone" className='ebuttonForUP'><img src={`${process.env.PUBLIC_URL}/images/bodybuilder.png`} ></img><h3> See Exercise</h3></a>
                            </li>
                        </ul>
                    </div>
                    <hr></hr>
                    <div  className='diet'  >
                    {/* <h3 className='dqoute'><font color="black">LIFE IS A TRAGEDY OF NUTRITUINTS</font></h3> */}
                        <ul className="ulForUP">
                            <li className="ilForUP">
                                <a href="addnutrient" className='ebuttonForUP'><img className='nImg' src={`${process.env.PUBLIC_URL}/images/healthy-food.png`} ></img><h3> See Nutrients</h3></a>
                            </li>
                        </ul>
                    </div>
                    <div  className='ebooksForUP'  >
                    {/* <h3 className='dqoute'><font color="black">LIFE IS A TRAGEDY OF NUTRITUINTS</font></h3> */}
                        <ul className="ulForUP">
                            <li className="ilForUP">
                                <a href="addnutrient" className='ebuttonForUP'><img className='nImg' src={`${process.env.PUBLIC_URL}/images/ebook.png`} ></img> <h3>See Nutrients</h3></a>
                            </li>
                        </ul>
                    </div>
                </div> 
            </div>
    </>    
    )
}
