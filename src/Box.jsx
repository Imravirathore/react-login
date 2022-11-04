import React from 'react'



const Box = () => {
  return (
    <>
    
    <div className="box">
        <h1>Welcome to Configuration</h1>

        <section>
            <div className="email">
                <label>Email</label>  
                <input type="text" id="email" />

                <div id="email-err">* Please fill Correct Email</div>
              
            </div>

            <div className="password">
                <label>Password</label>
                <input type="password" id="password" />
                <div id="pass-err"> * Please fill Correct Password</div>
            </div>

            <div className="remember">
                <p>Remember Me</p>
                <input type="checkbox" name="" id="" className="rememberMe" />
            </div>
         

            <div className="signIn">
                <button id="btn"> Sign In</button>
            </div>

        </section>
        
    </div>
    </>
  )
}

export default Box