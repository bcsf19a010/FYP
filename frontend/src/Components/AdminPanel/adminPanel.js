import React, { useState, useEffect } from 'react';
import "./adminPanel.css";

function AdminPanel() {

  return (
    
   <>
   
   <div className='p1'>
   
      <div className="container">
        <div className='exercise'>
          <a href="./exercise">        
          <img src="/images/fitness.png" alt="Photo 1"  /></a>
          <h3> <font color='white' >Exercises</font> </h3>
        </div>
        <div>    
          <a href="">
            <img src="/images/book.gif"alt="Photo 2" /></a>    
        </div>
        <div>
          <a href="">
          <img src="/images/boss.png" alt="Photo 3"  /></a>
        </div>
      </div>
    </div>
    </>
  );
}

export default AdminPanel;
