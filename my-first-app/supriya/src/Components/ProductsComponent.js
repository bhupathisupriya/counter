import React from "react";
import NavComponent from "./NavComponent";
function productsComponent(){
    return(
        <>
        <NavComponent/>
        <div className="bg-pink-400">
         <h1 className="FONT font-bold">PRODUCTS AVAILABLE IN PRIYA CREATIONS</h1>
        <br>
        </br>

         <ol type="disc">
            <li>thread bangles</li>
            <li>thread earrings</li>
            <li>thread bracelets</li>
            <li>thread rings</li>
            <li>thread chains</li>
            
         </ol>
         <img src="C:\Users\Nagateja\Downloads\thread bangles image.jpg" alt="thred accessories"/>
        </div>
        </>
    );
}
export default productsComponent;