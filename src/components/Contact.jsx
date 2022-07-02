import React from "react";
import { Grid } from "@material-ui/core";
const Contact = () => {
    return ( 
        <Grid item xs={12} sm={4} md={8} lg={12}>
        <section>

             <div>


           <img src="/images/3.jpg" alt="" style={{width:"100%",height:"100%"}} />
        
      
             <h1 style={{fontFamily:"fantasy",fontStyle:"italic",fontWeight:"bold",fontSize:"50px",paddingTop:"10px"}}>Contact-Us</h1>
             <p style={{fontFamily:"fantasy",fontSize:"50px"}}>
             Feel Free To Ask Any Question realted to MakeUp classes and other things <br />
             You can send your queries related to your orders on: query@gmail.com
             To send Suggestions E-mail at suggestion@gmail.com
           </p>
           
          
           </div>
        </section>
        </Grid>
    );
}
 
export default Contact;