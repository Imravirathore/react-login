import React from 'react'
import img1 from "./Images/xa.png";
import img2 from "./Images/setting.png";

const Navbar = () => {
  return (
    <>
    
    <div className="navbar">
    <div className="logo">
        <img src={img1} alt="XA" srcset="" className="img_1" />
        <img src={img2} alt="XA" srcset="" className="img_2" />
        <h1>Configuration</h1>

    </div>

</div>
    </>
  )
}

export default Navbar