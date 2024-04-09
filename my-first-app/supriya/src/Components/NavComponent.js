import React from "react";

function NavComponent() {
    return(
        <>
        <div className="flex justify-center">
        <div>
            <a className="bg-yellow-400 mr-2 font-bold hover:bg-red-500" href="/">Home</a>
            <a className="bg-yellow-400 mr-2 font-bold hover:bg-red-500 " href="/about">ABOUT</a>
            <a className="bg-yellow-400 mr-2 font-bold hover:bg-red-500" href="/products">products</a>
            <a className="bg-yellow-400 mr-2 font-bold hover:bg-red-500 " href="/contactus">contactus</a>
        
        </div>
        </div>
        </>
    )    
}
export default NavComponent;