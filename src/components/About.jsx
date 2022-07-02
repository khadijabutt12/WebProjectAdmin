import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "@material-ui/core";
const About = () => {
    return (
        <Grid item xs={12} sm={4} md={8} lg={12}>
        <section>

             <div>


           <img src="/images/1.jpg" alt="" style={{width:"100%"}} />
        
      
             <h1 style={{fontFamily:"fantasy",fontStyle:"italic",fontWeight:"bold",fontSize:"50px",paddingTop:"10px"}}>About-Us</h1>
             <p style={{fontFamily:"fantasy",fontSize:"50px"}}>
              Beautify is an International Brand.We believe in customer satisfaction.
               Our Ultimate Goal is to give best to Our user.We Love our customers.
               SkinCare is the most important aspect of our brand.
               We only deal in organic products.We LaunchNew Products every 2 months 
               If you want to stay updated register yourself.
               Click On This Link To Register <Link underline="hover" href="/signup" style={{ fontFamily:"fantasy",color:"black",fontSize:"25px",paddingTop:"10px"}}>Register</Link><br/>
               Feel free to contact............  
           </p>
           
          
           </div>
        </section>
        </Grid>
      );
}
 
export default About;
