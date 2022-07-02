import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    h3 :
    {
        
        fontStyle:"bold",
        color:"white",
        paddingTop:"20px",
        textAlign:"center",
        fontSize:"40px"
      
       
        
        
    },
    link:
    {
        color:"white",
        paddingTop:"10px",
        fontSize:"30px",
        paddingLeft:"40px",
        textAlign:"center"

    },
    para:
    {
        paddingLeft:"30px",
        fontStyle:"bold",
        color:"white",
        fontSize:"30px",
        textAlign:"center"
    },
    span:
    {
        fontStyle:"italic",
        fontSize:"26px",
        color:"#e57373" ,
       
    }
    
       
    
      }));
const LandingPage = () => {
    const classes =useStyles();
    return ( 
        
        <Grid item xs={12} sm={6} md={8} lg={12}>
            <section style={{backgroundImage:"url(/images/back.jpg)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
            
        <div>
      
        <h1 className={classes.h3}>
            BEAUTIFY
            
            <br />
            <span className={classes.span}>
            FIND YOUR MATCH SHADE! 
        </span> 
      
            </h1>
            
            <h2 className={classes.para}>
            HIGH-PERFORMING NATURAL PRODUCTS
        </h2>
       <p className={classes.link}>

           <h1>
             AdminPanel
           </h1>
   
       </p>
         
        
    </div>
</section>
<section style={{paddingTop:"2px"}} >
<div>
    <h1 style={{fontFamily:"fantasy",fontStyle:"italic",fontWeight:"bold",fontSize:"80px"}}>LIVE FREE ,FEEL FREE  </h1>
  <img src="/images/1.jpg" alt="" style={{width:"100%"}}/>

</div>
<div style={{backgroundImage:"url(/images/building.jpg)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
    <h1 style={{fontFamily:"fantasy",fontStyle:"italic",fontWeight:"bold",fontSize:"80px",color:"white"}}>STAY IN THE KNOW <br /><span> Join Us On This Amazing Adventure </span></h1>
    
</div>
</section>

    
   </Grid>
    
        
             
     );
}
 
export default LandingPage;