import React from "react";

import NavComponent from "./NavComponent";

function contactusComponent(){

    return(
        <>
        <NavComponent/>
        <div>
        <h1 className="font-bold"> Hello guys if you want hand made thread accessori designs please contactus by <u>priya creations</u></h1>
        <br>
        </br>
        <p>name:</p>
        <input type="text" placeholder="enter your name" /><br/>
        <p>adress:</p>
        <input type="text" placeholder="enter your adress"/><br/>
        

        


        </div>
        </>
    );
}
export default contactusComponent;