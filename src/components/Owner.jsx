import { useState } from "react";
import React from "react";
import './Owner.css'




const Owner =() =>{
    const [clicked, setClick] = useState("content");
    const updateClick = () =>{
        if(clicked === "content"){
            setClick("showcontents")

        } else {
            setClick("content")
        }
        
        
    }
    return (
        
           /*{ <Accordion defaultActiveKey="0">
             <accordian-item eventKey="0">
                 <accordian-header> Read More</accordian-header>
                 <accordian-body>
                    Breeder's Name: Tam 
                    Phone <a href="tel:0411378859"> 0411378859</a>
                    Email <a href="mailto:mg80@live.com.au">mg80@live.com.au</a>
                 </accordian-body>
                 </accordian-item>
              
           </Accordion> */
        
    <div>
        <button type="button" class="collapisble" onClick={updateClick}>Read More</button>
        <div class={clicked}>
            <p>
                class: {clicked}
                Loreal Paris...
                Loreal Paris...
                Loreal Paris...
                Loreal Paris...Loreal Paris...
            </p>
        </div>
    </div>

     
    )
}

export default Owner