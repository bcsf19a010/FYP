import React from "react";
import "./userPanel.css";
export default function UserPanel() {
  const username = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div className="up-home">
        <div className="up-cntnr">
          <div>
            <h1 style={{ color: "white" }}>
              Hi! <i>{username.username}</i>
            </h1>
            <p className="up-txt">Shape Your Body Well</p>
          </div>
        </div>
      </div>

      <div className="up-cntnr">
        <h1 style={{ fontWeight: "bold" }}>We care about what we offer</h1>
        <p>Who are in extremely love with eco friendly system.</p>
      </div>
      <div className="up-card-container" style={{ margin: "50px 0px" }}>
        <div className="up-card" style={{ backgroundColor: "#E74C3C" }}>
          <a href="/humanClone">
            <img
              className="nImg"
              src={`${process.env.PUBLIC_URL}/images/bodybuilder.png`}
              alt="myImage"
            ></img>
            <h1>See Exercises</h1>
          </a>
          <i>
            <h4 style={{ color: "white" }}>What Are You Training Today?</h4>
            <h4 style={{ color: "white" }}>Train like Professionals.</h4>
          </i>
        </div>
        <div className="up-card" style={{ backgroundColor: "#F4D03F" }}>
          <a href="calNutrient" className="ebuttonForUP">
            <img
              className="nImg"
              src={`${process.env.PUBLIC_URL}/images/healthy-food.png`}
              alt="myImage"
            ></img>
            <h1>Calculate Nutrients</h1>
          </a>
          <i>
            <h4 style={{ color: "white" }}>What Did You Eat Today?</h4>
            <h5 style={{ color: "white" }}>
              Wanna Know Nutrients in your Diet?
            </h5>
          </i>
        </div>
        <div className="up-card" style={{ backgroundColor: "#E67E22" }}>
          <a href="viewEbooks" className="ebuttonForUP">
            <img
              className="nImg"
              src={`${process.env.PUBLIC_URL}/images/ebook.png`}
              alt="myImage"
            ></img>
            <h1>See Ebooks</h1>
          </a>
          <i>
            <h4 style={{ color: "white" }}>
              Want to Train Like Professionals?
            </h4>
            <h4 style={{ color: "white" }}>See Our Ebooks.</h4>
          </i>
        </div>
      </div>
    </>
  );
}

// return (
//   <>
//     <div className="userpanel">
//       <center>
//         <h1 className="qoute" style={{ color: "white" }}>
//           <font color="orangered">MOVE IT</font> Or LOSE IT
//         </h1>
//       </center>
//       <div className="mainConForUP">
//         <div className="exerciseForUP">
//           {/* <h3 className='eqouteForUP'><font color='black'>BODY ACHIEVES WHAT MIND BELEIVES</font></h3> */}
//           <ul className="ulForUP">
//             <li className="ilForUP">
//               <a href="humanclone" className="ebuttonForUP">
//                 <img
//                   src={`${process.env.PUBLIC_URL}/images/bodybuilder.png`}
//                   alt="myImage"
//                 ></img>
//                 <h3 style={{ color: "white" }}> See Exercise</h3>
//               </a>
//             </li>
//           </ul>
//         </div>
//         <hr></hr>
//         <div className="diet">
//           {/* <h3 className='dqoute'><font color="black">LIFE IS A TRAGEDY OF NUTRITUINTS</font></h3> */}
//           <ul className="ulForUP">
//             <li className="ilForUP">
//               <a href="calNutrient" className="ebuttonForUP">
//                 <img
//                   className="nImg"
//                   src={`${process.env.PUBLIC_URL}/images/healthy-food.png`}
//                   alt="myImage"
//                 ></img>
//                 <h3 style={{ color: "white" }}> See Nutrients</h3>
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="ebooksForUP">
//           {/* <h3 className='dqoute'><font color="black">LIFE IS A TRAGEDY OF NUTRITUINTS</font></h3> */}
//           <ul className="ulForUP">
//             <li className="ilForUP">
//               <a href="viewEbooks" className="ebuttonForUP">
//                 <img
//                   className="nImg"
//                   src={`${process.env.PUBLIC_URL}/images/ebook.png`}
//                   alt="myImage"
//                 ></img>{" "}
//                 <h3 style={{ color: "white" }}>See Ebooks</h3>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </>
// );
//}
